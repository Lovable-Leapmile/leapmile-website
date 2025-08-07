import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import litepurpleLogo from "@/assets/litepurple-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const footerLinks = {
    company: [{
      name: "About Us",
      href: "#about"
    }, {
      name: "Careers",
      href: "#careers"
    }, {
      name: "Contact",
      href: "#contact"
    }],
    industries: [{
      name: "Quick Commerce",
      href: "/industries/quick-commerce"
    }, {
      name: "E-Commerce",
      href: "/industries/e-commerce"
    }, {
      name: "Omni Channel Retail",
      href: "/industries/omni-channel-retail"
    }, {
      name: "Industrial & MRO",
      href: "/industries/industrial-&-mro"
    }, {
      name: "Showcase Robot",
      href: "/industries/showcase-robot"
    }],
    technology: [{
      name: "Nano Warehouse",
      href: "/technology/nano-warehouse"
    }, {
      name: "Smart Locker - Qikpod",
      href: "/qikpod"
    }, {
      name: "Virtual Tour",
      href: "#virtual-tour"
    }]
  };

  const validateAndSubscribe = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address (@gmail.com)");
      return;
    }

    setIsSubscribing(true);
    
    try {
      const response = await fetch(
        `https://newproduction.qikpod.com:8985/notifications/email/send/?msg_type=regular&email_to_address=support%40leapmile.com&email_from_address=support%40leapmile.com&email_subject=Leapmile%20Robotics%20Subscribed%20User&email_message=Subscribed%20User%20Email%20id%3A%20%22${encodeURIComponent(email)}%22`,
        {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4NjQzNzUxODN9.3nKvoS0uuSwwZXPnv0-MyXKucUnpMBlCJuI97FR84z4'
          }
        }
      );

      if (response.ok) {
        toast.success(
          <div className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            Subscribed Successfully!
          </div>
        );
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast.error("Subscription failed. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };
  return <footer className="bg-foreground text-background py-16">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img src={litepurpleLogo} alt="LeapMile Logo" className="h-8 w-auto" />
              </div>
              <p className="text-muted mb-6 leading-relaxed">Discover robotic nano warehousing done the Leapmile way!</p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span>support@leapmile.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>(+91) 80470-95986</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-muted hover:text-primary transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>)}
                </ul>
              </div>

              {/* Industries Links */}
              <div>
                <h4 className="font-semibold mb-4">Industries</h4>
                <ul className="space-y-2">
                  {footerLinks.industries.map((link, index) => <li key={index}>
                      <Link to={link.href} className="text-muted hover:text-primary transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>

              {/* Technology Links */}
              <div>
                <h4 className="font-semibold mb-4">Technology</h4>
                <ul className="space-y-2">
                  {footerLinks.technology.map((link, index) => <li key={index}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="text-muted hover:text-primary transition-colors text-sm">
                          {link.name}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-muted hover:text-primary transition-colors text-sm">
                          {link.name}
                        </a>
                      )}
                    </li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card/10 rounded-2xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted mb-6">
                Get the latest news on robotics innovation and AI breakthroughs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your Gmail address" 
                  className="flex-1 bg-background text-foreground" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  className="bg-tech-gradient hover:shadow-tech whitespace-nowrap"
                  onClick={validateAndSubscribe}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-border/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted mb-4 md:mb-0">© 2024 All Rights Reserved | Leapmile Logistics Pvt.Ltd</div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted hover:text-primary"
                onClick={() => window.open('https://www.linkedin.com/company/leapmile/posts/?feedView=all', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
              <Link to="/terms-and-privacy" className="text-muted hover:text-primary transition-colors">
                Terms and Condition & Privacy Policy / Cookies Policy
              </Link>
              <Link to="/pricing-and-refunds" className="text-muted hover:text-primary transition-colors">
                Pricing / Refunds / Cancellations Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
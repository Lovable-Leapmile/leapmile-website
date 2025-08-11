import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Check, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const QikpodFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  const solutions = [
    { name: "Retail Click & Collect", path: "/qikpod/solutions/retail-click-collect" },
    { name: "Last Mile Delivery", path: "/qikpod/solutions/last-mile-delivery" },
    { name: "Digital Mailroom", path: "/qikpod/solutions/digital-mailroom" },
    { name: "University Parcel Hub", path: "/qikpod/solutions/university-parcel-hub" },
    { name: "Late Night Deliveries", path: "/qikpod/solutions/late-night-deliveries" },
  ];

  const validateAndSubscribe = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address (@gmail.com)");
      return;
    }
    setIsSubscribing(true);
    try {
      const response = await fetch(`https://newproduction.qikpod.com:8985/notifications/email/send/?msg_type=regular&email_to_address=support%40leapmile.com&email_from_address=support%40leapmile.com&email_subject=Leapmile%20Robotics%20Subscribed%20User&email_message=Subscribed%20User%20Email%20id%3A%20%22${encodeURIComponent(email)}%22`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4NjQzNzUxODN9.3nKvoS0uuSwwZXPnv0-MyXKucUnpMBlCJuI97FR84z4'
        }
      });
      if (response.ok) {
        toast.success(<div className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            Subscribed Successfully!
          </div>);
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

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-yellow-100 text-black pt-16 pb-8">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Contact Section Button */}
          <div className="text-center mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-semibold transition-colors"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <p className="text-lg font-semibold text-black mb-2">
                  intelligent Internet-of-Things (IoT) next-generation logistics platform.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-black" />
                  <span>support@leapmile.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-black" />
                  <span>(+91) 80470-95986</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-black" />
                  <span>Bangalore, KA</span>
                </div>
              </div>
            </div>

            {/* Solutions Links */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold mb-4 text-black">Solutions</h4>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <Link 
                      to={solution.path} 
                      className="text-black hover:text-gray-700 transition-colors text-sm"
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/50 rounded-2xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">Stay Updated</h3>
              <p className="text-black/80 mb-6">
                Get the latest news on robotics innovation and AI breakthroughs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your Gmail address" 
                  className="flex-1 bg-white text-black border-gray-300" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
                <Button 
                  className="bg-black hover:bg-gray-800 text-white whitespace-nowrap" 
                  onClick={validateAndSubscribe} 
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-black/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-black/70 mb-4 md:mb-0">
              © 2024 All Rights Reserved | Leapmile Logistics Pvt.Ltd
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-black hover:text-gray-700" 
                onClick={() => window.open('https://www.linkedin.com/company/qikpod/posts/?feedView=all', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
              <Link to="/terms-and-privacy" className="text-black/70 hover:text-black transition-colors">
                Terms and Condition & Privacy Policy / Cookies Policy
              </Link>
              <Link to="/pricing-and-refunds" className="text-black/70 hover:text-black transition-colors">
                Pricing / Refunds / Cancellations Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default QikpodFooter;

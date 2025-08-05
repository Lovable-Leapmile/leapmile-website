import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "News", href: "#news" },
      { name: "Contact", href: "#contact" }
    ],
    services: [
      { name: "Autonomous Robotics", href: "#services" },
      { name: "Smart Logistics", href: "#services" },
      { name: "Industrial Automation", href: "#services" },
      { name: "AI Software", href: "#services" }
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" },
      { name: "Support", href: "#support" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Compliance", href: "#compliance" }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={logoLight} 
                  alt="LeapMile Logo" 
                  className="h-8 w-auto dark:hidden"
                />
                <img 
                  src={logoDark} 
                  alt="LeapMile Logo" 
                  className="h-8 w-auto hidden dark:block"
                />
              </div>
              <p className="text-muted mb-6 leading-relaxed">
                Pioneering the future of autonomous technology through innovative 
                robotics and AI solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span>hello@leapmile.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>+1 (555) 123-4567</span>
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
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-muted hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
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
                  placeholder="Enter your email" 
                  className="flex-1 bg-background text-foreground"
                />
                <Button className="bg-tech-gradient hover:shadow-tech whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-border/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted mb-4 md:mb-0">
              © 2024 LeapMile. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-muted hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-muted hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
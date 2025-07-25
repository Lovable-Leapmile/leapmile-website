import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import { useTheme } from "@/hooks/useTheme";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, switchToQikpod, switchToLeapmile } = useTheme();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isQikpodMode = location.pathname.includes('qikpod');
  
  const handleToggleSwitch = (checked: boolean) => {
    if (checked) {
      switchToQikpod();
      navigate('/qikpod');
    } else {
      switchToLeapmile();
      navigate('/');
    }
  };

  const industriesItems = [
    "Quick Commerce",
    "E-Commerce", 
    "Omni Channel Retail",
    "Industrial & MRO",
    "Showcase Robot"
  ];

  const technologyItems = [
    "Nano Warehouse",
    "Smart Locker-Qikpod"
  ];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-0 my-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
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

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <img 
              src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Header&footer/lm_button.png" 
              alt="Leapmile" 
              className="h-6 w-6"
            />
            <Switch 
              checked={isQikpodMode}
              onCheckedChange={handleToggleSwitch}
              className="data-[state=checked]:bg-primary"
            />
            <img 
              src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Header&footer/q.png" 
              alt="Qikpod" 
              className="h-6 w-6"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {industriesItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#industries-${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTechnologyOpen(true)}
              onMouseLeave={() => setTechnologyOpen(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Technology</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {technologyOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {technologyItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#technology-${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#company" className="text-foreground hover:text-primary transition-colors">
              Company
            </a>
            <Button variant="default" className="bg-tech-gradient hover:shadow-tech">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-center space-x-2 py-2">
                <img 
                  src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Header&footer/lm_button.png" 
                  alt="Leapmile" 
                  className="h-6 w-6"
                />
                <Switch 
                  checked={isQikpodMode}
                  onCheckedChange={handleToggleSwitch}
                  className="data-[state=checked]:bg-primary"
                />
                <img 
                  src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Header&footer/q.png" 
                  alt="Qikpod" 
                  className="h-6 w-6"
                />
              </div>
              
              <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </a>
              
              {/* Mobile Industries */}
              <div className="space-y-2">
                <span className="text-foreground font-medium">Industries</span>
                <div className="pl-4 space-y-2">
                  {industriesItems.map((item, index) => (
                    <a
                      key={index}
                      href={`#industries-${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Mobile Technology */}
              <div className="space-y-2">
                <span className="text-foreground font-medium">Technology</span>
                <div className="pl-4 space-y-2">
                  {technologyItems.map((item, index) => (
                    <a
                      key={index}
                      href={`#technology-${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#company" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Company
              </a>
              <Button variant="default" className="bg-tech-gradient w-fit">
                Get Started
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
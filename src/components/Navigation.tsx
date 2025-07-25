import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import qikpodLogo from "@/assets/qikpod-logo.png";
import leapmileIcon from "@/assets/leapmile-icon.png";
import qikpodIcon from "@/assets/qikpod-icon.png";
import { useTheme } from "@/hooks/useTheme";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
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
    "Smart Locker-Qikpod",
    "Virtual Tour"
  ];

  const companyItems = [
    "About Us",
    "Careers", 
    "Contact Us"
  ];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-0 my-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {isQikpodMode ? (
              <img 
                src={qikpodLogo} 
                alt="Qikpod Logo" 
                className="h-8 w-auto"
              />
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Desktop Navigation - Only show on Leapmile page */}
          {!isQikpodMode && (
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

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Company</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {companyOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {companyItems.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Toggle Switch - Always positioned where Get Started was */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
              <button 
                onClick={() => handleToggleSwitch(false)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  !isQikpodMode 
                    ? 'bg-white shadow-md scale-110' 
                    : 'hover:bg-muted/80'
                }`}
              >
                <img 
                  src={leapmileIcon} 
                  alt="Leapmile" 
                  className="h-5 w-5"
                />
              </button>
              <button 
                onClick={() => handleToggleSwitch(true)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isQikpodMode 
                    ? 'bg-white shadow-md scale-110' 
                    : 'hover:bg-muted/80'
                }`}
              >
                <img 
                  src={qikpodIcon} 
                  alt="Qikpod" 
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Only show on Leapmile or when toggle is needed */}
          <div className="md:hidden">
            {!isQikpodMode ? (
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            ) : (
              <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
                <button 
                  onClick={() => handleToggleSwitch(false)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    !isQikpodMode 
                      ? 'bg-primary shadow-md scale-110' 
                      : 'hover:bg-muted/80'
                  }`}
                >
                  <img 
                    src={leapmileIcon} 
                    alt="Leapmile" 
                    className="h-4 w-4"
                  />
                </button>
                <button 
                  onClick={() => handleToggleSwitch(true)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isQikpodMode 
                      ? 'bg-primary shadow-md scale-110' 
                      : 'hover:bg-muted/80'
                  }`}
                >
                  <img 
                    src={qikpodIcon} 
                    alt="Qikpod" 
                    className="h-4 w-4"
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Mobile Toggle Switch */}
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
                  <button 
                    onClick={() => handleToggleSwitch(false)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      !isQikpodMode 
                        ? 'bg-primary shadow-md scale-110' 
                        : 'hover:bg-muted/80'
                    }`}
                  >
                    <img 
                      src={leapmileIcon} 
                      alt="Leapmile" 
                      className="h-5 w-5"
                    />
                  </button>
                  <button 
                    onClick={() => handleToggleSwitch(true)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isQikpodMode 
                        ? 'bg-primary shadow-md scale-110' 
                        : 'hover:bg-muted/80'
                    }`}
                  >
                    <img 
                      src={qikpodIcon} 
                      alt="Qikpod" 
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
              
              {/* Mobile Navigation Links - Only show on Leapmile page */}
              {!isQikpodMode && (
                <>
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
                  
                  {/* Mobile Company */}
                  <div className="space-y-2">
                    <span className="text-foreground font-medium">Company</span>
                    <div className="pl-4 space-y-2">
                      {companyItems.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={toggleMenu}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>;
};
export default Navigation;
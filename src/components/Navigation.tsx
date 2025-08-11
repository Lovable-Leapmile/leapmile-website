import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { navigateToContact } from "@/lib/navigation";
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
  const {
    theme,
    switchToQikpod,
    switchToLeapmile
  } = useTheme();

  // Refs for managing hover timeouts
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const technologyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced hover handlers with delays
  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
      industriesTimeoutRef.current = null;
    }
    setIndustriesOpen(true);
  };
  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150);
  };
  const handleTechnologyEnter = () => {
    if (technologyTimeoutRef.current) {
      clearTimeout(technologyTimeoutRef.current);
      technologyTimeoutRef.current = null;
    }
    setTechnologyOpen(true);
  };
  const handleTechnologyLeave = () => {
    technologyTimeoutRef.current = setTimeout(() => {
      setTechnologyOpen(false);
    }, 150);
  };
  const handleCompanyEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
      companyTimeoutRef.current = null;
    }
    setCompanyOpen(true);
  };
  const handleCompanyLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 150);
  };
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
  const industriesItems = [{
    name: "Quick Commerce",
    path: "/industries/quick-commerce"
  }, {
    name: "E-Commerce",
    path: "/industries/e-commerce"
  }, {
    name: "Omni Channel Retail",
    path: "/industries/omni-channel-retail"
  }, {
    name: "Industrial & MRO",
    path: "/industries/industrial-&-mro"
  }, {
    name: "Showcase Robot",
    path: "/industries/showcase-robot"
  }];
  const technologyItems = [{
    name: "Nano Warehouse",
    path: "/technology/nano-warehouse"
  }, {
    name: "Smart Locker-QikPod",
    path: "/qikpod"
  }, {
    name: "Virtual Tour",
    path: "/virtual-tour"
  }];
  const companyItems = ["About Us", "Careers", "Contact Us"];

  // Helper for About Us scroll
  const handleAboutUsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      navigate("/#about");
    }
  };

  // Handle scroll to about section after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        setTimeout(() => {
          aboutSection.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {isQikpodMode ? (
              <Link to="/qikpod" className="cursor-pointer">
                <img src={qikpodLogo} alt="QikPod Logo" className="h-auto w-28" />
              </Link>
            ) : (
              <Link to="/" className="cursor-pointer">
                <img src={logoLight} alt="LeapMile Logo" className="h-8 w-auto dark:hidden" />
                <img src={logoDark} alt="LeapMile Logo" className="h-8 w-auto hidden dark:block" />
              </Link>
            )}
          </div>

          {/* Desktop Navigation - Only show on Leapmile page */}
          {!isQikpodMode && <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              
              {/* Industries Dropdown */}
              <div className="relative" onMouseEnter={handleIndustriesEnter} onMouseLeave={handleIndustriesLeave}>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors py-2">
                  <span>Industries</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {industriesOpen && <div className="absolute top-full left-0 pt-2 w-56 z-50" onMouseEnter={handleIndustriesEnter} onMouseLeave={handleIndustriesLeave}>
                    <div className="bg-background border border-border rounded-md shadow-lg">
                      <div className="py-2">
                        {industriesItems.map((item, index) => <Link key={index} to={item.path} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                            {item.name}
                          </Link>)}
                      </div>
                    </div>
                  </div>}
              </div>

              {/* Technology Dropdown */}
              <div className="relative" onMouseEnter={handleTechnologyEnter} onMouseLeave={handleTechnologyLeave}>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors py-2">
                  <span>Technology</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {technologyOpen && <div className="absolute top-full left-0 pt-2 w-56 z-50" onMouseEnter={handleTechnologyEnter} onMouseLeave={handleTechnologyLeave}>
                    <div className="bg-background border border-border rounded-md shadow-lg">
                      <div className="py-2">
                        {technologyItems.map((item, index) => item.path.startsWith('/') ? <Link key={index} to={item.path} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => window.scrollTo(0, 0)}>
                              {item.name}
                            </Link> : <a key={index} href={item.path} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                              {item.name}
                            </a>)}
                      </div>
                    </div>
                  </div>}
              </div>

              {/* Company Dropdown */}
              <div className="relative" onMouseEnter={handleCompanyEnter} onMouseLeave={handleCompanyLeave}>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors py-2">
                  <span>Company</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {companyOpen && <div className="absolute top-full left-0 pt-2 w-56 z-50" onMouseEnter={handleCompanyEnter} onMouseLeave={handleCompanyLeave}>
                    <div className="bg-background border border-border rounded-md shadow-lg">
                      <div className="py-2">
                         {companyItems.map((item, index) => item === "Contact Us" ? <button key={index} onClick={() => navigateToContact(navigate, location.pathname)} className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                               {item}
                             </button> : item === "About Us" ? <a key={index} href="#about" onClick={handleAboutUsClick} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                               {item}
                             </a> : item === "Careers" ? <Link key={index} to="/careers" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                                {item}
                              </Link> : <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                                {item}
                              </a>)}
                      </div>
                    </div>
                  </div>}
              </div>
            </div>}

          {/* Toggle Switch - Always positioned where Get Started was */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
              <button onClick={() => handleToggleSwitch(false)} className={`p-2 rounded-full transition-all duration-300 ${!isQikpodMode ? 'bg-white shadow-md scale-110' : 'hover:bg-muted/80'}`}>
                <img src={leapmileIcon} alt="Leapmile" className="h-5 w-5" />
              </button>
              <button onClick={() => handleToggleSwitch(true)} className={`p-2 rounded-full transition-all duration-300 ${isQikpodMode ? 'bg-white shadow-md scale-110' : 'hover:bg-muted/80'}`}>
                <img src={qikpodIcon} alt="QikPod" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Only show on Leapmile or when toggle is needed */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Mobile Toggle Switch (always available in drawer) */}
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border">
                  <button onClick={() => handleToggleSwitch(false)} className={`p-2 rounded-full transition-all duration-300 ${!isQikpodMode ? 'bg-white shadow-md scale-110' : 'hover:bg-muted/80'}`}>
                    <img src={leapmileIcon} alt="Leapmile" className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleToggleSwitch(true)} className={`p-2 rounded-full transition-all duration-300 ${isQikpodMode ? 'bg-white shadow-md scale-110' : 'hover:bg-muted/80'}`}>
                    <img src={qikpodIcon} alt="QikPod" className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Mobile Navigation Links - Only show on Leapmile page */}
              {!isQikpodMode && <>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                    Home
                  </Link>
                  
                  {/* Mobile Industries */}
                  <div className="space-y-2">
                    <span className="text-foreground font-medium">Industries</span>
                    <div className="pl-4 space-y-2">
                      {industriesItems.map((item, index) => <Link key={index} to={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, 0);
                }}>
                          {item.name}
                        </Link>)}
                    </div>
                  </div>
                  
                  {/* Mobile Technology */}
                  <div className="space-y-2">
                    <span className="text-foreground font-medium">Technology</span>
                    <div className="pl-4 space-y-2">
                      {technologyItems.map((item, index) => item.path.startsWith('/') ? <Link key={index} to={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, 0);
                }}>
                            {item.name}
                          </Link> : <a key={index} href={item.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                            {item.name}
                          </a>)}
                    </div>
                  </div>
                  
                  {/* Mobile Company */}
                  <div className="space-y-2">
                    <span className="text-foreground font-medium">Company</span>
                    <div className="pl-4 space-y-2">
                      {companyItems.map((item, index) => item === "Contact Us" ? <button key={index} onClick={() => {
                  toggleMenu();
                  navigateToContact(navigate, location.pathname);
                }} className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item}
                          </button> : item === "Careers" ? <Link key={index} to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                             {item}
                           </Link> : <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                             {item}
                           </a>)}
                    </div>
                  </div>
                </>}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
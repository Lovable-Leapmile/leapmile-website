import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-0 my-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">LeapMile</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Services
              </a>
              <a href="#technology" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Technology
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Contact
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
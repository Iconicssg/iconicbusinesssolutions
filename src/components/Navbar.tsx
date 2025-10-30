import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import iconicLogo from "@/assets/iconic-logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.jpg";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Industries",
    path: "/industries"
  }, {
    name: "Careers",
    path: "/careers"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-medium" : "bg-transparent")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("px-4 py-2 rounded-lg transition-smooth font-medium", isActive(link.path) ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-muted")}>
                {link.name}
              </Link>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://wa.me/919226449358" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center transition-smooth hover:scale-110" aria-label="Contact us on WhatsApp">
              <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 rounded-lg" />
            </a>
            <Button asChild variant="outline" size="default">
              <Link to="/employer-zone">Employer Zone</Link>
            </Button>
            <Button asChild variant="secondary" size="default">
              <Link to="/candidate-registration">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("px-4 py-3 rounded-lg transition-smooth font-medium", isActive(link.path) ? "text-secondary bg-secondary/10" : "text-foreground hover:bg-muted")} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <div className="pt-4 space-y-2">
                <a href="https://wa.me/919226449358" target="_blank" rel="noopener noreferrer" className="w-full h-12 rounded-lg flex items-center justify-center space-x-2 transition-smooth hover:scale-105">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 rounded-lg" />
                  <span className="font-medium text-foreground">WhatsApp</span>
                </a>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/employer-zone" onClick={() => setIsMobileMenuOpen(false)}>
                    Employer Zone
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/candidate-registration" onClick={() => setIsMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
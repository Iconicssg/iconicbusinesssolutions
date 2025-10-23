import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import iconicLogo from "@/assets/iconic-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={iconicLogo} 
                alt="Iconic Business Solutions" 
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">Iconic</span>
                <span className="text-xs text-primary-foreground/80 leading-tight">Business Solutions</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Where Great Teams Meet Great Service. Your trusted partner for recruitment, training, and CX solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/careers"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/candidate-registration"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                >
                  Register Now
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                >
                  Training Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Vikas Nagar, Dehu Road<br />
                  Pimpri-Chinchwad<br />
                  Maharashtra 412101
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href="tel:+919226449358" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  +91 92264 49358
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href="mailto:iconicssg@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  iconicssg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Iconic Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

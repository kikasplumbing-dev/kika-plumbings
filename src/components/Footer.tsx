import { Link } from "react-router-dom";
import { Droplet, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Kika Plumbing</h3>
                <p className="text-xs text-primary-foreground/80">Since 2018</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Professional plumbing and water treatment services you can trust. Available 24/7 for all your plumbing needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/90 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/90 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/90 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/90 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/90">RO System Installation</li>
              <li className="text-sm text-primary-foreground/90">Water Treatment</li>
              <li className="text-sm text-primary-foreground/90">Plumbing Repairs</li>
              <li className="text-sm text-primary-foreground/90">Materials Supply</li>
              <li className="text-sm text-primary-foreground/90">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/90">09033421523</p>
                  <p className="text-xs text-primary-foreground/70">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <p className="text-sm text-primary-foreground/90">kikasplumbing@gmail.com</p>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <p className="text-sm text-primary-foreground/90">Lagos, Nigeria</p>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Kika Plumbing. All rights reserved. | Professional Plumbing & Water Treatment Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

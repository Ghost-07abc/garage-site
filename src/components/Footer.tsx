import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Wrench
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-red-500 mr-2" />
                              <span className="text-2xl font-bold">MotorCare Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted automotive repair partner for over 25 years. 
              Expert service, honest pricing, and guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Oil Changes</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Brake Service</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Engine Diagnostics</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">AC Repair</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Transmission Service</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Tire Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  123 Main Street<br />
                  Your City, ST 12345
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <div className="text-gray-300">(555) 123-4567</div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <div className="text-gray-300">info@motorcarepro.com</div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 8AM-4PM<br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MotorCare Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Warranty Terms
              </a>
            </div>
          </div>
        </div>

        {/* Emergency notice */}
        <div className="mt-8 bg-red-900 bg-opacity-50 border border-red-700 rounded-lg p-4 text-center">
          <h4 className="font-bold text-red-300 mb-2">24/7 Emergency Service</h4>
          <p className="text-red-200 text-sm">
            Vehicle breakdown? Call our emergency hotline: <strong>(555) 123-HELP</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
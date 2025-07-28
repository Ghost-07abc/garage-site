import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-black text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span>123 Main Street, Your City, ST 12345</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <div className="text-lg font-bold text-black">
              AutoCare Pro
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg font-medium text-sm transition-colors">
              Schedule Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium text-sm">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium text-sm">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-sm">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium text-sm">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium text-sm">
                Contact
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg font-medium text-sm transition-colors w-full">
                Schedule Service
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
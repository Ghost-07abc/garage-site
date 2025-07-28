import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-black text-white py-0.5">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
          <div className="flex justify-between items-center text-[10px]">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <Phone className="h-2 w-2 mr-0.5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-2 w-2 mr-0.5" />
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center py-0.5">
          <div className="flex items-center">
            <div className="text-base font-bold text-black">
              AutoCare Pro
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium text-xs transition-colors px-0.5">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium text-xs transition-colors px-0.5">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-xs transition-colors px-0.5">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium text-xs transition-colors px-0.5">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium text-xs transition-colors px-0.5">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-1">
            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 rounded font-medium text-xs transition-colors">
              Schedule Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-1 border-t">
            <nav className="flex flex-col space-y-1">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium text-xs px-0.5">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium text-xs px-0.5">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-xs px-0.5">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium text-xs px-0.5">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium text-xs px-0.5">
                Contact
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 rounded font-medium text-xs transition-colors w-full">
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
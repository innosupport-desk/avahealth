import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ava Health Limited</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Healthcare Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              Contact Us
            </button>
            <Link 
              to="/request-service"
              className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              Request Service
            </Link>
            <a 
              href="https://www.namecheap.com/myaccount/login/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              title="Employee Email Login"
            >
              <Mail className="w-4 h-4" />
              <span>Employee Login</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200 text-left"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200 text-left"
              >
                Contact Us
              </button>
              <Link 
                to="/request-service"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-600 hover:to-teal-600 transition-all duration-200 text-center"
              >
                Request Service
              </Link>
              <a 
                href="https://www.namecheap.com/myaccount/login/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                title="Employee Email Login"
              >
                <Mail className="w-4 h-4" />
                <span>Employee Login</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
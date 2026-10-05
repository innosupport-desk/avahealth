import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'How We Work' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gold-200/60 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="AVA Health home">
            <img src="/ava-logo.png" alt="AVA Health" className="h-14 w-auto sm:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-navy-700 transition-colors duration-200 hover:text-brand-600"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.namecheap.com/myaccount/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-medium text-navy-700 transition-colors duration-200 hover:text-brand-600"
              title="Employee Email Login"
            >
              <Mail className="h-4 w-4" />
              <span>Login</span>
            </a>
            <Link to="/request-service" className="btn-primary !py-2.5">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-navy-700 transition-colors duration-200 hover:bg-navy-50 lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-medium text-navy-700 transition-colors duration-200 hover:text-brand-600"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://www.namecheap.com/myaccount/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-medium text-navy-700 transition-colors duration-200 hover:text-brand-600"
                title="Employee Email Login"
              >
                <Mail className="h-4 w-4" />
                <span>Login</span>
              </a>
              <Link to="/request-service" onClick={() => setIsMenuOpen(false)} className="btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

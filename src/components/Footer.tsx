import { Heart, Mail, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Service', href: '/request-service' }
  ];

  const services = [
    'Healthcare Supply Chain and Logistics Optimization',
    'Digital Health Solutions and Medical Records',
    'Specialized Health and Well-being Services',
    'Healthcare Innovation and Solution Development'
  ];

  const socialLinks = [
    { icon: Phone, href: '#', label: 'Phone' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sky-950 to-teal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-3 rounded-xl shadow-lg">
                <Heart className="w-9 h-9 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight">AVA Health</h3>
                <p className="text-sky-300 text-base font-medium">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              A leading healthcare provider committed to delivering exceptional medical services 
              with innovation, compassion, and clinical excellence for our community.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-500 transition-all duration-200 transform hover:scale-110 shadow-md"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-sky-400">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 flex items-center group text-lg font-medium"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-sky-400">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 flex items-center group text-lg font-medium"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-sky-400">Contact Information</h4>
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <p className="text-gray-200 text-lg">hello@ava-health.org</p>
            </div>
            {/* Employee Login */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <a
                href="https://www.namecheap.com/myaccount/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-700 to-teal-600 px-5 py-2.5 rounded-lg hover:from-sky-500 hover:to-teal-500 transition-all duration-200 shadow-md text-white font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-sky-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-base font-medium">
              © 2025 AVA Health. All rights reserved. Licensed Healthcare Provider.
            </p>
            <div className="flex space-x-8 text-base font-medium">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Service', href: '/request-service' },
    { name: 'Patient Portal', href: '#' },
    { name: 'Insurance', href: '#' }
  ];

  const services = [
    'Primary Care',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Ophthalmology',
    'Pediatrics',
    'Emergency Care',
    'Healthcare Consulting'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-2 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ava Health Limited</h3>
                <p className="text-gray-400 text-sm">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A leading healthcare provider committed to delivering exceptional medical services 
              with innovation, compassion, and clinical excellence for our community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-500 transition-all duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
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
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
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
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Healthcare Ave</p>
                  <p className="text-gray-300">Medical District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <p className="text-gray-300">(555) 012-3456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <p className="text-gray-300">info@avahealth.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-300">Sat-Sun: 9AM-5PM</p>
                  <p className="text-sky-400 font-medium">Emergency: 24/7</p>
                </div>
              </div>
            </div>

            {/* Employee Login */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <a
                href="https://www.namecheap.com/myaccount/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-500 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Employee Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Ava Health Limited. All rights reserved. Licensed Healthcare Provider.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
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
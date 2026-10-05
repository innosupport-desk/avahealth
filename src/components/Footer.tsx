import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/#products' },
  { name: 'How We Work', href: '/#process' },
  { name: 'Request Service', href: '/request-service' },
];

const services = [
  'Corporate Health Advisory',
  'Mental Wellness Support',
  'Medical Outreach',
  'Clinic Design & Setup',
  'Pharmaceuticals & Supplies',
  'Workflow & Process Design',
  'Hospital Management',
  'Digital Health Solutions',
];

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-500" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 w-fit rounded-2xl bg-white p-3">
              <img src="/ava-logo.png" alt="AVA Health" className="h-20 w-auto" />
            </div>
            <p className="leading-relaxed text-white/70">
              Operational support and advisory services for healthcare facilities, corporate
              organizations and government agencies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-gold-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/75 transition-colors duration-200 hover:text-gold-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-gold-300">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="/#services" className="text-white/75 transition-colors duration-200 hover:text-gold-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-gold-300">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-400" />
                <a href="mailto:hello@ava-health.org" className="hover:text-gold-200">hello@ava-health.org</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-400" />
                <div className="space-y-1">
                  <a href="tel:+2348143115485" className="block hover:text-gold-200">(+234) 814 311 5485</a>
                  <a href="tel:+2349075729987" className="block hover:text-gold-200">(+234) 907 572 9987</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-400" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="https://www.namecheap.com/myaccount/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-brand-500"
              >
                <Mail className="h-5 w-5" />
                <span>Staff Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/60 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} AVA Health. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-gold-200">Privacy Policy</a>
            <a href="#" className="transition-colors duration-200 hover:text-gold-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

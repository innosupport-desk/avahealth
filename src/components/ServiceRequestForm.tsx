import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Mail, User } from 'lucide-react';

const CONTACT_EMAIL = 'hello@ava-health.org';

const serviceTypeLabels: Record<string, string> = {
  'service request': 'Service Request',
  enquiries: 'Enquiries',
  consultation: 'Consultation',
};

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  facilityName: '',
  location: '',
  designation: '',
  serviceType: '',
  message: '',
};

// Nominatim (OpenStreetMap) allows at most 1 request/second, so wait for typing to pause
const SUGGESTION_DELAY_MS = 600;
const MIN_QUERY_LENGTH = 3;

interface NominatimResult {
  display_name: string;
}

const buildMailtoHref = (data: typeof initialFormData) => {
  const name = `${data.firstName} ${data.lastName}`.trim();
  const subject = `${serviceTypeLabels[data.serviceType] ?? 'Service Request'} from ${name} (${data.facilityName})`;
  const body = [
    `Name: ${name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Facility: ${data.facilityName}`,
    `Location: ${data.location || 'Not provided'}`,
    `Designation: ${data.designation}`,
    `Request type: ${serviceTypeLabels[data.serviceType] ?? data.serviceType}`,
    '',
    'How can AVA Health help?',
    data.message || 'Not provided',
  ].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const suggestionTimer = useRef<ReturnType<typeof setTimeout>>();
  const suggestionRequest = useRef<AbortController>();

  useEffect(() => () => {
    clearTimeout(suggestionTimer.current);
    suggestionRequest.current?.abort();
  }, []);

  const fetchAddressSuggestions = async (query: string) => {
    suggestionRequest.current?.abort();
    const controller = new AbortController();
    suggestionRequest.current = controller;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=7`,
        { signal: controller.signal }
      );
      if (!response.ok) throw new Error(`Nominatim responded ${response.status}`);
      const data: NominatimResult[] = await response.json();
      setSuggestions(data.map((item) => item.display_name));
    } catch {
      if (!controller.signal.aborted) setSuggestions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    const value = e.target.value.trim();
    clearTimeout(suggestionTimer.current);
    if (value.length >= MIN_QUERY_LENGTH) {
      suggestionTimer.current = setTimeout(() => fetchAddressSuggestions(value), SUGGESTION_DELAY_MS);
      setShowSuggestions(true);
    } else {
      suggestionRequest.current?.abort();
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFormData(prev => ({ ...prev, location: suggestion }));
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const href = buildMailtoHref(formData);
    setMailtoHref(href);
    window.scrollTo({ top: 0 });
    // Opens the visitor's email app with the request pre-filled
    window.location.href = href;
  };

  if (mailtoHref) {
    return (
      <div className="min-h-screen bg-cream py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl lg:p-12">
            <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-brand-600" />
            <h1 className="mb-4 text-3xl font-bold text-navy-700">Almost done: send your email</h1>
            <p className="mb-6 text-lg text-gray-600">
              We&apos;ve opened your email app with your request addressed to{' '}
              <strong className="text-navy-700">{CONTACT_EMAIL}</strong>. Press send there and
              we&apos;ll get back to you within 24 hours.
            </p>
            <p className="mb-8 text-gray-600">
              Email app didn&apos;t open? Use the button below, or call us on{' '}
              <a href="tel:+2348143115485" className="font-semibold text-brand-600 hover:text-brand-700">(+234) 814 311 5485</a>.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={mailtoHref} className="btn-primary px-8 py-3" data-testid="mailto-link">
                <Mail className="mr-2 h-5 w-5" />
                Open email again
              </a>
              <Link to="/" className="btn-secondary px-8 py-3">
                Back to Home
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setMailtoHref(null)}
              className="mt-6 text-sm font-medium text-gray-500 underline hover:text-navy-700"
            >
              Edit my request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-navy-700 mb-4">Service Request Form</h1>
          <p className="text-xl text-gray-600">
            Tell us about your facility or organization and what you need. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Personal Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-brand-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-700">Personal Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="Adaeze"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="Okafor"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@organization.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="0801 234 5678"
                />
              </div>
              <div>
                <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-2">
                  Facility Name *
                </label>
                <input
                  type="text"
                  id="facilityName"
                  name="facilityName"
                  required
                  value={formData.facilityName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location || ''}
                    onChange={handleLocationChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Search for your location"
                    autoComplete="off"
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full shadow-lg max-h-48 overflow-y-auto">
                      {suggestions.map((suggestion, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 cursor-pointer hover:bg-brand-50"
                          // Keep focus in the input so onBlur doesn't hide the list before the click lands
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          
               {/* Designation */}
          <div className="mb-8">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
              Designation *
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your designation (e.g. Doctor, Nurse, Admin)"
            />
          </div>


          {/* Service Type */}
          <div className="mb-8">
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select type</option>
              <option value="service request">Service Request</option>
              <option value="enquiries">Enquiries</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
              placeholder="Briefly describe your facility, the challenge you're facing, or the service you're interested in"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary px-12 py-4 text-lg"
            >
              Send Request
            </button>
            <p className="text-sm text-gray-600 mt-4">
              This opens your email app with your request addressed to {CONTACT_EMAIL}.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
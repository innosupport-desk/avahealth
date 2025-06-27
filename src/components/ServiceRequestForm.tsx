import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    facilityName: '',
    location: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    urgency: 'routine',
    insurance: '',
    reason: '',
    symptoms: '',
    medications: '',
    allergies: '',
    previousTreatment: '',
    additionalNotes: '',
    serviceType: '',
    designation: '' // Add designation field
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  

 

  // Fetch address suggestions from Nominatim API (OpenStreetMap)
  interface NominatimResult {
    display_name: string;
  }
  const fetchAddressSuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=7`
      );
      const data: NominatimResult[] = await response.json();
      setSuggestions(data.map((item) => item.display_name));
    } catch {
      setSuggestions([]);
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
    const value = e.target.value;
    if (value.length > 0) {
      fetchAddressSuggestions(value);
      setShowSuggestions(true);
    } else {
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
    // Handle form submission here
    console.log('Service request submitted:', formData);
    alert('Service request submitted successfully! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Request Form</h1>
          <p className="text-xl text-gray-600">
            Please fill out this form to request healthcare services. We'll contact you to confirm your appointment.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Personal Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-sky-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="John"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="Doe"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="john.doe@example.com"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Search for your location"
                    autoComplete="off"
                    onFocus={() => formData.location && setShowSuggestions(true)}
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full shadow-lg max-h-48 overflow-y-auto">
                      {suggestions.map((suggestion, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 cursor-pointer hover:bg-sky-100"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select type</option>
              <option value="service request">Service Request</option>
              <option value="enquiries">Enquiries</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request
            </button>
            <p className="text-sm text-gray-600 mt-4">
              We will contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
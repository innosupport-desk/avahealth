import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, FileText, Phone, Mail } from 'lucide-react';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
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
    additionalNotes: ''
  });

  const services = [
    'Primary Care Consultation',
    'Cardiology Consultation',
    'Neurology Consultation',
    'Orthopedic Consultation',
    'Ophthalmology Consultation',
    'Pediatric Consultation',
    'Emergency Care',
    'Pharmacy Consultation',
    'Physical Therapy',
    'Mental Health Services',
    'Radiology Services',
    'Laboratory Services'
  ];

  const urgencyLevels = [
    { value: 'routine', label: 'Routine (within 2 weeks)', color: 'text-green-600' },
    { value: 'urgent', label: 'Urgent (within 3 days)', color: 'text-yellow-600' },
    { value: 'emergency', label: 'Emergency (same day)', color: 'text-red-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  placeholder="Blue Cross Blue Shield"
                />
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-sky-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Service Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Requested Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Urgency Level *
                </label>
                <div className="space-y-3">
                  {urgencyLevels.map((level, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                      />
                      <span className={`ml-3 font-medium ${level.color}`}>{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-sky-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Medical Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={3}
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please describe the reason for your visit..."
                />
              </div>
              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Symptoms
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows={3}
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please describe any symptoms you're experiencing..."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Medications
                  </label>
                  <textarea
                    id="medications"
                    name="medications"
                    rows={3}
                    value={formData.medications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="List any medications you're currently taking..."
                  />
                </div>
                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                    Allergies
                  </label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    rows={3}
                    value={formData.allergies}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="List any known allergies..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="previousTreatment" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Treatment
                </label>
                <textarea
                  id="previousTreatment"
                  name="previousTreatment"
                  rows={3}
                  value={formData.previousTreatment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any previous treatment for this condition..."
                />
              </div>
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Submit Service Request
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
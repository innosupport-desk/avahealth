import { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Shield, 
  Pill,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Stethoscope,
      title: 'Primary Care',
      description: 'Comprehensive primary healthcare services including routine check-ups, preventive care, and health screenings.',
      features: ['Annual Physical Exams', 'Vaccinations', 'Health Screenings', 'Chronic Disease Management']
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care and treatment for heart conditions with state-of-the-art diagnostic equipment.',
      features: ['Heart Disease Treatment', 'ECG & Stress Tests', 'Cardiac Rehabilitation', 'Preventive Cardiology']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for neurological conditions and disorders affecting the brain and nervous system.',
      features: ['Stroke Care', 'Epilepsy Treatment', 'Headache Management', 'Neurological Diagnostics']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Comprehensive orthopedic care for bone, joint, and muscle conditions and injuries.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to advanced surgical procedures.',
      features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare services for infants, children, and adolescents.',
      features: ['Well-Child Visits', 'Immunizations', 'Developmental Screenings', 'Pediatric Urgent Care']
    },
    {
      icon: Shield,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response and advanced life support.',
      features: ['24/7 Emergency Room', 'Trauma Care', 'Critical Care', 'Emergency Surgery']
    },
    {
      icon: Pill,
      title: 'Healthcare Consulting',
      description: 'Professional healthcare consulting services and medical advisory solutions.',
      features: ['Healthcare Strategy', 'Medical Advisory', 'Quality Improvement', 'Compliance Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs with 
            the highest standards of care and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors duration-200 group-hover:translate-x-2 mb-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              {openIndex === index && (
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-gray-800 text-sm mb-2 animate-fade-in">
                  <strong>Why choose our {service.title}?</strong>
                  <ul className="list-disc list-inside ml-2 mt-2">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature} - Benefit: {getBenefitText(service.title, feature)}</li>
                    ))}
                  </ul>
                  <div className="mt-3 italic text-sky-700">
                    {getServiceExtraInfo(service.title)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Medical Assistance?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our healthcare professionals are ready to provide you with the care you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </button>
              <a 
                href="tel:+1-555-0123"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-200"
              >
                Call Emergency: (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// Helper functions for extra info and benefits
function getBenefitText(serviceTitle: string, feature: string) {
  const benefits: Record<string, Record<string, string>> = {
    'Primary Care': {
      'Annual Physical Exams': 'Early detection and prevention',
      'Vaccinations': 'Protection against diseases',
      'Health Screenings': 'Personalized health insights',
      'Chronic Disease Management': 'Ongoing support for better outcomes',
    },
    'Cardiology': {
      'Heart Disease Treatment': 'Advanced therapies for heart health',
      'ECG & Stress Tests': 'Accurate cardiac diagnostics',
      'Cardiac Rehabilitation': 'Faster recovery and improved lifestyle',
      'Preventive Cardiology': 'Reduce risk of future heart issues',
    },
    'Neurology': {
      'Stroke Care': 'Rapid intervention for best results',
      'Epilepsy Treatment': 'Personalized seizure management',
      'Headache Management': 'Relief and prevention strategies',
      'Neurological Diagnostics': 'Comprehensive brain and nerve tests',
    },
    'Orthopedics': {
      'Joint Replacement': 'Restore mobility and comfort',
      'Sports Medicine': 'Get back to activity quickly',
      'Fracture Care': 'Expert bone healing',
      'Physical Therapy': 'Regain strength and function',
    },
    'Ophthalmology': {
      'Eye Exams': 'Maintain optimal vision',
      'Cataract Surgery': 'Restore clear sight',
      'Glaucoma Treatment': 'Prevent vision loss',
      'Retinal Care': 'Protect eye health',
    },
    'Pediatrics': {
      'Well-Child Visits': 'Track healthy growth',
      'Immunizations': 'Shield children from illness',
      'Developmental Screenings': 'Early support for milestones',
      'Pediatric Urgent Care': 'Prompt care for kids',
    },
    'Emergency Care': {
      '24/7 Emergency Room': 'Immediate help anytime',
      'Trauma Care': 'Expert critical care',
      'Critical Care': 'Advanced life support',
      'Emergency Surgery': 'Rapid surgical response',
    },
    'Healthcare Consulting': {
      'Healthcare Strategy': 'Grow your organization',
      'Medical Advisory': 'Expert medical guidance',
      'Quality Improvement': 'Boost patient outcomes',
      'Compliance Support': 'Stay ahead of regulations',
    },
  };
  return benefits[serviceTitle]?.[feature] || '';
}

function getServiceExtraInfo(serviceTitle: string) {
  const info: Record<string, string> = {
    'Primary Care': 'Our team builds lasting relationships to support your lifelong health journey.',
    'Cardiology': 'We use the latest technology and a compassionate approach for every heart.',
    'Neurology': 'Our neurologists are leaders in innovative treatments and patient care.',
    'Orthopedics': 'From sports injuries to joint replacements, we help you move better.',
    'Ophthalmology': 'Trust our specialists for everything from routine exams to complex surgeries.',
    'Pediatrics': 'We care for your children as if they were our own, every step of the way.',
    'Emergency Care': 'Fast, skilled, and always ready—your emergency is our priority.',
    'Healthcare Consulting': 'Partner with us to elevate your healthcare organization’s performance.',
  };
  return info[serviceTitle] || '';
}
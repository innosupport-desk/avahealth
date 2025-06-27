import { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Award,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Stethoscope,
      title: 'Healthcare Supply Chain and Logistics Optimization',
      description: 'Optimizing the flow of medical goods and services from suppliers to patients.',
      features: [
        'End-to-End Supply Chain Management',
        'Logistics Consulting and Design',
        'Inventory and Warehouse Design and Management',
        'Vendor and Supplier Relationship Management',
      ],
    },
    {
      icon: Heart,
      title: 'Digital Health Solutions and Medical Records',
      description: 'Empowering healthcare with digital platforms and secure medical records.',
      features: [
        'Electronic Health Records (EHR) and Health Information Systems (HIS)',
        'Healthcare Process Digitization',
        'Telemedicine and Virtual Consultation Support',
        'Data Analytics and Insights',
      ],
    },
    {
      icon: Brain,
      title: 'Specialized Health and Well-being Services',
      description: 'Supporting workplace and individual well-being with targeted programs.',
      features: [
        'Workplace Mental Well-being Programs',
      ],
    },
    {
      icon: Award,
      title: 'Healthcare Innovation and Solution Development',
      description: 'Driving healthcare advancement through innovation and partnerships.',
      features: [
        'Problem-Solving and Solution Incubation',
        'Partnerships for Healthcare Advancement',
        'Hospital setup, management and administration consultancy services',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We operate at the intersection of healthcare and technology, focusing on the critical pillars.
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
    'Healthcare Supply Chain and Logistics Optimization': {
      'End-to-End Supply Chain Management': 'Streamlined operations and reduced costs',
      'Logistics Consulting and Design': 'Optimized transport and distribution',
      'Inventory and Warehouse Design and Management': 'Efficient storage and stock management',
      'Vendor and Supplier Relationship Management': 'Stronger partnerships and reliability',
    },
    'Digital Health Solutions and Medical Records': {
      'Electronic Health Records (EHR) and Health Information Systems (HIS)': 'Secure and accessible patient data',
      'Healthcare Process Digitization': 'Increased efficiency and reduced errors',
      'Telemedicine and Virtual Consultation Support': 'Remote care convenience',
      'Data Analytics and Insights': 'Informed decision-making and improved outcomes',
    },
    'Specialized Health and Well-being Services': {
      'Workplace Mental Well-being Programs': 'Enhanced employee well-being and productivity',
    },
    'Healthcare Innovation and Solution Development': {
      'Problem-Solving and Solution Incubation': 'Tailored solutions for complex challenges',
      'Partnerships for Healthcare Advancement': 'Collaborative approach to healthcare improvement',
      'Hospital setup, management and administration consultancy services': 'Expert guidance for healthcare facilities',
    },
  };
  return benefits[serviceTitle]?.[feature] || '';
}

function getServiceExtraInfo(serviceTitle: string) {
  const info: Record<string, string> = {
    'Healthcare Supply Chain and Logistics Optimization': 'We ensure that healthcare providers have the right products, in the right place, at the right time.',
    'Digital Health Solutions and Medical Records': 'Our solutions enhance the quality, safety, and efficiency of healthcare delivery.',
    'Specialized Health and Well-being Services': 'We focus on the holistic health of individuals, addressing both physical and mental well-being.',
    'Healthcare Innovation and Solution Development': 'We are committed to transforming healthcare through innovative solutions and strategic partnerships.',
  };
  return info[serviceTitle] || '';
}

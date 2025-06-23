import { Heart, Award, Users, Stethoscope } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to the highest standards of medical care and continuous improvement.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with patients and families to develop personalized treatment plans.'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Technology',
      description: 'Utilizing cutting-edge medical technology to provide the most effective treatments.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Ava Health Limited</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading healthcare provider committed to delivering exceptional medical services 
            with innovation, compassion, and clinical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ava Health Limited is dedicated to transforming healthcare delivery through innovative 
              solutions and comprehensive medical services. We are committed to improving patient 
              outcomes while maintaining the highest standards of care and professionalism.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our organization focuses on providing accessible, quality healthcare services that 
              meet the diverse needs of our community. We believe in building lasting relationships 
              with our patients and their families, ensuring continuity of care throughout their 
              healthcare journey.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-3 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Healthcare Excellence</div>
                <div className="text-gray-600">Established Healthcare Provider</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://ik.imagekit.io/aphllc/woman-medic-wearing-stethoscope-red-uniform.jpg?updatedAt=1750693267622" 
              alt="Medical team consultation" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">10K+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal Structure</h4>
              <p className="text-gray-600 mb-4">
                Ava Health Limited is a registered limited company committed to providing 
                comprehensive healthcare solutions and medical services.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Commitment</h4>
              <p className="text-gray-600">
                We are dedicated to maintaining the highest standards of healthcare delivery, 
                ensuring compliance with all regulatory requirements and industry best practices.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Areas</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3"></div>
                  Primary Healthcare Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3"></div>
                  Specialized Medical Care
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3"></div>
                  Emergency Medical Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mr-3"></div>
                  Healthcare Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-sky-50 to-teal-50 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
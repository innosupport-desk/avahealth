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
    <section id="about" className="py-20 bg-gradient-to-br from-sky-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white bg-opacity-80 rounded-2xl p-8 shadow-md">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AVA Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AVA Health is a pioneering Nigerian healthcare solutions company committed to 
            transforming health and wellness across the nation. At our core, we are driven by 
            the belief that accessible, efficient, and innovative healthcare is a right for all.
            At AVA Health, we are innovators, problem-solvers, and partners in building a 
            healthier, more digitally connected Nigeria. We are continually working to enhance 
            health outcomes and empower individuals with the resources and support they 
            need to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mission Statement: To empower Nigerian healthcare through optimized supply 
              chains, innovative solutions, and advanced digital platforms, ensuring seamless 
              access to medical records and efficient, patient-centred care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vision Statement: A Nigeria where healthcare is universally accessible, efficient, 
              and technologically integrated, with Ava Health Limited at the forefront of its 
              transformation.
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
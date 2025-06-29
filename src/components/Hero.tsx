import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-teal-50 pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AVA Health
                <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent"> Healthcare Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to AVA Health. We believe that quality healthcare should be accessible to everyone, everywhere. That's why we're 
                building a truly inclusive healthcare ecosystem in Nigeria, tackling challenges from the ground up. Our core mission is to
                empower all healthcare providers with the tools and support they need to thrive.
              </p>
              <p className="text-lg text-gray-600">
                At Ava Health, we're dedicated to optimizing the supply chain for essential healthcare 
                commodities, ensuring even the most remote communities have access to vital 
                resources. We provide innovative technological solutions to digitize operations and 
                establish a central, secure hub for healthcare data, making patient information readily 
                available for faster, more effective care. In essence, we offer end-to-end solutions 
                designed to empower healthcare providers, streamlining everything from critical 
                supplies to digital processes, ultimately enhancing patient experiences across Nigeria.
              </p>
              <p className="text-lg text-gray-600">
                Join us in shaping a healthier, digitally advanced Nigeria for all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/request-service"
                className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-sky-500 hover:text-sky-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-teal-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Healthcare Professionals</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-sky-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Quality</div>
                <div className="text-sm text-gray-600">Healthcare Services</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://ik.imagekit.io/aphllc/portrait-nurse-scrubs-clinic.jpg?updatedAt=1750693283734" 
                alt="Healthcare professionals providing care" 
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Care</div>
                  <div className="text-sm text-gray-600">Licensed Healthcare Provider</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
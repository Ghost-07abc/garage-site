import React from 'react';
import { Award, Users, Clock, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "15,000+", label: "Vehicles Serviced", icon: <Wrench className="h-6 w-6" /> },
    { number: "50+", label: "Expert Technicians", icon: <Users className="h-6 w-6" /> },
    { number: "20+", label: "Industry Awards", icon: <Award className="h-6 w-6" /> }
  ];

  const certifications = [
    "ASE Certified Master Technicians",
    "AAA Approved Auto Repair",
    "Better Business Bureau A+ Rating",
    "NAPA AutoCare Center",
    "Bosch Service Authorized",
    "AC Delco Professional Service"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Auto Care Since 1998
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over two decades, AutoCare Pro has been the community's trusted partner for 
              reliable automotive repair and maintenance. Our commitment to excellence and 
              customer satisfaction has made us the preferred choice for thousands of drivers.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                  <p className="text-gray-600">
                    Our ASE-certified master technicians undergo continuous training to stay 
                    current with the latest automotive technologies and repair techniques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <Wrench className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">State-of-the-Art Equipment</h4>
                  <p className="text-gray-600">
                    We invest in the latest diagnostic tools and equipment to ensure accurate 
                    diagnoses and efficient repairs for all vehicle makes and models.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Family-Owned Business</h4>
                  <p className="text-gray-600">
                    As a family-owned and operated business, we treat every customer like family 
                    and take personal pride in every vehicle we service.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Visit Our Shop
            </button>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg"
                alt="Professional auto technicians at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-red-500">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-red-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certifications & Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center">
                  <Award className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Wrench, Award, Clock, Shield, Star, Users } from 'lucide-react';

const Mechanics: React.FC = () => {
  const mechanics = [
    {
      name: 'Mike Johnson',
      position: 'Master Technician',
      experience: '15+ Years',
      specialties: ['Engine Diagnostics', 'Transmission Repair', 'Electrical Systems'],
      certifications: ['ASE Master Certified', 'BMW Certified', 'Toyota Certified'],
      image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 127
    },
    {
      name: 'Sarah Rodriguez',
      position: 'Diagnostic Specialist',
      experience: '12+ Years',
      specialties: ['Computer Diagnostics', 'Hybrid Systems', 'Fuel Injection'],
      certifications: ['ASE Certified', 'Honda Certified', 'Ford Certified'],
      image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 98
    },
    {
      name: 'David Chen',
      position: 'Brake & Suspension Expert',
      experience: '10+ Years',
      specialties: ['Brake Systems', 'Suspension Repair', 'Alignment'],
      certifications: ['ASE Certified', 'Brake Specialist', 'Alignment Expert'],
      image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'Alex Thompson',
      position: 'General Service Technician',
      experience: '8+ Years',
      specialties: ['Oil Changes', 'Tune-ups', 'General Maintenance'],
      certifications: ['ASE Certified', 'Quick Service Specialist'],
      image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 76
    }
  ];

  const stats = [
    { icon: Users, label: 'Team Members', value: '12' },
    { icon: Award, label: 'Certifications', value: '45+' },
    { icon: Clock, label: 'Years Combined', value: '150+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  return (
    <section id="mechanics" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Meet Our Expert Mechanics
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our certified technicians bring decades of combined experience and specialized training 
            to ensure your vehicle receives the highest quality service possible.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-600 bg-opacity-20 border border-red-500 rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mechanics.map((mechanic, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              {/* Mechanic Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mechanic.image}
                  alt={mechanic.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{mechanic.name}</h3>
                  <p className="text-sm text-red-400">{mechanic.position}</p>
                </div>
              </div>

              {/* Mechanic Info */}
              <div className="p-6">
                {/* Experience & Rating */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">{mechanic.experience}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{mechanic.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({mechanic.reviews})</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {mechanic.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Certifications:</h4>
                  <div className="space-y-1">
                    {mechanic.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center">
                        <Shield className="h-3 w-3 text-green-400 mr-2" />
                        <span className="text-xs text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Team */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Why Choose Our Team?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Certified Experts</h4>
              <p className="text-gray-300 text-sm">
                All our technicians are ASE certified and receive ongoing training on the latest automotive technology.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Specialized Skills</h4>
              <p className="text-gray-300 text-sm">
                Each mechanic has specialized training in specific areas, ensuring expert service for every repair.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Warranty Protected</h4>
              <p className="text-gray-300 text-sm">
                All our work comes with a comprehensive warranty, giving you peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Meet Our Team?
            </h3>
            <p className="text-gray-200 mb-6">
              Schedule an appointment today and experience the difference our expert mechanics can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Service
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mechanics; 
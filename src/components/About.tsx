import React from 'react';
import { Award, Users, Clock, Wrench, Heart, Target, Eye, CheckCircle } from 'lucide-react';

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

  const teamMembers = [
    {
      name: "Mike Johnson",
      position: "Owner & Master Technician",
      experience: "25+ years",
      specialties: ["Engine Diagnostics", "Transmission Repair"],
      image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
    },
    {
      name: "Sarah Rodriguez",
      position: "Service Manager",
      experience: "15+ years",
      specialties: ["Customer Relations", "Quality Control"],
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      name: "David Chen",
      position: "Lead Technician",
      experience: "12+ years",
      specialties: ["Brake Systems", "AC Repair"],
      image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our customers. We treat every vehicle as if it were our own."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Workmanship",
      description: "We take pride in our work and stand behind every repair with comprehensive warranties and guarantees."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Family Values",
      description: "As a family-owned business, we believe in building lasting relationships with our customers and community."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Continuous Excellence",
      description: "We invest in the latest training, tools, and technology to provide the best possible service."
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "AutoCare Pro Founded",
      description: "Mike Johnson opens the first location with a vision to provide honest, reliable auto repair services."
    },
    {
      year: "2003",
      title: "ASE Certification",
      description: "All technicians achieve ASE Master Technician certification, setting new standards for quality."
    },
    {
      year: "2008",
      title: "Facility Expansion",
      description: "Doubled shop size and added state-of-the-art diagnostic equipment to serve more customers."
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Introduced digital service reports and online scheduling to enhance customer experience."
    },
    {
      year: "2020",
      title: "Mobile Service Launch",
      description: "Added mobile repair services and contactless service options during the pandemic."
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description: "Celebrating 25 years of service with over 15,000 vehicles serviced and countless satisfied customers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About AutoCare Pro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been your trusted automotive partner, 
            combining expert craftsmanship with genuine care for every customer who walks through our doors.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AutoCare Pro began in 1998 when Mike Johnson, a master technician with a passion for 
              automotive excellence, decided to open his own shop. Frustrated by the lack of honest, 
              transparent service in the industry, Mike set out to create a different kind of auto repair experience.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as a small, two-bay shop has grown into the area's most trusted automotive 
              service center. But our core values remain unchanged: treat every customer like family, 
              provide honest assessments, and deliver quality work that stands the test of time.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we're proud to be a second-generation family business, with Mike's daughter Sarah 
              now serving as our Service Manager, ensuring our family values continue for years to come.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Serving the Community</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg"
              alt="AutoCare Pro team at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-red-500">1998</div>
              <div className="text-sm">Founded</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional automotive repair and maintenance services while building 
              lasting relationships with our customers through honesty, expertise, and genuine care.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Eye className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted automotive service provider in our community, known for 
              our integrity, quality workmanship, and commitment to customer satisfaction.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              We promise to treat every customer with respect, provide honest assessments, 
              and deliver quality repairs that keep you safe on the road.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-red-600 mr-4 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-red-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.experience} experience</p>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-red-600 mb-2">{event.year}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            By the Numbers
          </h3>
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
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
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

        {/* Call to Action */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Experience the AutoCare Pro Difference</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicles. 
            Schedule your service today and discover why we're the area's preferred auto repair shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Schedule Service Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Visit Our Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
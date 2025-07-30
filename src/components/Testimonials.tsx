import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredTestimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Resident",
      rating: 5,
        text: "MotorCare Pro saved me from a major breakdown! Their diagnostic skills are incredible, and they fixed my transmission issue quickly and affordably. The team explained everything clearly and even showed me the problem. I wouldn't trust my car to anyone else.",
      service: "Transmission Repair",
      date: "December 2023",
      vehicleYear: "2018 Honda Accord"
    },
    {
      name: "Mike Rodriguez",
      location: "Business Owner",
      rating: 5,
              text: "As someone who relies on my vehicle for work, I need reliable service. MotorCare Pro has maintained my fleet for 3 years now, and their preventive maintenance has saved me thousands in repairs. They're always honest about what needs to be done and what can wait.",
      service: "Fleet Maintenance",
      date: "November 2023",
      vehicleYear: "2020 Ford Transit"
    },
    {
      name: "Emily Chen",
      location: "College Student",
      rating: 5,
      text: "Being a student on a budget, I was worried about expensive repairs. The team was honest about what I needed and offered payment options. They even gave me tips to maintain my car better! Their transparency and care made all the difference.",
      service: "Brake Service",
      date: "October 2023",
      vehicleYear: "2015 Toyota Corolla"
    }
  ];

  const allTestimonials = [
    {
      name: "Robert Thompson",
      location: "Retiree",
      rating: 5,
      text: "I've been bringing my cars here for over 10 years. The staff treats you like family, explains everything clearly, and never tries to upsell unnecessary services. True professionals!",
      service: "General Maintenance",
      date: "December 2023"
    },
    {
      name: "Jessica Martinez",
      location: "Working Mother",
      rating: 5,
              text: "When my AC died in the middle of summer with two kids in the car, MotorCare Pro fit me in same day and had it running cold again within hours. Lifesavers!",
      service: "AC Repair",
      date: "August 2023"
    },
    {
      name: "David Park",
      location: "Tech Professional",
      rating: 5,
      text: "I appreciate their modern diagnostic equipment and digital service reports. They send photos and explanations of what they find, which helps me make informed decisions.",
      service: "Engine Diagnostics",
      date: "September 2023"
    },
    {
      name: "Lisa Williams",
      location: "Teacher",
      rating: 5,
      text: "The waiting area is comfortable and they have a shuttle service to take you to work. They really think about the customer experience beyond just fixing cars.",
      service: "Oil Change",
      date: "November 2023"
    },
    {
      name: "Carlos Mendez",
      location: "Construction Worker",
      rating: 5,
      text: "My work truck takes a beating, and these guys keep it running strong. They understand commercial vehicles and the demands of my job. Reliable and fair pricing.",
      service: "Suspension Repair",
      date: "October 2023"
    },
    {
      name: "Amanda Foster",
      location: "Nurse",
      rating: 5,
      text: "Working night shifts, I need flexible service hours. They accommodate my schedule and even offer early drop-off. The convenience factor is huge for me.",
      service: "Brake Pads",
      date: "September 2023"
    }
  ];

  const reviewStats = [
    { platform: "Google Reviews", rating: "4.9/5", count: "200+ reviews" },
    { platform: "Yelp", rating: "4.8/5", count: "150+ reviews" },
    { platform: "Facebook", rating: "4.9/5", count: "100+ reviews" },
    { platform: "Better Business Bureau", rating: "A+", count: "Accredited" }
  ];

  const serviceRatings = [
    { service: "Quality of Work", rating: 4.9 },
    { service: "Customer Service", rating: 4.8 },
    { service: "Timeliness", rating: 4.7 },
    { service: "Fair Pricing", rating: 4.8 },
    { service: "Communication", rating: 4.9 },
    { service: "Cleanliness", rating: 4.8 }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with MotorCare Pro.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 text-red-200 mx-auto mb-6" />
              
              <div className="flex justify-center mb-6">
                {[...Array(featuredTestimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{featuredTestimonials[currentTestimonial].text}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-bold text-xl text-gray-900 mb-1">
                  {featuredTestimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 mb-2">
                  {featuredTestimonials[currentTestimonial].location}
                </div>
                <div className="text-sm text-red-600 font-medium mb-1">
                  Service: {featuredTestimonials[currentTestimonial].service}
                </div>
                <div className="text-sm text-gray-500">
                  {featuredTestimonials[currentTestimonial].vehicleYear} • {featuredTestimonials[currentTestimonial].date}
                </div>
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">{stat.rating}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.platform}</div>
              <div className="text-sm text-gray-600">{stat.count}</div>
            </div>
          ))}
        </div>

        {/* Service Ratings */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Service Quality Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceRatings.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{item.service}</span>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-red-600">{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Customer Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative group hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-red-200 group-hover:text-red-300 transition-colors">
                  <Quote className="h-6 w-6" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-1">{testimonial.location}</div>
                  <div className="text-sm text-red-600 font-medium mb-1">
                    {testimonial.service}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Summary */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-500 mr-2" />
                <div className="text-4xl font-bold text-red-500">4.9/5.0</div>
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">Overall Rating</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-red-500 mr-2" />
                <div className="text-4xl font-bold text-red-500">500+</div>
              </div>
              <p className="text-gray-300">5-Star Reviews</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-red-500 mr-2" />
                <div className="text-4xl font-bold text-red-500">98%</div>
              </div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Satisfied Customers</h3>
          <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
            Experience the MotorCare Pro difference for yourself. Schedule your service today 
            and discover why our customers keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Service Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Resident",
      rating: 5,
      text: "AutoCare Pro saved me from a major breakdown! Their diagnostic skills are incredible, and they fixed my transmission issue quickly and affordably. I wouldn't trust my car to anyone else.",
      service: "Transmission Repair"
    },
    {
      name: "Mike Rodriguez",
      location: "Business Owner",
      rating: 5,
      text: "As someone who relies on my vehicle for work, I need reliable service. AutoCare Pro has maintained my fleet for 3 years now, and their preventive maintenance has saved me thousands in repairs.",
      service: "Fleet Maintenance"
    },
    {
      name: "Emily Chen",
      location: "College Student",
      rating: 5,
      text: "Being a student on a budget, I was worried about expensive repairs. The team was honest about what I needed and offered payment options. They even gave me tips to maintain my car better!",
      service: "Brake Service"
    },
    {
      name: "Robert Thompson",
      location: "Retiree",
      rating: 5,
      text: "I've been bringing my cars here for over 10 years. The staff treats you like family, explains everything clearly, and never tries to upsell unnecessary services. True professionals!",
      service: "General Maintenance"
    },
    {
      name: "Jessica Martinez",
      location: "Working Mother",
      rating: 5,
      text: "When my AC died in the middle of summer with two kids in the car, AutoCare Pro fit me in same day and had it running cold again within hours. Lifesavers!",
      service: "AC Repair"
    },
    {
      name: "David Park",
      location: "Tech Professional",
      rating: 5,
      text: "I appreciate their modern diagnostic equipment and digital service reports. They send photos and explanations of what they find, which helps me make informed decisions about my vehicle.",
      service: "Engine Diagnostics"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with AutoCare Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative group hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 text-red-200 group-hover:text-red-300 transition-colors">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-2">{testimonial.location}</div>
                <div className="text-sm text-red-600 font-medium">
                  Service: {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review summary */}
        <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">4.9/5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100">Average Rating</p>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <p className="text-gray-300">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
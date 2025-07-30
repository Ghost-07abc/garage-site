import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone } from 'lucide-react';

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional mechanic working on engine',
      title: 'Expert Engine Diagnostics'
    },
    {
      src: 'https://images.pexels.com/photos/4489704/pexels-photo-4489704.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Car being serviced on lift',
      title: 'Professional Lift Service'
    },
    {
      src: 'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern auto repair shop interior',
      title: 'State-of-the-Art Facility'
    },
    {
      src: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Computer diagnostics station',
      title: 'Advanced Computer Diagnostics'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Our Shop Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facility. We're equipped with the latest 
            diagnostic equipment and tools to provide the best service for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-semibold text-white">
                  {galleryImages[currentImage].title}
                </h3>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-red-500' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Shop Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Welcome to Our Shop
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our facility spans over 5,000 square feet of dedicated automotive service space. 
                We feature 8 service bays, each equipped with professional lifts and the latest 
                diagnostic equipment. Our waiting area provides comfort with free Wi-Fi, coffee, 
                and a kids' play area.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Service Bays</h4>
                <p className="text-gray-300 text-sm">8 professional service bays with hydraulic lifts</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Diagnostic Equipment</h4>
                <p className="text-gray-300 text-sm">Latest OBD-II scanners and computer systems</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Computer Diagnostics</h4>
                <p className="text-gray-300 text-sm">Advanced computer systems for precise diagnostics</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Parts Department</h4>
                <p className="text-gray-300 text-sm">On-site parts inventory for quick service</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-red-600 bg-opacity-20 border border-red-500 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-red-400 mb-4">Visit Our Shop</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-red-400 mr-3" />
                  <span>123 Auto Repair Lane, City, State 12345</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 text-red-400 mr-3" />
                  <span>Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-red-400 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 
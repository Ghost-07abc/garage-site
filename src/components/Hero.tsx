import React, { useEffect, useState } from 'react';
import { Wrench, Star, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CAR1 = 'https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg';
const CAR2 = 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg';
const MAN = 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800';

const ANIMATION_DURATION = 2000; // Increased from 700ms to 2000ms
const FIRST_IMAGE_DURATION = 4000; // Special longer duration for first image
const CONTENT_SLIDE_DELAY = 150;

const Hero: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (phase < 4) {
      // Use longer duration for the first phase (first image)
      const duration = phase === 0 ? FIRST_IMAGE_DURATION : ANIMATION_DURATION;
      const timer = setTimeout(() => setPhase(phase + 1), duration);
      return () => clearTimeout(timer);
    } else {
      const contentTimer = setTimeout(() => setShowContent(true), CONTENT_SLIDE_DELAY);
      return () => clearTimeout(contentTimer);
    }
  }, [phase]);

  return (
    <section id="home" className="relative h-[80vh] flex flex-col justify-end bg-black overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Car 1 */}
        <img
          src={CAR1}
          alt="Car 1"
          className={`absolute w-full h-full object-cover transition-transform duration-1000
            ${phase === 0 ? 'translate-x-0' : ''}
            ${phase === 1 ? '-translate-x-full' : ''}
            ${phase >= 2 ? 'hidden' : ''}
          `}
        />

        {/* Car 2 */}
        <img
          src={CAR2}
          alt="Car 2"
          className={`absolute w-full h-full object-cover transition-transform duration-1000
            ${phase === 0 ? 'translate-x-full' : ''}
            ${(phase === 1 || phase === 2) ? 'translate-x-0' : ''}
            ${phase === 3 ? '-translate-y-full' : ''}
            ${phase >= 4 ? 'hidden' : ''}
          `}
        />

        {/* Man */}
        <img
          src={MAN}
          alt="Man"
          className={`absolute w-full h-full object-cover transition-transform duration-1000
            ${phase < 3 ? 'translate-y-full' : ''}
            ${(phase === 3 || phase === 4) ? 'translate-y-0' : ''}
          `}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 z-10" />
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-transform duration-1000 ease-out
          ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
        style={{ transitionProperty: 'transform, opacity' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-yellow-400">
              Your Trusted
              <span className="text-red-500 block">Auto Repair</span>
              Experts
            </h1>
            <p className="text-base text-yellow-300 mb-4 leading-relaxed">
              Professional automotive repair and maintenance services with over 25 years of experience. 
              We keep your vehicle running safely and reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-base transition-all transform hover:scale-105"
                onClick={() => navigate('/services')}
              >
                Schedule Service Today
              </button>
              <button
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg font-semibold text-base transition-all"
                onClick={() => navigate('/contact')}
              >
                Get Free Estimate
              </button>
            </div>

            {/* Trust Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium text-yellow-300">Expert Service</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Star className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium text-yellow-300">5-Star Rated</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium text-yellow-300">Same Day Service</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium text-yellow-300">Warranty Protected</p>
              </div>
            </div>
          </div>

          {/* Emergency Box */}
          <div className="lg:text-right">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Emergency Service Available</h3>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span>24/7 Roadside Assistance</span>
                  <span className="text-red-500 font-bold">&#10003;</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mobile Repair Service</span>
                  <span className="text-red-500 font-bold">&#10003;</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Free Diagnostics</span>
                  <span className="text-red-500 font-bold">&#10003;</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Loaner Vehicles Available</span>
                  <span className="text-red-500 font-bold">&#10003;</span>
                </div>
              </div>
              <a
                href="tel:5551234567"
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                style={{ display: 'block' }}
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
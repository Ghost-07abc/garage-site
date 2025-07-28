import React, { useEffect, useState } from 'react';
import { Wrench, Star, Clock, Shield } from 'lucide-react';

const CAR1 = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800';
const CAR2 = 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800';
const MAN = 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800';

const ANIMATION_DURATION = 2000; // ms for each phase
const CONTENT_SLIDE_DELAY = 400; // ms after last image before content slides up

const Hero: React.FC = () => {
  const [phase, setPhase] = useState(0); // 0: car1, 1: car1->car2, 2: car2, 3: car2->man, 4: done
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (phase < 4) {
      const timer = setTimeout(() => setPhase(phase + 1), ANIMATION_DURATION);
      return () => clearTimeout(timer);
    } else {
      const contentTimer = setTimeout(() => setShowContent(true), CONTENT_SLIDE_DELAY);
      return () => clearTimeout(contentTimer);
    }
  }, [phase]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end bg-black overflow-hidden">
      {/* Animated Images as full background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Car 1 */}
        <img
          src={CAR1}
          alt="Car 1"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000
            ${phase <= 1 ? 'opacity-100' : 'opacity-0'}
            ${phase >= 2 ? 'hidden' : ''}
          `}
        />
        
        {/* Car 2 */}
        <img
          src={CAR2}
          alt="Car 2"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000
            ${phase === 0 ? 'opacity-0' : ''}
            ${phase === 1 ? 'opacity-100' : ''}
            ${phase === 2 ? 'opacity-100' : ''}
            ${phase === 3 ? 'opacity-100' : ''}
            ${phase >= 4 ? 'hidden' : ''}
          `}
        />
        
        {/* Man */}
        <img
          src={MAN}
          alt="Man"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000
            ${phase <= 2 ? 'opacity-0' : ''}
            ${phase === 3 ? 'opacity-100' : ''}
            ${phase === 4 ? 'opacity-100' : ''}
          `}
        />
        
        {/* Overlay for darkening effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 z-10" />
      </div>

      {/* Hero Content: slides up after animation */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-transform duration-1000 ease-out
          ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
        style={{transitionProperty: 'transform, opacity'}}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Trusted
              <span className="text-red-500 block">Auto Repair</span>
              Experts
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional automotive repair and maintenance services with over 25 years of experience. 
              We keep your vehicle running safely and reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Schedule Service Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Get Free Estimate
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium">Expert Service</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Star className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium">5-Star Rated</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium">Same Day Service</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-sm font-medium">Warranty Protected</p>
              </div>
            </div>
          </div>
          
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
              <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { 
  Wrench, 
  Car, 
  Gauge, 
  Snowflake, 
  Zap, 
  Shield,
  Clock,
  CheckCircle,
  DollarSign,
  Award
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Car className="h-12 w-12" />,
      title: "Oil Changes & Fluid Services",
      description: "Complete fluid maintenance to keep your engine running smoothly",
      features: [
        "Conventional, Synthetic Blend & Full Synthetic Oil",
        "Multi-point Inspection Included",
        "Brake, Transmission & Coolant Fluid Checks",
        "Filter Replacement",
        "Fluid Top-offs Between Services"
      ],
      price: "Starting at $29.99",
      duration: "30 minutes"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Brake Service & Repair",
      description: "Complete brake system inspection, maintenance and repair",
      features: [
        "Brake Pad & Rotor Replacement",
        "Brake Fluid Flush & Replacement",
        "Brake Line Inspection & Repair",
        "ABS System Diagnostics",
        "Emergency Brake Adjustment"
      ],
      price: "Starting at $149.99",
      duration: "2-3 hours"
    },
    {
      icon: <Gauge className="h-12 w-12" />,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine issues",
      features: [
        "Check Engine Light Diagnosis",
        "OBD-II Computer Scanning",
        "Performance Testing",
        "Emission System Analysis",
        "Detailed Diagnostic Report"
      ],
      price: "Starting at $99.99",
      duration: "1-2 hours"
    },
    {
      icon: <Snowflake className="h-12 w-12" />,
      title: "AC & Heating Service",
      description: "Climate control system repair and maintenance for year-round comfort",
      features: [
        "AC System Recharge",
        "Compressor Replacement",
        "Heater Core Service",
        "Thermostat Replacement",
        "Climate Control Diagnostics"
      ],
      price: "Starting at $89.99",
      duration: "1-3 hours"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Transmission Service",
      description: "Complete transmission maintenance and repair services",
      features: [
        "Transmission Fluid Change",
        "Filter Replacement",
        "Transmission Rebuild",
        "Clutch Service (Manual)",
        "Transmission Diagnostics"
      ],
      price: "Starting at $179.99",
      duration: "2-8 hours"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "General Auto Repair",
      description: "Comprehensive repair services for all vehicle systems",
      features: [
        "Engine Repair & Replacement",
        "Suspension & Steering",
        "Exhaust System Service",
        "Electrical System Repair",
        "Timing Belt Replacement"
      ],
      price: "Custom Quote",
      duration: "Varies"
    }
  ];

  const additionalServices = [
    "Tire Installation & Balancing",
    "Wheel Alignment",
    "Battery Testing & Replacement",
    "Alternator & Starter Service",
    "Radiator & Cooling System",
    "Fuel System Cleaning",
    "Belts & Hoses Replacement",
    "Pre-Purchase Inspections",
    "State Inspection Services",
    "Fleet Maintenance Programs"
  ];

  const warranties = [
    {
      title: "Parts Warranty",
      description: "12 months or 12,000 miles on all parts",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Labor Warranty",
      description: "12 months on all labor and workmanship",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Nationwide Coverage",
      description: "Warranty honored at 3,000+ locations",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Auto Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to major repairs, our certified technicians provide 
            comprehensive automotive services to keep your vehicle running at its best.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1">
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="h-5 w-5 mr-1" />
                    <span className="font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Schedule Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Services We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Information */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Service Guarantee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warranties.map((warranty, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {warranty.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{warranty.title}</h4>
                <p className="text-gray-300">{warranty.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Learn More About Our Warranty
            </button>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
          <p className="text-red-100 mb-6">
            We offer 24/7 emergency roadside assistance and mobile repair services. 
            Don't get stranded - call us anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Emergency Line: (555) 123-HELP
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all">
              Request Mobile Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
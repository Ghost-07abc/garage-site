import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">General Repairs</h3>
            <p>Comprehensive diagnostics and repairs for all makes and models.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Preventive Maintenance</h3>
            <p>Oil changes, tune-ups, and scheduled maintenance to keep your car running smoothly.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
            <p>24/7 roadside assistance and urgent repairs when you need them most.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
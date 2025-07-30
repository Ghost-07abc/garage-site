import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  CheckCircle,
  Car,
  Wrench,
  MessageSquare,
  Navigation,
  CreditCard,
  Shield
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    contactMethod: 'phone'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM", status: "Open" },
    { day: "Saturday", time: "8:00 AM - 4:00 PM", status: "Open" },
    { day: "Sunday", time: "Closed", status: "Closed" }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      primary: "(555) 123-4567",
      secondary: "Emergency: (555) 123-HELP",
      description: "Speak directly with our service advisors"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
              primary: "info@motorcarepro.com",
        secondary: "service@motorcarepro.com",
      description: "Get detailed quotes and information"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Text Us",
      primary: "(555) 123-TEXT",
      secondary: "Quick responses",
      description: "Fast communication for urgent needs"
    }
  ];

  const serviceAreas = [
    "Downtown District",
    "Riverside Community",
    "Oak Hill Neighborhood",
    "Westside Area",
    "Eastbrook District",
    "Maple Grove",
    "Pine Valley",
    "Cedar Heights"
  ];

  const paymentOptions = [
    "Cash & Check",
    "All Major Credit Cards",
    "Debit Cards",
    "Financing Available",
    "Fleet Accounts",
    "Insurance Direct Billing"
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your service request and will contact you within 2 hours to schedule your appointment.
            </p>
            <div className="bg-white rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-bold text-gray-900 mb-4">What happens next:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Service advisor will call within 2 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Confirm appointment details
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Receive service reminder 24 hours prior
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to schedule your service? We make it easy to get in touch and book your appointment. 
            Choose the method that works best for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:bg-red-50 transition-colors">
              <div className="text-red-600 mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg font-semibold text-gray-900 mb-1">{method.primary}</p>
              <p className="text-sm text-red-600 mb-3">{method.secondary}</p>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Shop</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 mb-2">
                    123 Main Street<br />
                    Your City, ST 12345
                  </p>
                  <button className="text-red-600 hover:text-red-700 font-medium flex items-center">
                    <Navigation className="h-4 w-4 mr-1" />
                    Get Directions
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">Main: (555) 123-4567</p>
                  <p className="text-gray-600">Service: (555) 123-AUTO</p>
                  <p className="text-red-600 font-medium">Emergency: (555) 123-HELP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Addresses</h4>
                                  <p className="text-gray-600">General: info@motorcarepro.com</p>
                <p className="text-gray-600">Service: service@motorcarepro.com</p>
                <p className="text-gray-600">Parts: parts@motorcarepro.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-red-600" />
                Business Hours
              </h4>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{hour.day}</span>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">{hour.time}</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        hour.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {hour.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2 text-red-600" />
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Mobile service available within 15 miles of our location
              </p>
            </div>

            {/* Payment Options */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-red-600" />
                Payment Options
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-red-600" />
                Schedule Your Service
              </h3>
              
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="text"
                      checked={formData.contactMethod === 'text'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Text
                  </label>
                </div>
              </div>
              
              {/* Service and Vehicle Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="brake-service">Brake Service</option>
                    <option value="diagnostics">Engine Diagnostics</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="transmission">Transmission Service</option>
                    <option value="engine-repair">Engine Repair</option>
                    <option value="inspection">State Inspection</option>
                    <option value="maintenance">General Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Information
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    placeholder="2020 Honda Accord"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Preferred Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your vehicle's symptoms, specific concerns, or any additional information that would help us prepare for your visit..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Schedule My Service
              </button>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Service Guarantee</p>
                    <p>We'll contact you within 2 hours to confirm your appointment. All personal information is kept confidential and secure.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
          <p className="text-red-100 mb-6">
            Vehicle breakdown or urgent repair needed? Our emergency service team is available 24/7 
            to get you back on the road safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Emergency Line: (555) 123-HELP
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all">
              Request Roadside Assistance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
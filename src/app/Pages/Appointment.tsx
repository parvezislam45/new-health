// components/sections/Appointment.tsx
'use client';

import { forwardRef, useState } from 'react';

const Appointment = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Individual Therapy',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Appointment request:', formData);
    alert('Thank you for your appointment request. We will contact you shortly to confirm!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Individual Therapy',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const services = [
    'Individual Therapy',
    'Couples Counseling',
    'Group Therapy',
    'Teletherapy',
    'Crisis Support',
    'Workshops'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section ref={ref} id="appointment" className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book an Appointment</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Take the first step towards better mental health. Schedule your appointment today.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-purple-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-purple-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-purple-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-purple-200 mb-2">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-indigo-900 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {services.map((service, index) => (
                      <option className="bg-indigo-900 text-white" key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-purple-200 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-purple-200 mb-2">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-indigo-900 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value=""className="bg-indigo-900 text-white">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option className="bg-indigo-900 text-white" key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-purple-200 mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any specific concerns or preferences?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-purple-500/30 transition-all duration-300"
              >
                Request Appointment
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <span className="text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Initial Consultation</h4>
                    <p className="text-purple-200">We all discuss your needs and match you with the right therapist.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <span className="text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Personalized Plan</h4>
                    <p className="text-purple-200">Your therapist will create a treatment plan tailored to your goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <span className="text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Ongoing Support</h4>
                    <p className="text-purple-200">Regular sessions and check-ins to track your progress.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Insurance Information</h3>
              <p className="text-purple-200 mb-4">
                We accept most major insurance plans. Please have your insurance information ready when we contact you to confirm your appointment.
              </p>
              <ul className="space-y-2 text-purple-200 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Blue Cross Blue Shield
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aetna
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cigna
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  UnitedHealthcare
                </li>
              </ul>
              <button className="w-full py-3 bg-white/10 rounded-lg text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                Verify Your Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Appointment.displayName = 'Appointment';

export default Appointment;
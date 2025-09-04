// components/sections/About.tsx
'use client';

import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-indigo-900/50 rounded-2xl p-8 border border-indigo-700/50 backdrop-blur-md">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About MindCare</h2>
                <p className="text-lg text-purple-100 mb-6">
                  MindCare is a modern mental health service provider dedicated to making quality mental health care accessible to everyone. We believe that taking care of your mental health should be as normal and supported as taking care of your physical health.
                </p>
                <p className="text-lg text-purple-100 mb-8">
                  Our team of licensed professionals uses evidence-based approaches to help you navigate life challenges, build resilience, and achieve greater well-being.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-purple-200">Clients Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-purple-200">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-purple-200">Licensed Therapists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-purple-200">Crisis Support</div>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                  Our Approach
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-md h-48 flex items-end">
                <div>
                  <h3 className="text-white font-semibold mb-2">Compassionate Care</h3>
                  <p className="text-purple-200 text-sm">We provide empathetic, non-judgmental support.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-2xl p-6 border border-pink-500/30 backdrop-blur-md h-48 flex items-end mt-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">Evidence-Based</h3>
                  <p className="text-purple-200 text-sm">Our methods are grounded in scientific research.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-md h-48 flex items-end">
                <div>
                  <h3 className="text-white font-semibold mb-2">Personalized Plans</h3>
                  <p className="text-purple-200 text-sm">Treatment tailored to your unique needs.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 backdrop-blur-md h-48 flex items-end mt-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">Holistic Approach</h3>
                  <p className="text-purple-200 text-sm">Addressing mind, body, and spirit connection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
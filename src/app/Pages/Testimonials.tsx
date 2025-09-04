// components/sections/Testimonials.tsx
'use client';

import { forwardRef, useState, useEffect } from 'react';

const Testimonials = forwardRef<HTMLDivElement>((_, ref) => {
  const testimonials = [
    {
      name: "Emily R.",
      role: "Client",
      content: "MindCare changed my life. After struggling with anxiety for years, I finally found the right therapist who understood me. The tools I've learned help me every day.",
      avatar: "E",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "James T.",
      role: "Client",
      content: "The teletherapy option made it so easy to fit sessions into my busy schedule. My therapist is amazing and I've made more progress in 3 months than I did in years elsewhere.",
      avatar: "J",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sophia M.",
      role: "Client",
      content: "I was hesitant about therapy, but the warm, professional approach at MindCare made me feel comfortable immediately. Highly recommend their services!",
      avatar: "S",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "David K.",
      role: "Client",
      content: "The couples counseling saved our relationship. We learned communication skills that we'll use for the rest of our lives together. Thank you!",
      avatar: "D",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Lisa P.",
      role: "Client",
      content: "As a healthcare worker, the pandemic took a toll on my mental health. MindCare's support was crucial in helping me cope with burnout and anxiety.",
      avatar: "L",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Marcus W.",
      role: "Client",
      content: "The group therapy sessions provided a sense of community I didn't know I needed. Sharing experiences with others who understand is incredibly healing.",
      avatar: "M",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Real stories from people who have found support and healing through MindCare
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10 transition-all duration-500">
            <div className="flex items-start mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${testimonials[currentTestimonial].color} text-white text-xl font-bold mr-4`}>
                {testimonials[currentTestimonial].avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h3>
                <p className="text-purple-300">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            <p className="text-lg text-purple-100 italic">{testimonials[currentTestimonial].content}</p>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center space-x-3 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-purple-500 scale-125' : 'bg-purple-900'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Small testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${testimonial.color} text-white font-bold mr-3`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-purple-100 line-clamp-3">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
// components/sections/Therapists.tsx
'use client';

import { forwardRef } from 'react';

const Therapists = forwardRef<HTMLDivElement>((_, ref) => {
  const therapists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Clinical Psychologist",
      experience: "12 years",
      description: "Specializes in cognitive behavioral therapy and trauma recovery with a compassionate, evidence-based approach.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      color: "from-purple-600 via-blue-600 to-indigo-700",
      specialties: ["CBT", "Trauma Therapy", "Anxiety", "Depression"],
      rate: "$180/session"
    },
    {
      name: "Michael Chen, LCSW",
      specialty: "Licensed Clinical Social Worker",
      experience: "8 years",
      description: "Expert in family systems therapy and adolescent mental health with a focus on holistic wellness.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
      color: "from-pink-600 via-rose-600 to-red-600",
      specialties: ["Family Therapy", "Adolescent Mental Health", "Relationship Issues"],
      rate: "$160/session"
    },
    {
      name: "Dr. Amanda Williams",
      specialty: "Psychiatrist MD",
      experience: "15 years",
      description: "Board-certified psychiatrist specializing in medication management and integrative treatment approaches.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-600 via-cyan-600 to-teal-600",
      specialties: ["Medication Management", "Integrative Psychiatry", "Mood Disorders"],
      rate: "$220/session"
    },
    {
      name: "Jessica Martinez, LMFT",
      specialty: "Licensed Marriage & Family Therapist",
      experience: "10 years",
      description: "Specializes in couples counseling and relationship issues using Gottman Method techniques.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      color: "from-green-600 via-emerald-600 to-lime-600",
      specialties: ["Couples Therapy", "Gottman Method", "Communication Skills"],
      rate: "$170/session"
    }
  ];

  return (
    <section ref={ref} id="therapists" className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10% w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-15% w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-white/10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl mb-8 border border-purple-500/30 backdrop-blur-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm bg-purple-900/30 px-4 py-2 rounded-full border border-purple-700/30">
              Expert Team
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Elite Therapists</span>
          </h2>
          
          <p className="text-xl text-purple-200/90 max-w-3xl mx-auto leading-relaxed">
            World-class mental health professionals dedicated to your transformative wellness journey
          </p>
        </div>
        
        {/* Premium therapist cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {therapists.map((therapist, index) => (
            <div key={index} className="group relative">
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-700 hover:-translate-y-4 shadow-2xl shadow-purple-950/30">
                {/* Image section */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={therapist.image} 
                      alt={therapist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${therapist.color} opacity-90 mix-blend-soft-light`}></div>
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/10">
                    <span className="text-white text-sm font-semibold">{therapist.experience}</span>
                  </div>
                  
                  {/* Rate badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-4 py-2 shadow-lg">
                    <span className="text-white text-sm font-semibold">{therapist.rate}</span>
                  </div>
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{therapist.name}</h3>
                    <p className="text-purple-100/90 text-sm font-medium">{therapist.specialty}</p>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6">
                  {/* Rating and stats */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white text-sm ml-2 font-semibold">5.0</span>
                    </div>
                    
                    <div className="text-purple-300 text-sm font-medium">
                      ⭐ 98% Success Rate
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-purple-100/80 mb-6 text-sm leading-relaxed font-light">
                    {therapist.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-semibold mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1.5 bg-indigo-800/40 text-purple-200 text-xs rounded-full border border-indigo-700/40 backdrop-blur-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center group/btn">
                      View Profile
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    <button className="px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${therapist.color.replace('from-', 'border-').replace('via-', ' border-').replace('to-', ' border-')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
              
              {/* Floating effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-8 border border-white/10 backdrop-blur-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-purple-200/80 mb-6 max-w-2xl mx-auto">
              Our elite team of therapists is here to guide you towards mental wellness with personalized care and expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group">
                Schedule Consultation
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Meet All Specialists
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">50+</div>
              <div className="text-purple-300 text-sm">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">98%</div>
              <div className="text-purple-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">1000+</div>
              <div className="text-purple-300 text-sm">Lives Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Therapists.displayName = 'Therapists';

export default Therapists;
// components/sections/Community.tsx
'use client';

import { forwardRef } from 'react';

const Community = forwardRef<HTMLDivElement>((_, ref) => {
  const events = [
    {
      title: "Mindfulness Meditation Group",
      date: "Every Tuesday, 6:00 PM",
      type: "Online",
      participants: 24,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Anxiety Support Group",
      date: "Every Wednesday, 7:00 PM",
      type: "In-Person",
      participants: 15,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Parenting Workshop",
      date: "June 15, 2:00 PM",
      type: "Hybrid",
      participants: 32,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Art Therapy Session",
      date: "June 20, 5:30 PM",
      type: "In-Person",
      participants: 12,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={ref} id="community" className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community & Events</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join our supportive community and participate in events designed to promote mental wellness
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center text-white font-bold text-xs text-center p-2 mr-4`}>
                      {event.date.split(',')[0]}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{event.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="inline-flex items-center text-sm text-purple-200">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </span>
                        <span className="inline-flex items-center text-sm text-purple-200">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-purple-200">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {event.participants} participants
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <button className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors">
                      Learn More
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-sm font-medium hover:shadow-purple-500/30 transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View All Events
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8">Join Our Community</h3>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  👥
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Support Groups</h4>
                  <p className="text-purple-200">Connect with others who understand</p>
                </div>
              </div>
              <p className="text-purple-100 mb-6">
                Our support groups provide a safe, confidential space to share experiences, gain insights, and build connections with others facing similar challenges.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-purple-500/30 transition-all duration-300">
                Find a Support Group
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  💬
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Online Forum</h4>
                  <p className="text-purple-200">24/7 peer support community</p>
                </div>
              </div>
              <p className="text-purple-100 mb-6">
                Our moderated online community allows you to connect with others, share experiences, and find support anytime you need it.
              </p>
              <button className="w-full py-3 bg-white/10 rounded-lg text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                Join the Forum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Community.displayName = 'Community';

export default Community;
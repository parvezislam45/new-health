// components/sections/Resources.tsx
'use client';

import { forwardRef } from 'react';

const Resources = forwardRef<HTMLDivElement>((_, ref) => {
  const resources = [
    {
      title: "Understanding Anxiety",
      type: "Guide",
      description: "Learn about anxiety disorders, symptoms, and evidence-based management techniques.",
      icon: "📚",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Meditation for Beginners",
      type: "Audio Series",
      description: "Guided meditation sessions to help you start a mindfulness practice.",
      icon: "🧘‍♂️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Coping with Depression",
      type: "Workbook",
      description: "Interactive exercises and strategies to manage depressive symptoms.",
      icon: "📝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Communication Skills",
      type: "Video Series",
      description: "Improve your relationships with effective communication techniques.",
      icon: "🎬",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Sleep Hygiene Guide",
      type: "Article",
      description: "Evidence-based tips for improving sleep quality and overcoming insomnia.",
      icon: "😴",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Parenting Support",
      type: "Webinar",
      description: "Strategies for managing parental stress and supporting children's mental health.",
      icon: "👨‍👩‍👧‍👦",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section ref={ref} id="resources" className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resources & Tools</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Free mental health resources to support your journey between sessions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${resource.color} text-2xl mb-6`}>
                {resource.icon}
              </div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-full mb-4">
                {resource.type}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{resource.title}</h3>
              <p className="text-purple-100 mb-6">{resource.description}</p>
              <button className="text-purple-300 hover:text-white flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Access resource
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Crisis Resources</h3>
          <p className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
            If you are in crisis or experiencing thoughts of suicide, please reach out to these resources immediately
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              National Suicide Prevention Lifeline
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Crisis Text Line
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Emergency Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Resources.displayName = 'Resources';

export default Resources;
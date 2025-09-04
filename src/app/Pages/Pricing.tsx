// components/sections/Pricing.tsx
'use client';

import { forwardRef, useState } from 'react';

const Pricing = forwardRef<HTMLDivElement>((_, ref) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Basic",
      description: "For those who need occasional support",
      price: {
        monthly: 79,
        annual: 790
      },
      features: [
        "1 individual therapy session per month",
        "Access to online resources",
        "Crisis support line",
        "Monthly wellness newsletter"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Standard",
      description: "Our most popular plan for regular support",
      price: {
        monthly: 149,
        annual: 1490
      },
      features: [
        "4 individual therapy sessions per month",
        "Unlimited messaging with your therapist",
        "Access to all online resources",
        "Priority scheduling",
        "Group therapy sessions included",
        "Crisis support line"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Premium",
      description: "Comprehensive care for maximum support",
      price: {
        monthly: 249,
        annual: 2490
      },
      features: [
        "Unlimited individual therapy sessions",
        "Unlimited messaging with your therapist",
        "Access to all online resources and workshops",
        "24/7 crisis support",
        "Couples or family therapy sessions",
        "Personalized wellness plan",
        "Priority scheduling"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Affordable mental health care options tailored to your needs
          </p>
          
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1 mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-purple-200 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'annual' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-purple-200 hover:text-white'}`}
            >
              Annual (Save 15%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group bg-white/5 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-purple-400/50' : 'border-white/10 hover:border-purple-400/30'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-purple-200">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="text-white font-bold mb-2">
                  <span className="text-4xl">${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}</span>
                  <span className="text-lg font-medium text-purple-200">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-green-400 text-sm">Save ${plan.price.monthly * 12 - plan.price.annual} annually</p>
                )}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-purple-100">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-purple-500/30' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Insurance & Payment Options</h3>
            <p className="text-purple-100 mb-6">
              We accept most major insurance plans and offer flexible payment options. 
              Contact us to verify your insurance coverage or discuss payment plans.
            </p>
            <button className="px-6 py-3 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Verify Insurance Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
import { Check, Star } from 'lucide-react';
import { useState } from 'react';

const normalPlans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      '3,000+ Live Channels',
      'SD Quality',
      '1 Device',
      'Email Support',
      '3-Day Free Trial',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '14.99',
    features: [
      '8,000+ Live Channels',
      'HD Quality',
      '2 Devices',
      'Email Support',
      'Basic VOD Access',
    ],
    popular: true,
  },
  {
    name: 'Plus',
    price: '19.99',
    features: [
      '12,000+ Live Channels',
      'Full HD Quality',
      '3 Devices',
      'Priority Support',
      'Extended VOD Library',
    ],
    popular: false,
  },
];

const premiumPlans = [
  {
    name: 'Premium',
    price: '24.99',
    features: [
      '15,000+ Live Channels',
      '4K Ultra HD',
      '4 Devices',
      'Premium Support',
      'Complete VOD Library',
      'Ad-Free Experience',
    ],
    popular: false,
  },
  {
    name: 'Ultimate',
    price: '34.99',
    features: [
      '20,000+ Live Channels',
      '4K Ultra HD',
      '6 Devices',
      '24/7 Premium Support',
      'Full VOD + Exclusive Content',
      'Ad-Free Experience',
      'Offline Downloads',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '44.99',
    features: [
      '25,000+ Live Channels',
      '8K Quality',
      'Unlimited Devices',
      'Dedicated Support',
      'All Content + Early Access',
      'Ad-Free Experience',
      'Offline Downloads',
      'Family Sharing',
    ],
    popular: false,
  },
];

export function Plans() {
  const [activeTab, setActiveTab] = useState<'normal' | 'premium'>('normal');
  const plans = activeTab === 'normal' ? normalPlans : premiumPlans;

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="text-cyan-400">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing with instant activation. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('normal')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'normal'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Normal Plans
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'premium'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Premium Plans
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-500">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 transform scale-105'
                  : 'border-gray-800'
              } relative hover:border-cyan-500/50 transition-all animate-fadeIn`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-cyan-400">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

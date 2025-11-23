import { Check, Star } from 'lucide-react';
import { useState } from 'react';

interface Plan {
  name: string;
  monthlyPrice: number;
  features: string[];
  popular: boolean;
}

const normalPlans: Plan[] = [
  {
    name: 'Basic',
    monthlyPrice: 9.99,
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
    monthlyPrice: 14.99,
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
    monthlyPrice: 19.99,
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

const premiumPlans: Plan[] = [
  {
    name: 'Premium',
    monthlyPrice: 24.99,
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
    monthlyPrice: 34.99,
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
    monthlyPrice: 44.99,
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

const billingPeriods = [
  { label: '1 Month', value: 1, discount: 0 },
  { label: '3 Months', value: 3, discount: 0.05 },
  { label: '6 Months', value: 6, discount: 0.10 },
  { label: '1 Year', value: 12, discount: 0.20 },
];

function calculatePrice(monthlyPrice: number, months: number, discount: number): number {
  return Math.round(monthlyPrice * months * (1 - discount) * 100) / 100;
}

export function Plans() {
  const [activeTab, setActiveTab] = useState<'normal' | 'premium'>('normal');
  const [billingPeriod, setBillingPeriod] = useState(0);
  const plans = activeTab === 'normal' ? normalPlans : premiumPlans;
  const period = billingPeriods[billingPeriod];

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

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('normal')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm ${
                activeTab === 'normal'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Normal Plans
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm ${
                activeTab === 'premium'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Premium Plans
            </button>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {billingPeriods.map((billing, index) => (
              <button
                key={index}
                onClick={() => setBillingPeriod(index)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                  billingPeriod === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {billing.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-500">
          {plans.map((plan, index) => {
            const totalPrice = calculatePrice(plan.monthlyPrice, period.value, period.discount);
            const pricePerMonth = (totalPrice / period.value).toFixed(2);
            const discount = period.discount > 0 ? Math.round(period.discount * 100) : 0;

            return (
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-cyan-400">${totalPrice.toFixed(2)}</span>
                    <span className="text-gray-400 ml-2">/{period.label.toLowerCase()}</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    ${pricePerMonth}/month
                  </p>
                  {discount > 0 && (
                    <p className="text-green-400 text-sm font-semibold mt-1">
                      Save {discount}%
                    </p>
                  )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

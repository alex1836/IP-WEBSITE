import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular: boolean;
  savings?: string;
}

const normalPlans: Plan[] = [
  {
    name: '1 Month',
    price: 13.00,
    period: '/month',
    features: [
      '+25,000 TV Channels',
      '+42,000 Movies & Series',
      'Catch Up / EPG',
      'Ultra HD Picture Quality',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
  },
  {
    name: '3 Months',
    price: 24.00,
    period: '/3 months',
    features: [
      '+25,000 TV Channels',
      '+42,000 Movies & Series',
      'Catch Up / EPG',
      'Ultra HD Picture Quality',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
    savings: 'Save 15%',
  },
  {
    name: '12 Months',
    price: 59.00,
    period: '/year',
    features: [
      '+25,000 TV Channels',
      '+42,000 Movies & Series',
      'Catch Up / EPG',
      'Ultra HD Picture Quality',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: true,
    savings: 'Save 35%',
  },
  {
    name: '6 Months',
    price: 36.00,
    period: '/6 months',
    features: [
      '+25,000 TV Channels',
      '+42,000 Movies & Series',
      'Catch Up / EPG',
      'Ultra HD Picture Quality',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
    savings: 'Save 25%',
  },
];

const premiumPlans: Plan[] = [
  {
    name: '1 Month',
    price: 15.00,
    period: '/month',
    features: [
      '+50,000 TV Channels',
      '+66,000 Movies & Series',
      'Catch Up / EPG',
      '4K / Ultra HD Picture Quality',
      'Customized Content Options',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
  },
  {
    name: '3 Months',
    price: 34.00,
    period: '/3 months',
    features: [
      '+50,000 TV Channels',
      '+66,000 Movies & Series',
      'Catch Up / EPG',
      '4K / Ultra HD Picture Quality',
      'Customized Content Options',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
    savings: 'Save 15%',
  },
  {
    name: '12 Months',
    price: 86.00,
    period: '/year',
    features: [
      '+50,000 TV Channels',
      '+66,000 Movies & Series',
      'Catch Up / EPG',
      '4K / Ultra HD Picture Quality',
      'Customized Content Options',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: true,
    savings: 'Best Value',
  },
  {
    name: '6 Months',
    price: 49.00,
    period: '/6 months',
    features: [
      '+50,000 TV Channels',
      '+66,000 Movies & Series',
      'Catch Up / EPG',
      '4K / Ultra HD Picture Quality',
      'Customized Content Options',
      '24/7 Technical Assistance',
      'AntiFreeze Technology',
      'Fast & Stable',
    ],
    popular: false,
    savings: 'Save 30%',
  },
];

export function Plans() {
  const [activeTab, setActiveTab] = useState<'normal' | 'premium'>('normal');
  const navigate = useNavigate();
  const plans = activeTab === 'normal' ? normalPlans : premiumPlans;

  const handleChoosePlan = (plan: Plan) => {
    navigate('/checkout', { state: { plan } });
  };

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="text-cyan-400">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing with instant activation. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('normal')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm ${activeTab === 'normal'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              Normal Plans
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm ${activeTab === 'premium'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              Premium Plans
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-500">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-2xl p-8 border border-cyan-500 ${plan.popular
                ? 'shadow-lg shadow-cyan-500/20 transform scale-105 z-10'
                : ''
                } relative transition-all animate-fadeIn flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{plan.period}</p>
                {plan.savings && (
                  <p className="text-green-400 text-sm font-semibold">
                    {plan.savings}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleChoosePlan(plan)}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Trial Options Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
          {/* 2H Free Trial */}
          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-8 max-w-sm w-full text-center relative overflow-hidden group hover:border-cyan-500 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold mb-2 text-white">2H Free Trial</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-2">$0.00</div>
            <p className="text-gray-400 mb-6 text-sm">Quick test of our premium service.</p>

            <a
              href="https://wa.me/message/HACCQ2SN2ZVNG1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block w-full py-3 bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/30 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer text-center"
            >
              Get Free Trial
            </a>
          </div>

          {/* 24H Paid Pass */}
          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-8 max-w-sm w-full text-center relative overflow-hidden group hover:border-cyan-500 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold mb-2 text-white">24H Pass</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-2">$4.00</div>
            <p className="text-gray-400 mb-6 text-sm">Full day access to everything.</p>

            <button
              type="button"
              onClick={() => handleChoosePlan({
                name: '24H Pass',
                price: 4.00,
                period: '/24 hours',
                features: [
                  '+25,000 TV Channels',
                  '+42,000 Movies & Series',
                  'Full 24-hour access',
                  'Ultra HD Picture Quality',
                  '24/7 Technical Assistance'
                ],
                popular: false
              })}
              className="relative z-10 block w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
            >
              Get 24H Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

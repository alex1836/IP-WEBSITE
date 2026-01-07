import { UserPlus, CreditCard, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: UserPlus,
    title: 'Choose Your Plan',
    description: 'Select the perfect subscription plan that fits your needs and budget.',
  },
  {
    icon: CreditCard,
    title: 'Complete Payment',
    description: 'Secure checkout with instant activation. Start watching in seconds.',
  },
  {
    icon: PlayCircle,
    title: 'Start Streaming',
    description: 'Download the app, login with your credentials, and enjoy unlimited content.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get Started in <span className="text-cyan-400">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From signup to streaming in less than 5 minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                  <step.icon className="text-white" size={32} />
                </div>

                <div className="absolute -top-4 -left-4 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/packages"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            Start Your Plan
          </Link>
        </div>
      </div>
    </section>
  );
}

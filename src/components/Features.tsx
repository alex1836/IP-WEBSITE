import { Zap, Shield, Tv, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fastest IPTV Server',
    description: 'Our anti-freeze IPTV technology ensures smooth streaming with zero buffering, even during major sports events.',
  },
  {
    icon: Shield,
    title: 'Secure IPTV Subscription',
    description: 'Military-grade encryption keeps your viewing data safe. No logging, complete privacy guaranteed for all users.',
  },
  {
    icon: Tv,
    title: '4K IPTV Quality',
    description: 'Watch your favorite channels and movies in stunning 4K Ultra HD resolution with HDR support.',
  },
  {
    icon: Headphones,
    title: '24/7 Premium Support',
    description: 'Expert support team available around the clock via live chat and WhatsApp to assist with your IPTV setup.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-cyan-400">DeIPTV</span> as Your Provider
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The best IPTV provider features designed for the ultimate streaming experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Monitor, Smartphone, Tablet, Tv } from 'lucide-react';

const devices = [
  { icon: Tv, name: 'Smart TV' },
  { icon: Monitor, name: 'PC & Mac' },
  { icon: Smartphone, name: 'Mobile' },
  { icon: Tablet, name: 'Tablet' },
];

export function Devices() {
  return (
    <section id="devices" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Watch on <span className="text-cyan-400">Any Device</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compatible with all major platforms and devices. Stream anywhere, anytime.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                <device.icon className="text-white" size={32} />
              </div>
              <span className="font-semibold text-lg">{device.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Also compatible with</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              Android TV
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              Fire TV
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              Apple TV
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              Roku
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              Xbox
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
              PlayStation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

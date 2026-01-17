import { Tv, Smartphone } from 'lucide-react';
import { FaWindows, FaAndroid, FaApple, FaAmazon } from 'react-icons/fa';

import deviceImage from '../assets/DEVICE.webp';

const devices = [
  { icon: FaWindows, name: 'Windows' },
  { icon: FaAndroid, name: 'Android' },
  { icon: FaApple, name: 'Apple TV' },
  { icon: Tv, name: 'LG Smart TV' },
  { icon: FaAmazon, name: 'Fire TV' },
  { icon: Smartphone, name: 'Mobile' },
];

export function Devices() {
  return (
    <section id="devices" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            DeIPTV Works on <span className="text-cyan-400">Everything</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stream DeIPTV on any device, anytime, anywhere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-4 group cursor-pointer h-40"
            >
              <device.icon className="text-gray-900 group-hover:text-cyan-600 transition-colors duration-300" size={48} />
              <span className="font-semibold text-gray-900 text-lg">{device.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <h3 className="text-3xl sm:text-5xl font-bold text-white mb-12">DeIPTV is Compatible with all <span className="text-cyan-400">devices</span></h3>
          <div className="flex justify-center">
            <img
              src={deviceImage}
              alt="DeIPTV Compatible Devices"
              className="max-w-full h-auto max-h-60 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

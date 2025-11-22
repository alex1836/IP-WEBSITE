import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              deiptv
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Features
              </a>
              <a href="#plans" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Plans
              </a>
              <a href="#devices" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Devices
              </a>
              <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
                FAQ
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors"
            >
              Features
            </a>
            <a
              href="#plans"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors"
            >
              Plans
            </a>
            <a
              href="#devices"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors"
            >
              Devices
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors"
            >
              FAQ
            </a>
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

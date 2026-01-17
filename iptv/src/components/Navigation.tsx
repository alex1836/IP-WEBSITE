import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 h-20'
        : 'bg-transparent border-b border-transparent h-24'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="deiptv8k"
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}
              />
            </Link>
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12">
            <Link to="/packages" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase">
              Packages
            </Link>
            <Link to="/guide" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase">
              Setup Guide
            </Link>
            <Link to="/reseller" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase">
              Reseller
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase">
              Blog
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/packages" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div >
        </div >
      </div >

      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900 absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/packages"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors uppercase"
            >
              Packages
            </Link>
            <Link
              to="/guide"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors uppercase"
            >
              Setup Guide
            </Link>
            <Link
              to="/reseller"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors uppercase"
            >
              Reseller
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors uppercase"
            >
              Blog
            </Link>
            <Link
              to="/packages"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold block text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav >
  );
}

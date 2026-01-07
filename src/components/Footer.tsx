import { Mail, MessageCircle, Facebook, Twitter, Instagram, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="deiptv8k" className="h-24 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">
              Premium IPTV service with 20,000+ channels in stunning 4K quality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleScroll('features')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('plans')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('devices')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Devices
                </button>
              </li>
              <li>
                <Link to="/faq-page" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">

              <li>
                <Link to="/guide" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Setup Guide
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-cyan-400" />
                <span>support@deiptv8k.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MessageCircle size={18} className="text-cyan-400" />
                <span>24/7 Live Chat</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-cyan-400" />
                <a href="https://wa.me/message/HACCQ2SN2ZVNG1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  +1 (716) 328-0936
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 deiptv8k. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

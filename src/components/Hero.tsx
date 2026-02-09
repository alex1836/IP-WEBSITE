import { Play, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CountUp({ end, duration = 2000, suffix = '', decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toFixed(decimals)}{suffix}</>;
}

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Premium IPTV service streaming 4K live TV channels, sports and movies - DeIPTV"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-flow mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">#1 Rated Service in 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              DeIPTV <span className="text-gray-300 font-bold">Premium 2026</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                20,000+ Live Channels
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Unlock the ultimate entertainment experience with <strong>DeIPTV</strong>.
              Enjoy <span className="text-cyan-400 font-semibold">anti-freeze 4K streaming</span>,
              live sports, and premium movies & series instantly on any device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/HACCQ2SN2ZVNG1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Start Free Trial</span>
              </a>
              <button
                onClick={() => navigate('/packages')}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold text-white backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} className="fill-current" />
                Watch Now
              </button>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500/10">
                  <CheckCircle className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm font-medium">Instant Activation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500/10">
                  <CheckCircle className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm font-medium">24/7 Premium Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500/10">
                  <CheckCircle className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-cyan-500/10">
                  <CheckCircle className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm font-medium">Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="aspect-video bg-gray-950 rounded-lg overflow-hidden mb-4 shadow-lg relative pointer-events-none">
                <video
                  src="/hero-video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  title="Preview of DeIPTV Premium Channels and Movies"
                  aria-label="Video preview showing the variety of channels and high quality content available on DeIPTV"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    <CountUp end={20} suffix="K+" />
                  </div>
                  <div className="text-xs text-gray-400">Channels</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    <CountUp end={4} suffix="K" />
                  </div>
                  <div className="text-xs text-gray-400">Quality</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    <CountUp end={99.9} suffix="%" decimals={1} />
                  </div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


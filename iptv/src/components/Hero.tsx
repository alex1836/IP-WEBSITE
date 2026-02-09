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
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-flow mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Stream 20,000+
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Live TV Channels
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Experience premium IPTV with instant activation, anti-freeze technology,
              and crystal-clear 4K quality. No buffering, no limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/HACCQ2SN2ZVNG1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Free Trial
              </a>
              <button
                onClick={() => navigate('/packages')}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Now
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="text-cyan-400" size={20} />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="text-cyan-400" size={20} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="text-cyan-400" size={20} />
                <span>Money-Back Guarantee</span>
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
    </section >
  );
}


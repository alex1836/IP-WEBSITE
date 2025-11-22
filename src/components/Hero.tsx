import { Play, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
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
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
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
              <div className="aspect-video bg-gray-950 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-cyan-400" size={64} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">20K+</div>
                  <div className="text-xs text-gray-400">Channels</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">4K</div>
                  <div className="text-xs text-gray-400">Quality</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
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

import { CheckCircle } from 'lucide-react';

export function FamilyPlanPromo() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/5 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-white">
                            3-Device Family <span className="text-cyan-400">IPTV Plan</span> – Annual Subscription for Just <span className="text-cyan-400">$157.99/year</span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Enjoy DEIPTV 8K on up to 3 devices at once — perfect for families! Watch
                            sports, movies, and kids’ shows in crystal-clear 4K & 8K quality without
                            buffering.
                        </p>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-white font-semibold text-xl">
                                    <CheckCircle className="text-cyan-400" size={24} />
                                    Something for Everyone
                                </div>
                                <p className="text-gray-400 pl-9">
                                    Access 30,000+ live channels and over 157,000 on-demand movies and
                                    series — a full library of entertainment for every age and interest.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-white font-semibold text-xl">
                                    <CheckCircle className="text-cyan-400" size={24} />
                                    Universal Device Support
                                </div>
                                <p className="text-gray-400 pl-9">
                                    Stream on Smart TVs, Firestick, tablets, or phones — all supported by IPTV
                                    Smarters Pro. Access 30,000+ live channels and 157,000+ movies & series for
                                    everyone in the family.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <span className="px-6 py-3 bg-gray-800 text-cyan-400 border border-cyan-500/30 rounded-full font-semibold text-sm hover:bg-gray-750 transition-all">
                                3 Screens Watch Together
                            </span>
                            <span className="px-6 py-3 bg-gray-800 text-cyan-400 border border-cyan-500/30 rounded-full font-semibold text-sm hover:bg-gray-750 transition-all">
                                HD TO 8K Quality
                            </span>
                            <span className="px-6 py-3 bg-gray-800 text-cyan-400 border border-cyan-500/30 rounded-full font-semibold text-sm hover:bg-gray-750 transition-all">
                                One Year Access
                            </span>
                        </div>
                    </div>

                    <div className="relative perspective-1000 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 transform rotate-y-12 scale-90 transition-transform duration-500 group-hover:rotate-y-6"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transform rotate-y-6 transition-all duration-500 ease-out preserve-3d group-hover:rotate-y-0 group-hover:scale-[1.02]">
                            <img
                                src="/leads-iptv.webp"
                                alt="Family watching TV"
                                className="w-full h-full object-cover transform scale-105 transition-transform duration-700 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

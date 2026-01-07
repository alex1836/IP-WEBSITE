import { Tv, Smartphone, Monitor, Download, CheckCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const guides = [
    {
        id: 'smart-tv',
        icon: Tv,
        title: 'Smart TV Setup',
        description: 'Samsung, LG, and Android TV',
        steps: [
            { title: 'Open App Store', description: 'Navigate to your TV\'s app store (Samsung Apps, LG Content Store, or Google Play).' },
            { title: 'Search App', description: 'Search for "IPTV Smarters Pro" or "IBO Player" in the search bar.' },
            { title: 'Install & Open', description: 'Download and install the application, then launch it from your home screen.' },
            { title: 'Select Login Method', description: 'Choose "Login with Xtream Codes API" from the available options.' },
            { title: 'Enter Details', description: 'Input the username, password, and URL sent to your email address.' },
        ],
    },
    {
        id: 'firestick',
        icon: Download,
        title: 'Firestick Setup',
        description: 'Amazon Fire TV Stick',
        steps: [
            { title: 'Get Downloader', description: 'Go to Find > Search, type "Downloader", and install the app.' },
            { title: 'Enable Unknown Sources', description: 'Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn ON for Downloader.' },
            { title: 'Enter Code', description: 'Open Downloader and enter the code: 29834 to download IPTV Smarters.' },
            { title: 'Install App', description: 'Click "Install" when the download finishes, then open the app.' },
            { title: 'Login', description: 'Select Xtream Codes API and enter your subscription details.' },
        ],
    },
    {
        id: 'mobile',
        icon: Smartphone,
        title: 'Mobile Setup',
        description: 'iOS and Android Devices',
        steps: [
            { title: 'Download App', description: 'Get "IPTV Smarters Pro" (or "Smarters Player Lite" on iOS) from your App Store.' },
            { title: 'Launch App', description: 'Open the application and accept the Terms of Service.' },
            { title: 'Choose Login', description: 'Select "Login with Xtream Codes API".' },
            { title: 'Enter Credentials', description: 'Fill in your Name, Username, Password, and Port URL.' },
            { title: 'Start Watching', description: 'Tap "Add User" and enjoy your content.' },
        ],
    },
    {
        id: 'computer',
        icon: Monitor,
        title: 'Computer Setup',
        description: 'Windows and Mac',
        steps: [
            { title: 'Download VLC', description: 'Download and install VLC Media Player from the official website.' },
            { title: 'Open Network Stream', description: 'Open VLC, click "Media" (or "File" on Mac) > "Open Network Stream".' },
            { title: 'Paste URL', description: 'Paste the M3U URL provided in your welcome email.' },
            { title: 'Play', description: 'Click "Play" to load the channel list.' },
            { title: 'Navigate', description: 'Use CTRL+L (CMD+L) to view the playlist and switch channels.' },
        ],
    },
];

export function GuidePage() {
    const [activeTab, setActiveTab] = useState('smart-tv');
    const activeGuide = guides.find((g) => g.id === activeTab) || guides[0];

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Setup <span className="text-cyan-400">Guide</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Follow these simple instructions to get started on your favorite device
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {guides.map((guide) => (
                        <button
                            key={guide.id}
                            onClick={() => setActiveTab(guide.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 border ${activeTab === guide.id
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-600 hover:bg-gray-800'
                                }`}
                        >
                            <guide.icon size={24} className={activeTab === guide.id ? 'text-cyan-400' : ''} />
                            <span className="font-semibold text-lg">{guide.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/30">
                            <activeGuide.icon size={40} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">{activeGuide.title}</h2>
                        <p className="text-gray-400 text-lg">{activeGuide.description}</p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-gray-800 md:-translate-x-1/2"></div>

                        <div className="space-y-12">
                            {activeGuide.steps.map((step, index) => (
                                <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>

                                    {/* Icon/Number on Line */}
                                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-cyan-500 flex items-center justify-center z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-cyan-400 font-bold text-sm">{index + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-12 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group-hover:-translate-y-1">
                                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 md:inline-flex">
                                                {step.title}
                                                <CheckCircle size={16} className="text-cyan-500 md:hidden" />
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Empty space for opposite side */}
                                    <div className="hidden md:block md:w-[45%]"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/packages"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                        >
                            Get Subscription Now
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

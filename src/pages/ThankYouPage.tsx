import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';

export function ThankYouPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 flex items-center justify-center">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8 flex justify-center">
                    <div className="rounded-full bg-cyan-500/10 p-6 ring-1 ring-cyan-500/50">
                        <CheckCircle className="w-16 h-16 text-cyan-400" />
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Thank You for Your Order!
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                    Your payment has been successfully processed. We've sent a confirmation email with your login credentials and setup instructions.
                </p>

                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mb-12 text-left">
                    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        What happens next?
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-cyan-400">1</div>
                            <div>
                                <h3 className="font-medium text-white">Check your email</h3>
                                <p className="text-gray-400 text-sm mt-1">We've sent your IPTV credentials to your inbox. Check your spam folder if you don't see it.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-cyan-400">2</div>
                            <div>
                                <h3 className="font-medium text-white">Download the App</h3>
                                <p className="text-gray-400 text-sm mt-1">Follow the setup guide to install our app on your device.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-cyan-400">3</div>
                            <div>
                                <h3 className="font-medium text-white">Start Streaming</h3>
                                <p className="text-gray-400 text-sm mt-1">Login with your credentials and enjoy 20,000+ channels.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/guide"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Setup Guide
                    </Link>
                    <a
                        href="https://wa.me/message/HACCQ2SN2ZVNG1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 transition-all"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Fast Support
                    </a>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-all"
                    >
                        Return Home
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

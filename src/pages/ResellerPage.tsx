import { CheckCircle, DollarSign, Users, Globe } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: 'High Profit Margins',
        description: 'Earn up to 100% profit on every subscription you sell.',
    },
    {
        icon: Users,
        title: 'Complete Control',
        description: 'Manage your customers and subscriptions through our easy-to-use panel.',
    },
    {
        icon: Globe,
        title: 'Global Coverage',
        description: 'Sell to customers anywhere in the world with our stable global servers.',
    },
];

export function ResellerPage() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Become a <span className="text-cyan-400">Reseller</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Start your own IPTV business today with our premium reseller program
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all text-center"
                        >
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <benefit.icon className="text-cyan-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-800/30 rounded-3xl p-8 md:p-12 border border-gray-700">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why Join Us?</h2>
                            <ul className="space-y-4">
                                {[
                                    'Instant activation panel',
                                    '24/7 dedicated support',
                                    'White label options available',
                                    'Flexible credit system',
                                    'No technical knowledge required',
                                    'Marketing materials provided',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">How to Get Started</h3>
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Choose Your Credits</h4>
                                        <p className="text-gray-400 text-sm">Decide how many credits you need to start your business.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Select Your Server</h4>
                                        <p className="text-gray-400 text-sm">Choose which server location works best for your customers.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Pay for Your Credits</h4>
                                        <p className="text-gray-400 text-sm">Complete the payment for your selected credit package.</p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Panel Dashboard Creation</h4>
                                        <p className="text-gray-400 text-sm">Our team will create your personalized reseller dashboard.</p>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Receive Login Info</h4>
                                        <p className="text-gray-400 text-sm">Get your login credentials and start managing your business!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Now Button */}
                            <div className="mt-8">
                                <a
                                    href="https://wa.me/message/HACCQ2SN2ZVNG1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-center"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { ShieldCheck } from 'lucide-react';

export function DMCAPage() {
    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="text-cyan-400" size={28} />
                    </div>
                    <h1 className="text-4xl font-bold">DMCA & Copyright Policy</h1>
                </div>

                <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Overview</h2>
                        <p>
                            DeIPTV respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA),
                            we have implemented procedures for receiving written notification of claimed infringements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Content Disclaimer</h2>
                        <p>
                            DeIPTV operates as a technical service provider. We do not host, store, or manage any video files or media content on our servers.
                            Our service provides technical access to publicly available streams and media links provided by third-party content providers.
                            We do not have control over the content provided by these third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Reporting Infringement</h2>
                        <p>
                            If you believe that your copyrighted work is being infringed upon via our technical service, please provide our designated
                            Copyright Agent with a written notice containing the following information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                            <li>A description of the copyrighted work that you claim has been infringed.</li>
                            <li>A description of where the material that you claim is infringing is located on our site or service.</li>
                            <li>Your address, telephone number, and email address.</li>
                            <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Information</h2>
                        <p>
                            Notifications of claimed infringement should be sent to our support team via our contact page or WhatsApp for immediate review.
                            We take all valid copyright claims seriously and will take appropriate action, including disabling access to infringing technical links.
                        </p>
                    </section>

                    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl mt-12">
                        <p className="text-sm italic text-gray-400">
                            Last Updated: January 18, 2026. DeIPTV reserves the right to modify this policy at any time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


import { Helmet } from 'react-helmet-async';

export function AboutUs() {
    return (
        <>
            <Helmet>
                <title>About DeIPTV | Best Premium IPTV Service Provider 2026</title>
                <meta name="description" content="Learn about DeIPTV, the leading premium IPTV provider. We offer 20,000+ live channels, 4K streaming, and 24/7 support. The most reliable IPTV service." />
                <meta name="keywords" content="about deiptv, best iptv provider, premium iptv service, reliable iptv, deiptv company, iptv streaming provider" />
                <link rel="canonical" href="https://deiptv8k.com/about" />
            </Helmet>
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    About DeIPTV - Premium IPTV Provider
                </h1>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
                        <p>
                            DeIPTV is a leading provider of premium IPTV services, dedicated to bringing high-quality entertainment to viewers around the globe.
                            With over 20,000 live channels and a vast library of movies and series, DeIPTV offers an unparalleled viewing experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                        <p>
                            Our mission at DeIPTV is to revolutionize the way people consume television by providing a flexible, affordable, and high-quality alternative to traditional cable and satellite services.
                            We believe in freedom of choice and the power of technology to connect people with the content they love.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Why Choose DeIPTV?</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Premium Quality:</strong> DeIPTV prioritizes 4K and Ultra HD streaming for crystal-clear visuals.</li>
                            <li><strong>Unmatched Reliability:</strong> Our AntiFreeze technology ensures smooth, uninterrupted playback on all devices.</li>
                            <li><strong>24/7 Support:</strong> Our dedicated DeIPTV support team is available around the clock to assist you.</li>
                            <li><strong>Huge Variety:</strong> From sports and news to movies and kids' shows, DeIPTV has something for everyone.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}

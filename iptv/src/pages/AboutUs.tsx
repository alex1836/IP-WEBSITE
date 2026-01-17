
export function AboutUs() {
    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Us
            </h1>

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
                    <p>
                        deiptv8k is a leading provider of premium IPTV services, dedicated to bringing high-quality entertainment to viewers around the globe.
                        With over 20,000 live channels and a vast library of movies and series, we offer an unparalleled viewing experience.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                    <p>
                        Our mission is to revolutionize the way people consume television by providing a flexible, affordable, and high-quality alternative to traditional cable and satellite services.
                        We believe in freedom of choice and the power of technology to connect people with the content they love.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Quality:</strong> We prioritize 4K and Ultra HD streaming for crystal-clear visuals.</li>
                        <li><strong>Reliability:</strong> Our AntiFreeze technology ensures smooth, uninterrupted playback.</li>
                        <li><strong>Support:</strong> Our dedicated support team is available 24/7 to assist you.</li>
                        <li><strong>Variety:</strong> From sports and news to movies and kids' shows, we have something for everyone.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

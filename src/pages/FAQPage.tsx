import { Helmet } from 'react-helmet-async';
import { FAQ } from '../components/FAQ';

export function FAQPage() {
    return (
        <>
            <Helmet>
                <title>DeIPTV FAQ - Common Questions & Troubleshooting | IPTV Help</title>
                <meta name="description" content="Find answers to common questions about DeIPTV. Learn about installation, payment methods, buffering solutions, and subscription details." />
                <meta name="keywords" content="iptv faq, iptv help, iptv troubleshooting, iptv questions, is iptv legal, fix iptv buffering, deiptv support" />
                <link rel="canonical" href="https://deiptv8k.com/faq-page" />
            </Helmet>
            <div className="pt-20 bg-gray-900 min-h-screen">
                <div className="sr-only">
                    <h1>DeIPTV Frequently Asked Questions & Help Center</h1>
                </div>
                <FAQ />
            </div>
        </>
    );
}

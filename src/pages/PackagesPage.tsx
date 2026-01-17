import { Helmet } from 'react-helmet-async';
import { Plans } from '../components/Plans';

export function PackagesPage() {
    return (
        <>
            <Helmet>
                <title>Buy IPTV Subscription | Cheap IPTV Plans & Prices - DeIPTV</title>
                <meta name="description" content="Get the best IPTV subscription at cheap prices. Buy DeIPTV now and get instant access to 20,000+ channels and VOD. 24H free trial available." />
                <meta name="keywords" content="buy iptv, cheap iptv, iptv subscription price, order iptv, iptv deals, best iptv price, deiptv plans" />
                <link rel="canonical" href="https://deiptv8k.com/packages" />
            </Helmet>
            <div className="pt-20 min-h-screen bg-gray-900">
                <div className="sr-only">
                    <h1>Buy Cheap IPTV Subscription - Best Prices 2026</h1>
                </div>
                <Plans />
            </div>
        </>
    );
}

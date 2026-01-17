import { SEO } from '../components/SEO';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Plans } from '../components/Plans';
import { FamilyPlanPromo } from '../components/FamilyPlanPromo';
import { ContentCarousel } from '../components/ContentCarousel';
import { Devices } from '../components/Devices';
import { Testimonials } from '../components/Testimonials';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';

export function HomePage() {
  return (
    <>
      <SEO
        title="DeIPTV – Premium IPTV Website for Live TV, Movies & Sports"
        description="DeIPTV is a premium IPTV website offering live TV channels, sports, movies, and series in HD & 4K quality. Stable servers, fast access, and worldwide coverage."
        keywords="deiptv, deiptv subscription, deiptv live tv, deiptv streaming, deiptv live stream, iptv 4k, premium iptv"
      />
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DeIPTV",
        "url": "https://deiptv8k.com",
        "logo": "https://deiptv8k.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/deiptv",
          "https://twitter.com/deiptv",
          "https://www.instagram.com/deiptv"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-234-567-8900",
          "contactType": "customer service"
        }
      }} />
      <Hero />
      <Features />
      <Plans />
      <FamilyPlanPromo />
      <ContentCarousel />
      <Devices />
      <Testimonials />
      <HowItWorks />
      <FAQ />
    </>
  );
}

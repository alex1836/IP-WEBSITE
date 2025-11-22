import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Plans } from '../components/Plans';
import { ContentCarousel } from '../components/ContentCarousel';
import { Devices } from '../components/Devices';
import { Testimonials } from '../components/Testimonials';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Features />
      <Plans />
      <ContentCarousel />
      <Devices />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

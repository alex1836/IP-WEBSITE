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

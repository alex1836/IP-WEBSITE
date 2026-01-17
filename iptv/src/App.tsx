import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { GuidePage } from './pages/GuidePage';
import { PackagesPage } from './pages/PackagesPage';
import { ResellerPage } from './pages/ResellerPage';
import { BlogPage } from './pages/BlogPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { RefundPolicy } from './pages/RefundPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { AboutUs } from './pages/AboutUs';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { HelpCenter } from './pages/HelpCenter';
import { SetupGuide } from './pages/SetupGuide';
import { Tutorials } from './pages/Tutorials';
import { ThankYouPage } from './pages/ThankYouPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-center" />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/reseller" element={<ResellerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq-page" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/setup" element={<SetupGuide />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

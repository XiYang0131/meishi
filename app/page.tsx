import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import PageNav from './components/ui/PageNav';
import PageLoader from './components/ui/PageLoader';
import ScrollToTop from './components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <PageNav />
      <main className="page-transition">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
} 
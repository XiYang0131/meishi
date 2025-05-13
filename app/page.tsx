import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import ScrollToTop from './components/ui/ScrollToTop';
import NavIndicator from './components/ui/NavIndicator';
import PageLoader from './components/ui/PageLoader';
import PageNav from './components/ui/PageNav';
import LoadingBar from './components/ui/LoadingBar';

export default function Home() {
  return (
    <div className="page-transition">
      <LoadingBar />
      <PageLoader />
      <Header />
      <PageNav />
      <main>
        <Hero />
        <div className="section-divider bg-gradient-to-r from-emerald-500 to-teal-500 h-1 mx-auto w-24 my-8"></div>
        <Features />
        <div className="section-divider bg-gradient-to-r from-emerald-500 to-teal-500 h-1 mx-auto w-24 my-8"></div>
        <HowItWorks />
        <div className="section-divider bg-gradient-to-r from-emerald-500 to-teal-500 h-1 mx-auto w-24 my-8"></div>
        <Testimonials />
        <div className="section-divider bg-gradient-to-r from-emerald-500 to-teal-500 h-1 mx-auto w-24 my-8"></div>
        <Pricing />
        <div className="section-divider bg-gradient-to-r from-emerald-500 to-teal-500 h-1 mx-auto w-24 my-8"></div>
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
      <NavIndicator />
    </div>
  );
} 
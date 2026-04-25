import Architecture from '@/components/Architecture';
import Benchmark from '@/components/Benchmark';
import CtaStrip from '@/components/CtaStrip';
import FAQ from '@/components/FAQ';
import FinalCta from '@/components/FinalCta';
import FloatingCta from '@/components/FloatingCta';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import LiveDemo from '@/components/LiveDemo';
import Nav from '@/components/Nav';
import Pricing from '@/components/Pricing';
import Security from '@/components/Security';
import Shift from '@/components/Shift';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveDemo />
        <Shift />
        <HowItWorks />
        <Benchmark />
        <CtaStrip />
        <Architecture />
        <Security />
        <Pricing />
        <Founders />
        <FAQ />
        <FinalCta />
      </main>
      <FloatingCta />
      <Footer />
    </>
  );
}

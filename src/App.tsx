import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferSection from './components/OfferSection';
import OpeningHours from './components/OpeningHours';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SectionDivider />
        <OfferSection />
        <SectionDivider />
        <OpeningHours />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

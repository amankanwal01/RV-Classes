import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Owner from './components/Owner';
import Courses from './components/Courses';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const WHATSAPP_LINK = "https://wa.me/917668865655?text=Hello%20I%20want%20to%20join%20RV%20Coaching%20Classes";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero whatsappLink={WHATSAPP_LINK} />
      <Owner />
      <Courses />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTABanner whatsappLink={WHATSAPP_LINK} />
      <Contact />
      <Footer />
      <WhatsAppButton whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

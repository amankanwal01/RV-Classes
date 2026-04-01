import { ChevronRight } from 'lucide-react';

const Hero = ({ whatsappLink }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="tagline">A Better Future Starts Here</span>
        <h1>Empowering Minds, Shaping <span>Futures</span></h1>
        <p>
          Premium coaching for Classes 9 to 12. Expert guidance for academic excellence.
        </p>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="cta-btn">
          Book Your Seat Now <ChevronRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

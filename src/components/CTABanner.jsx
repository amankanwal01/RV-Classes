const CTABanner = ({ whatsappLink }) => {
  return (
    <section className="cta-banner">
      <h2>New Batch Starting April 2026</h2>
      <p>Your journey to academic excellence begins here. Limited seats available!</p>
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-orange">
        Join Now via WhatsApp
      </a>
    </section>
  );
};

export default CTABanner;

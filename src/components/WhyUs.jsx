import { CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="section-title">
        <h2>Why RV Classes?</h2>
        <div className="underline"></div>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <h3>9+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Successful Students</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Board Result Score</p>
        </div>
        <div className="stat-item">
          <h3>15:1</h3>
          <p>Personalized Ratio</p>
        </div>
      </div>
      
      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {[
          "Expert Faculty Members",
          "Regular Mock Tests",
          "Comprehensive Study Material",
          "Personalized Doubt Sessions"
        ].map((feature, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#1e3a8a', fontWeight: '600' }}>
            <CheckCircle2 size={24} color="#f97316" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

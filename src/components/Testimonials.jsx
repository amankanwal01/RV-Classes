import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-title">
        <h2>What Our Students Say</h2>
        <div className="underline"></div>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div style={{ display: 'flex', color: '#f97316', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f97316" />)}
          </div>
          <p>"The teachers at RV Classes are incredibly supportive. They make complex topics easy to understand. I scored 95% in my boards thanks to their guidance!"</p>
          <div className="user">
            <div className="avatar">AS</div>
            <div>
              <h4 style={{ margin: 0 }}>Aryan Sharma</h4>
              <small style={{ color: '#64748b' }}>Class 12 (Science)</small>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div style={{ display: 'flex', color: '#f97316', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f97316" />)}
          </div>
          <p>"Best coaching in the area. The regular tests and personalized feedback helped me identify my weak spots and improve significantly in Mathematics."</p>
          <div className="user">
            <div className="avatar">PK</div>
            <div>
              <h4 style={{ margin: 0 }}>Priya Kapoor</h4>
              <small style={{ color: '#64748b' }}>Class 10 Student</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

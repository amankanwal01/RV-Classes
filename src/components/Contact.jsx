import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Visit Our Center</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <div className="info-item">
            <MapPin className="icon" size={32} />
            <p>123 Education Hub, Near Main Market, City Center, PIN - 110001</p>
          </div>
          <div className="info-item">
            <Phone className="icon" size={32} />
            <p>+91 76688 65655</p>
          </div>
          <div className="info-item">
            <Mail className="icon" size={32} />
            <p>admissions@rvclasses.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

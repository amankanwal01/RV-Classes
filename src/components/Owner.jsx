import { Leaf, Award, GraduationCap, Heart } from "lucide-react";

const Owner = () => {
  return (
    <section id="founder" className="owner-section">
      <div className="container">
        <div className="owner-content">
          <div className="owner-image-wrapper">
            <div className="image-decoration top-left">
              <Leaf size={40} className="leaf-icon" />
            </div>
            <div className="image-decoration bottom-right">
              <Leaf size={40} className="leaf-icon rotated" />
            </div>
            <img
              src="/images/ravida.png"
              alt="Founder of RV Classes"
              className="owner-image"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="owner-details">
            <div className="owner-header">
              <span className="subtitle">Meet Our Visionary</span>
              <h2>The Heart Behind RV Classes</h2>
              <div className="underline-left"></div>
            </div>

            <p className="owner-bio">
              With over 15 years of dedicated experience in the field of
              education,
              <strong> Mr. R.V. Singh</strong> has transformed the lives of
              thousands of students. His unique teaching methodology and
              commitment to excellence have made RV Classes a beacon of hope for
              aspiring scholars.
            </p>

            <div className="owner-stats">
              <div className="owner-stat-item">
                <div className="stat-icon-box">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4>Academic Excellence</h4>
                  <p>Focused on conceptual clarity and deep understanding.</p>
                </div>
              </div>

              <div className="owner-stat-item">
                <div className="stat-icon-box">
                  <Award size={24} />
                </div>
                <div>
                  <h4>15+ Years Experience</h4>
                  <p>A legacy of producing top-tier results consistently.</p>
                </div>
              </div>

              <div className="owner-stat-item">
                <div className="stat-icon-box">
                  <Heart size={24} />
                </div>
                <div>
                  <h4>Student-First Approach</h4>
                  <p>
                    Personalized guidance tailored to every student's needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="owner-quote">
              <p>
                "Education is not just about learning facts, but training the
                mind to think and the heart to grow."
              </p>
              <span className="quote-author">— Mr. R.V. Singh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;

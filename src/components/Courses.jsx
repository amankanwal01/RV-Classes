import { BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="section-title">
        <h2>Our Specialized Courses</h2>
        <div className="underline"></div>
      </div>
      <div className="courses-grid">
        <div className="course-card">
          <div className="icon-wrapper">
            <BookOpen size={40} />
          </div>
          <h3>Secondary (9-10)</h3>
          <p>Building a strong foundation for board preparation.</p>
          <ul className="course-points">
            <li><CheckCircle2 size={18} /> Science & Mathematics Focus</li>
            <li><CheckCircle2 size={18} /> Conceptual Clarity Modules</li>
            <li><CheckCircle2 size={18} /> Regular Board Mock Tests</li>
          </ul>
        </div>
        <div className="course-card">
          <div className="icon-wrapper">
            <GraduationCap size={40} />
          </div>
          <h3>Senior Secondary (11-12)</h3>
          <p>Expert coaching for Science and Commerce streams.</p>
          <ul className="course-points">
            <li><CheckCircle2 size={18} /> Physics, Chemistry & Maths</li>
            <li><CheckCircle2 size={18} /> Accountancy & Commerce Core</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses;

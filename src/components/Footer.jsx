const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">RV <span>CLASSES</span></a>
      <p>&copy; 2026 RV Coaching Classes. All rights reserved.</p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#home" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
        <a href="#courses" style={{ color: '#94a3b8', textDecoration: 'none' }}>Courses</a>
        <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

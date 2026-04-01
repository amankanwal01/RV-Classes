import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">RV <span>CLASSES</span></a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#founder">Founder</a>
        <a href="#courses">Courses</a>
        <a href="#why-us">Why Us</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

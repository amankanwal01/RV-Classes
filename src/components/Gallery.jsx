const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Classroom",
      desc: "Spacious and well-lit learning environment"
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Library Area",
      desc: "Quiet space for self-study and research"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Interactive Sessions",
      desc: "Engaging group discussions and activities"
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Learning",
      desc: "Equipped with latest educational technology"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Doubt Clearing",
      desc: "One-on-one personalized attention"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Student Lounge",
      desc: "Comfortable area for breaks and networking"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="section-title">
        <h2>Inside RV Classes</h2>
        <div className="underline"></div>
        <p style={{ marginTop: '1rem', color: '#64748b' }}>Take a virtual tour of our premium learning facility</p>
      </div>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.url} alt={img.title} referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <h3>{img.title}</h3>
                <p>{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CODE CORTEX</h3>
          <p>Delivering innovative software solutions that drive business transformation, and digital growth.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/code-cortex/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/CodeCortexDigital" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/CodeCortexpk" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579583993304" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Portfolio</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Web Development</a></li>
            <li><a href="/services">Mobile Applications</a></li>
            <li><a href="/services">AI & ML Solutions</a></li>
            <li><a href="/services">Cloud & DevOps</a></li>
            <li><a href="/services">Technology Consulting</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope" style={{ marginRight: "0.5rem", color: "#fbbf24" }}></i>
              <a href="mailto:info@codecortexdigital.com" style={{ color: "#94a3b8" }}>info@codecortexdigital.com</a>
            </p>
            <p>
              <i className="fas fa-phone" style={{ marginRight: "0.5rem", color: "#fbbf24" }}></i>
              <a href="tel:+923157227688" style={{ color: "#94a3b8" }}>+92 315 722 7688</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt" style={{ marginRight: "0.5rem", color: "#fbbf24" }}></i>
              <span style={{ color: "#94a3b8" }}>Attock, Pakistan</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Code Cortex (SMC-Pvt.) Ltd. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


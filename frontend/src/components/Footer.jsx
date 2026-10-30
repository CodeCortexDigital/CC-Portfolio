const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CODE CORTEX</h3>
          <p>AI-First Software Studio. Intelligent Products. Enterprise Platforms. Real AI.</p>
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
          <h4>Industries</h4>
          <ul>
            <li><a href="/services">Education</a></li>
            <li><a href="/services">Enterprise &amp; Services</a></li>
            <li><a href="/services">Retail</a></li>
            <li><a href="/services">Smart City &amp; Utilities</a></li>
            <li><a href="/services">Manufacturing</a></li>
            <li><a href="/services">Transport &amp; Mobility</a></li>
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
              <span style={{ color: "#94a3b8" }}>Islamabad, Pakistan</span>
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


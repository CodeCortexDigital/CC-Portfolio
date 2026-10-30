import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to start your next project? Let's discuss how we can help transform your ideas into reality.</p>
        </div>
      </div>

      <div className="contact-content-premium">
        <div className="contact-info-premium">
          <div className="contact-info-header">
            <h2>Let's Work Together</h2>
            <div className="contact-divider"></div>
            <p>
              We're always open to discussing new projects, creative ideas, or
              opportunities to be part of your digital transformation journey.
              Reach out to us and let's build something amazing together.
            </p>
          </div>

          <div className="contact-details-premium">
            <a href="mailto:info@codecortexdigital.com" className="contact-card-link">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-card-content">
                  <h3>Email Us</h3>
                  <span>info@codecortexdigital.com</span>
                </div>
              </div>
            </a>

            <a href="tel:+923157227688" className="contact-card-link">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-card-content">
                  <h3>Call Us</h3>
                  <span>+92 315 722 7688</span>
                </div>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-card-content">
                <h3>Location</h3>
                <span>Islamabad, Pakistan</span>
                <span className="contact-subtext">Serving Clients Worldwide</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-card-content">
                <h3>Business Hours</h3>
                <span>Monday - Saturday</span>
                <span className="contact-subtext">9:00 AM - 6:00 PM (PKT)</span>
              </div>
            </div>
          </div>

          <div className="contact-social-section">
            <h3>Follow Us</h3>
            <div className="contact-social-links">
              <a href="https://wa.me/923157227688" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@codecortexdigital.com" className="social-link email">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/code-cortex-a8188b379/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/codecortex" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper-premium">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
  
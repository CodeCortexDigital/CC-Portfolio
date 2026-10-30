import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission (you can integrate with email service later)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <form className="contact-form-premium" onSubmit={handleSubmit}>
      <div className="form-group-premium">
        <label htmlFor="name">
          <i className="fas fa-user"></i> Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group-premium">
        <label htmlFor="email">
          <i className="fas fa-envelope"></i> Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="form-group-premium">
        <label htmlFor="subject">
          <i className="fas fa-tag"></i> Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What is this regarding?"
        />
      </div>

      <div className="form-group-premium">
        <label htmlFor="message">
          <i className="fas fa-comment-alt"></i> Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Tell us about your project or inquiry..."
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="submit-btn-premium" 
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            <span>Sending...</span>
          </>
        ) : status === "success" ? (
          <>
            <i className="fas fa-check-circle"></i>
            <span>Message Sent!</span>
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane"></i>
            <span>Send Message</span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="success-message-premium">
          <i className="fas fa-check-circle"></i>
          <div>
            <strong>Thank you!</strong>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;


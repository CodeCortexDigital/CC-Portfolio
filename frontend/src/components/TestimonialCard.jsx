const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        {testimonial.image && (
          <img
            src={`http://localhost:5000${testimonial.image}`}
            alt={testimonial.name}
            className="testimonial-avatar"
            loading="lazy"
          />
        )}
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="testimonial-role">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </p>
        </div>
      </div>
      <div className="testimonial-rating">
        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <p className="testimonial-message">"{testimonial.message}"</p>
    </div>
  );
};

export default TestimonialCard;


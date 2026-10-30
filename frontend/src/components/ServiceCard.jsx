const ServiceCard = ({ service }) => {
  const features = service.features || [];
  
  return (
    <div className="service-card-premium fade-in">
      <div className="service-card-inner">
        <div className="service-header-section">
          <div className="service-title-section">
            <h3>
              <i className={service.icon || "fas fa-code"}></i>
              {service.title}
            </h3>
            {service.price && (
              <div className="service-price-inline">
                <span className="price-label">Starting from</span>
                <span className="price-value">{service.price}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="service-body-section">
          <p className="service-description-text">{service.description}</p>
          
          {features.length > 0 && (
            <div className="service-features-section">
              <div className="features-header">
                <i className="fas fa-list-check"></i>
                <span>What's Included</span>
              </div>
              <ul className="service-features-grid">
                {features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <div className="feature-check">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="service-footer-section">
          <button className="service-cta-button">
            <span>Get Started</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;


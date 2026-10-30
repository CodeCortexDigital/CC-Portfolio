const ProjectCard = ({ project }) => {
  // Get project image URL based on category (fallback)
  const getProjectImageUrl = () => {
    // Use Unsplash images based on project category
    if (project.category === "crm" || project.title?.toLowerCase().includes("crm")) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80";
    } else if (project.category === "ecommerce" || project.title?.toLowerCase().includes("e-commerce") || project.title?.toLowerCase().includes("shopping")) {
      return "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80";
    } else if (project.category === "inventory" || project.title?.toLowerCase().includes("inventory") || project.title?.toLowerCase().includes("management")) {
      return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80";
    } else if (project.category === "analytics" || project.title?.toLowerCase().includes("analytics") || project.title?.toLowerCase().includes("dashboard")) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80";
    }
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80";
  };

  // Get final image URL - handle both local and external URLs
  const getImageSrc = () => {
    if (!project.image) {
      return getProjectImageUrl();
    }
    // Illustrations that ship with the site
    if (project.image.startsWith('/project-images/')) {
      return project.image;
    }
    // Check if it's an external URL
    if (project.image.startsWith('http://') || project.image.startsWith('https://')) {
      return project.image;
    }
    // Local uploaded image
    return `http://localhost:5000${project.image}`;
  };

  // Tech tag color variations
  const getTechTagStyle = (index) => {
    const styles = [
      { background: "rgba(251, 191, 36, 0.15)", color: "#fbbf24", border: "1px solid rgba(251, 191, 36, 0.3)" }, // Gold
      { background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6", border: "1px solid rgba(59, 130, 246, 0.3)" }, // Blue
      { background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }, // Green
      { background: "rgba(239, 68, 68, 0.15)", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.3)" }, // Red
      { background: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6", border: "1px solid rgba(139, 92, 246, 0.3)" }, // Purple
    ];
    return styles[index % styles.length];
  };

  return (
    <div className="project-card-premium fade-in">
      <div className="project-image-container">
        <div className="project-image-overlay">
          <img
            src={getImageSrc()}
            alt={project.title}
            loading="lazy"
            className="project-image-main"
            onError={(e) => {
              // Fallback to category-based image if image fails to load
              e.target.src = getProjectImageUrl();
            }}
          />
          <div className="project-overlay-content">
            {(project.liveUrl || project.githubUrl) && (
              <div className="project-overlay-buttons">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="featured-badge-premium">
            <i className="fas fa-star"></i>
            <span>Featured</span>
          </div>
        )}
      </div>
      <div className="project-content-premium">
        <div className="project-header">
          <h3>{project.title}</h3>
          <div className="project-category-badge">
            {project.category || "Web App"}
          </div>
        </div>
        <p className="project-description-text">{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="technologies-container">
            <div className="tech-label">
              <i className="fas fa-code"></i> Technologies
            </div>
            <div className="tech-tags-grid">
              {project.technologies.map((tech, idx) => {
                const style = getTechTagStyle(idx);
                return (
                  <span
                    key={idx}
                    className="tech-tag-premium"
                    style={{
                      background: style.background,
                      color: style.color,
                      border: style.border
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        <div className="project-footer">
          {(project.liveUrl || project.githubUrl) && (
            <div className="project-action-buttons">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                  <i className="fas fa-external-link-alt"></i>
                  <span>View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                  <i className="fab fa-github"></i>
                  <span>Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


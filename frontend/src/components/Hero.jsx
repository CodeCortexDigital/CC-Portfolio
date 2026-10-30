import { useNavigate } from "react-router-dom";
import { heroStats } from "../data/content";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-badge">AI-First Software Studio</span>
        <h1>
          Intelligent Products.<br />
          <span className="highlight">Enterprise Platforms. Real AI.</span>
        </h1>
        <p>
          Ready-to-adapt products, proven in real workflows, built to be customised to your business.
        </p>
        <div className="hero-actions">
          <button onClick={() => navigate("/contact")} className="btn">
            <i className="fas fa-paper-plane"></i> Start Your Project
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/projects")}>
            <i className="fas fa-eye"></i> View Our Work
          </button>
        </div>
        <div className="hero-stats">
          {heroStats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Transform Your Vision Into<br />
          <span className="highlight">Digital Reality</span>
        </h1>
        <p>
          We architect and engineer cutting-edge software solutions that drive business growth, 
          enhance operational efficiency, and deliver exceptional user experiences.
        </p>
        <div className="hero-actions">
          <button onClick={() => navigate("/contact")} className="btn">
            <i className="fas fa-paper-plane"></i> Start Your Project
          </button>
          <button
            className="btn btn-outline"
            onClick={() => navigate("/projects")}
          >
            <i className="fas fa-eye"></i> View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import InfoGrid from "../components/InfoGrid";
import HowWeWork from "../components/HowWeWork";
import { whyUs, aiCapabilities, heroStats } from "../data/content";

function About() {
  return (
    <div className="about-page">
      <section id="about">
        <div className="section-title">
          <h2>About Code Cortex</h2>
          <p>AI-First Software Studio. Intelligent Products. Enterprise Platforms. Real AI.</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Code Cortex is an Islamabad-based software studio delivering AI-first solutions,
              enterprise software and digital transformation for clients worldwide. We pair deep
              technical expertise with business strategy to deliver measurable results.
            </p>
            <div className="hero-stats about-stats">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>Why Companies Choose Code Cortex</h2>
            <InfoGrid items={whyUs} />
          </div>

          <div className="about-section">
            <h2>AI Capabilities</h2>
            <p>Practical machine learning that solves business problems.</p>
            <InfoGrid items={aiCapabilities} />
          </div>

          <div className="about-section">
            <h2>How We Work With You</h2>
            <p>A low-risk path from idea to production.</p>
            <HowWeWork />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

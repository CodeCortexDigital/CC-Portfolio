import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import InfoGrid from "../components/InfoGrid";
import HowWeWork from "../components/HowWeWork";
import { whyUs, aiCapabilities } from "../data/content";
import { fetchServices, fetchProjects } from "../services/api";

const ServiceCard = lazy(() => import("../components/ServiceCard"));
const ProjectCard = lazy(() => import("../components/ProjectCard"));

function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const servicesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [servicesData, projectsData] = await Promise.all([
          fetchServices(),
          fetchProjects(),
        ]);
        setServices(servicesData.slice(0, 6));
        setProjects(projectsData.slice(0, 3));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);

  const scrollServices = (direction) => {
    if (servicesScrollRef.current) {
      const scrollAmount = 400;
      servicesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollProjects = (direction) => {
    if (projectsScrollRef.current) {
      const scrollAmount = 400;
      projectsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page">
      <Hero />

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Solutions for Your Industry</h2>
            <p>Ready-to-adapt products, proven in real workflows, built to be customised to your business.</p>
          </div>
          <div className="horizontal-scroll-wrapper">
            <button 
              className="scroll-arrow scroll-arrow-left" 
              onClick={() => scrollServices('left')}
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="horizontal-scroll-container" ref={servicesScrollRef}>
              <div className="horizontal-scroll-content">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                  {services.length > 0 ? (
                    services.map((service) => (
                      <ServiceCard key={service._id} service={service} />
                    ))
                  ) : (
                    <div className="empty-state">
                      <p>Solutions coming soon...</p>
                    </div>
                  )}
                </Suspense>
              </div>
            </div>
            <button 
              className="scroll-arrow scroll-arrow-right" 
              onClick={() => scrollServices('right')}
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="section-cta">
            <button onClick={() => navigate("/services")} className="btn-primary">
              View All Industries
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
            <p>Built in-house, proven in real workflows.</p>
          </div>
          <div className="horizontal-scroll-wrapper">
            <button 
              className="scroll-arrow scroll-arrow-left" 
              onClick={() => scrollProjects('left')}
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="horizontal-scroll-container" ref={projectsScrollRef}>
              <div className="horizontal-scroll-content">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <ProjectCard key={project._id} project={project} />
                    ))
                  ) : (
                    <div className="empty-state">
                      <p>Projects coming soon...</p>
                    </div>
                  )}
                </Suspense>
              </div>
            </div>
            <button 
              className="scroll-arrow scroll-arrow-right" 
              onClick={() => scrollProjects('right')}
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="section-cta">
            <button onClick={() => navigate("/projects")} className="btn-primary">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Code Cortex */}
      <section className="why-choose-us" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Why Companies Choose Code Cortex</h2>
          </div>
          <InfoGrid items={whyUs} />
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="ai-capabilities">
        <div className="container">
          <div className="section-title">
            <h2>AI Capabilities</h2>
            <p>Practical machine learning that solves business problems.</p>
          </div>
          <InfoGrid items={aiCapabilities} />
        </div>
      </section>

      {/* How We Work With You */}
      <section className="how-we-work">
        <div className="container">
          <div className="section-title">
            <h2>How We Work With You</h2>
            <p>A low-risk path from idea to production.</p>
          </div>
          <HowWeWork />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Intelligent</h2>
            <p>info@codecortexdigital.com · +92 315 722 7688 · Islamabad, Pakistan</p>
            <button onClick={() => navigate("/contact")} className="btn-primary-large">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

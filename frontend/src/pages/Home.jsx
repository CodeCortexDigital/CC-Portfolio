import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
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
            <h2>Our Core Services</h2>
            <p>Comprehensive software development solutions tailored to your business needs</p>
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
                      <p>Services coming soon...</p>
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
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-preview">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>A glimpse into our successful software implementations</p>
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

      {/* Why Choose Us Section */}
      <section className="why-choose-us" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What sets us apart from the competition</p>
          </div>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop&q=80" alt="Fast Delivery" />
              </div>
              <h3>Fast Delivery</h3>
              <p>We deliver projects on time without compromising quality</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop&q=80" alt="Innovative Solutions" />
              </div>
              <h3>Innovative Solutions</h3>
              <p>Cutting-edge technology and creative problem-solving</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&q=80" alt="Client Focused" />
              </div>
              <h3>Client Focused</h3>
              <p>Your success is our priority - we work closely with you</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop&q=80" alt="Secure & Reliable" />
              </div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&q=80" alt="Expert Team" />
              </div>
              <h3>Expert Team</h3>
              <p>Experienced developers and designers at your service</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop&q=80" alt="Scalable Solutions" />
              </div>
              <h3>Scalable Solutions</h3>
              <p>Build for growth - solutions that scale with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
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

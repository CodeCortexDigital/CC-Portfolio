import { useEffect, useState, lazy, Suspense } from "react";
import { fetchTestimonials } from "../services/api";

const TestimonialCard = lazy(() => import("../components/TestimonialCard"));

function About() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTestimonials();
  }, []);

    return (
    <div className="about-page">
      <section id="about">
        <div className="section-title">
          <h2>About Code Cortex</h2>
          <p>Driving digital transformation through innovative technology solutions</p>
        </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            TechSolutions is a leading digital solutions company specializing in web development, 
            mobile applications, and digital transformation services. With over 10 years of experience, 
            we have helped hundreds of businesses achieve their digital goals through innovative 
            technology solutions.
          </p>
          <p>
            Our team of expert developers, designers, and strategists work together to deliver 
            cutting-edge solutions that drive business growth and success. We combine technical 
            expertise with creative thinking to solve complex challenges and deliver exceptional results.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower businesses with innovative digital solutions that transform their operations, 
            enhance customer experiences, and drive sustainable growth in the digital age.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We stay ahead of the curve with the latest technologies and methodologies</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>We never compromise on quality and deliver excellence in every project</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical business practices</p>
            </div>
            <div className="value-item">
              <h3>Client Success</h3>
              <p>Your success is our success - we're committed to your growth</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Web Development</h3>
              <p>React, Node.js, Express, MongoDB, REST APIs, Full-Stack Solutions</p>
            </div>
            <div className="skill-item">
              <h3>Mobile Development</h3>
              <p>React Native, iOS, Android, Cross-platform Applications</p>
            </div>
            <div className="skill-item">
              <h3>UI/UX Design</h3>
              <p>User-Centered Design, Prototyping, Responsive Design, Design Systems</p>
            </div>
            <div className="skill-item">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Azure, Docker, CI/CD, Infrastructure as Code</p>
            </div>
            <div className="skill-item">
              <h3>Digital Marketing</h3>
              <p>SEO, SEM, Social Media Marketing, Content Strategy</p>
            </div>
            <div className="skill-item">
              <h3>Consulting</h3>
              <p>Digital Strategy, Technology Consulting, Business Analysis</p>
            </div>
          </div>
        </div>

        {testimonials.length > 0 && (
          <div className="about-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <Suspense fallback={<div className="loading">Loading...</div>}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial._id} testimonial={testimonial} />
                ))}
              </Suspense>
            </div>
          </div>
        )}

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a diverse team of passionate professionals dedicated to delivering exceptional 
            results. Our team includes experienced developers, creative designers, strategic 
            consultants, and project managers who work collaboratively to bring your vision to life.
          </p>
        </div>
      </div>
      </section>
    </div>
  );
}

export default About;
  
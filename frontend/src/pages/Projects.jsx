import { useEffect, useState, lazy, Suspense } from "react";
import { fetchProjects } from "../services/api";

const ProjectCard = lazy(() => import("../components/ProjectCard"));

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="projects-page">
      <section id="portfolio">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>A glimpse into our successful software implementations</p>
        </div>

        {loading ? (
          <div className="loading">
            <span>Loading projects...</span>
          </div>
        ) : (
          <div className="portfolio-grid">
            <Suspense fallback={<div className="loading">Loading...</div>}>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))
              ) : (
                <div className="empty-state">
                  <p>No projects found. Check back soon!</p>
                </div>
              )}
            </Suspense>
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;

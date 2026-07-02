import { projects } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Projects.css";

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="projects" id="projects">
      <div className="projects-inner" ref={ref}>
        <div className={`projects-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">🚀 Featured Work</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Applications built with passion — from AI-powered platforms to mobile health apps and web tools.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-card-image-overlay"></div>
              </div>
              <div className="project-card-body">
                <p className="project-card-subtitle">{project.subtitle}</p>
                <h3 className="project-card-name">{project.name}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-tech-tags">
                  {project.tech.map((t) => (
                    <span className="project-tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

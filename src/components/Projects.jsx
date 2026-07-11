import { projects } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Projects.css";

const GithubIcon = ({ size = 18 }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

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
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  onError={(e) => {
                    if (!e.target.dataset.triedPng) {
                      e.target.dataset.triedPng = "true";
                      e.target.src = `${import.meta.env.BASE_URL}project_photos/${project.name}.png`;
                    } else if (!e.target.dataset.triedJpg) {
                      e.target.dataset.triedJpg = "true";
                      e.target.src = `${import.meta.env.BASE_URL}project_photos/${project.name}.jpg`;
                    }
                  }}
                />
                <div className="project-card-image-overlay"></div>
              </div>
              <div className="project-card-body">
                <p className="project-card-subtitle">{project.subtitle}</p>
                <div className="project-card-header-row">
                  <h3 className="project-card-name">{project.name}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                </div>
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

import { projects } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import "./Testimonials.css";

const projectHighlights = [
  {
    ...projects[0],
    highlights: [
      "Full-stack AI application with real-time processing",
      "Integrated chatbot with natural language understanding",
      "Quiz generation engine for interactive learning",
    ],
  },
  {
    ...projects[1],
    highlights: [
      "Multi-screen Android app with Java & SQLite",
      "Secure authentication and profile management",
      "Prescription generation with structured database",
    ],
  },
  {
    ...projects[2],
    highlights: [
      "Flask backend with multi-format image support",
      "Real-time before/after preview comparison",
      "Responsive design for all device sizes",
    ],
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner" ref={ref}>
        <div className={`testimonials-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">💡 Project Deep Dive</span>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-subtitle">
            A closer look at each project — the challenges, solutions, and technical highlights.
          </p>
        </div>

        <div className="testimonials-grid">
          {projectHighlights.map((project, index) => (
            <div
              className={`testimonial-card animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="testimonial-image">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-quote-icon">&ldquo;</div>
                <h3 className="testimonial-project-name">{project.name}</h3>
                <p className="testimonial-project-type">{project.subtitle}</p>
                <p className="testimonial-text">{project.description}</p>
                <div className="testimonial-highlights">
                  {project.highlights.map((hl, i) => (
                    <div className="testimonial-highlight" key={i}>
                      <CheckCircle2
                        size={16}
                        className="testimonial-highlight-icon"
                      />
                      <span>{hl}</span>
                    </div>
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

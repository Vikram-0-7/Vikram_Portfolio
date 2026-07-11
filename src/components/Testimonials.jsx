import { useState, useEffect } from "react";
import { projects } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

const GithubIcon = ({ size = 20 }) => (
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

const getProjectByName = (name) => projects.find(p => p.name === name) || {};

const projectHighlights = [
  {
    ...getProjectByName("DocMind AI"),
    highlights: [
      "Full-stack AI application with real-time processing",
      "Integrated chatbot with natural language understanding",
      "Quiz generation engine for interactive learning",
    ],
  },
  {
    ...getProjectByName("SchemesMadeSimple"),
    highlights: [
      "Live web scraping and intelligent info extraction",
      "Personalized recommendations for welfare schemes",
      "Conversational AI legal & scheme assistant",
    ],
  },
  {
    ...getProjectByName("Automated Exam Management System"),
    highlights: [
      "Automated seating allocation preventing conflicts",
      "QR-code based identity verification for exams",
      "Real-time seating info for students & admins",
    ],
  },
  {
    ...getProjectByName("AI Image Generation SaaS"),
    highlights: [
      "Text-to-image conversion using ClipDrop API",
      "Secure user authentication and image history",
      "Scalable Node.js / Express backend with MongoDB",
    ],
  },
  {
    ...getProjectByName("GIF Maker Studio"),
    highlights: [
      "High-performance video-to-GIF processing",
      "AI-powered background removal for animations",
      "FFmpeg and Sharp integration for optimization",
    ],
  },
  {
    ...getProjectByName("Government Problem Finder"),
    highlights: [
      "Concurrent web scraping of government portals",
      "Local RAG pipeline for civic issue extraction",
      "Semantic ranking and structured LLM analysis",
    ],
  },
  {
    ...getProjectByName("StudyMate Pro"),
    highlights: [
      "AI learning assistant with note summarization",
      "Streamlit frontend integrated with Hugging Face APIs",
      "Dynamic quiz generation engine",
    ],
  },
  {
    ...getProjectByName("Medicare App"),
    highlights: [
      "Multi-screen Android app with Java & SQLite",
      "Secure authentication and profile management",
      "Prescription generation with structured database",
    ],
  },
  {
    ...getProjectByName("Image Compressor"),
    highlights: [
      "Flask backend with multi-format image support",
      "Real-time before/after preview comparison",
      "Responsive design for all device sizes",
    ],
  },
].filter(p => p.name);

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (projectHighlights.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectHighlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectHighlights.length) % projectHighlights.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectHighlights.length);
  };

  if (projectHighlights.length === 0) return null;

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

        <div className="testimonials-slider-container">
          <div className="testimonials-grid">
            {projectHighlights.map((project, index) => (
              <div
                className={`testimonial-card slider-card ${index === activeIndex ? "active" : ""}`}
                key={index}
              >
                <div className="testimonial-image">
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
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-quote-icon">&ldquo;</div>
                  <div className="testimonial-project-header-row">
                    <h3 className="testimonial-project-name">{project.name}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                  </div>
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

          <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">
            <ChevronRight size={24} />
          </button>

          <div className="slider-dots-container">
            <div className="slider-dots-pill">
              {projectHighlights.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  className={`slider-dot ${dotIndex === activeIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

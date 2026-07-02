import { experience } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Experience.css";

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="experience" id="experience">
      <div className="experience-inner" ref={ref}>
        <div className={`experience-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">💼 Work Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Real-world experience building AI systems and machine learning solutions.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div
              className={`experience-item animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="experience-dot"></div>
              <div className="experience-card">
                <div className="experience-header-row">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <div className="experience-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <p className="experience-bullet" key={i}>
                      {bullet}
                    </p>
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

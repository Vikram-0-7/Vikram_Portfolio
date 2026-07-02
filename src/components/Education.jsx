import { education } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GraduationCap, BookOpen, School } from "lucide-react";
import "./Education.css";

const icons = [
  <GraduationCap size={24} key="grad" />,
  <BookOpen size={24} key="book" />,
  <School size={24} key="school" />,
];

export default function Education() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="education" id="education">
      <div className="education-inner" ref={ref}>
        <div className={`education-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">🎓 Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            A strong academic foundation with consistently excellent performance.
          </p>
        </div>

        <div className="education-cards">
          {education.map((edu, index) => (
            <div
              className={`education-card animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="education-icon">{icons[index]}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              {edu.institution && (
                <p className="education-institution">{edu.institution}</p>
              )}
              <div className="education-meta">
                {edu.period && (
                  <span className="education-period-tag">{edu.period}</span>
                )}
                <span className="education-grade-tag">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

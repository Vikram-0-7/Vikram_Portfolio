import { skills } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Code2, Brain, Wrench, Database, Cpu } from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={22} />,
    items: skills.languages,
  },
  {
    title: "Full-Stack Development",
    icon: <Cpu size={22} />,
    items: skills.fullStack,
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={22} />,
    items: skills.aiMl,
  },
  {
    title: "AI Tools & Automation",
    icon: <Wrench size={22} />,
    items: skills.aiTools,
  },
  {
    title: "Databases & Tools",
    icon: <Database size={22} />,
    items: skills.databases,
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="skills" id="skills">
      <div className="skills-inner" ref={ref}>
        <div className={`skills-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">⚡ Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning from core programming to cutting-edge AI frameworks.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div
              className={`skill-category animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

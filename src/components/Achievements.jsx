import { achievements } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Trophy, Award } from "lucide-react";
import "./Achievements.css";

const iconMap = {
  trophy: <Trophy size={28} />,
  award: <Award size={28} />,
};

export default function Achievements() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-inner" ref={ref}>
        <div className={`achievements-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">🏆 Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Milestones and recognitions that mark the journey.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <div
              className={`achievement-card ${ach.highlight ? "highlight" : "normal"} animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="achievement-icon">{iconMap[ach.icon]}</div>
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-description">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

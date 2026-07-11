import { certifications } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Database, Globe, Monitor, Award } from "lucide-react";
import "./Certifications.css";

const iconMap = {
  database: <Database size={24} />,
  globe: <Globe size={24} />,
  monitor: <Monitor size={24} />,
  AI: <Award size={24} />,
};

export default function Certifications() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-inner" ref={ref}>
        <div className={`certifications-header animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <span className="section-badge">📜 Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications validating expertise in databases, web development, and graphics.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              className={`cert-card animate-on-scroll delay-${index + 1} ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <div className="cert-icon">{iconMap[cert.icon] || <Award size={24} />}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

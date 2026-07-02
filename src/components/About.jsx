import { personalInfo, summary } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./About.css";

const stats = [
  { number: "2+", label: "Internships" },
  { number: "3+", label: "Projects Built" },
  { number: "9.04", label: "CGPA" },
  { number: "100+", label: "Github contributions" },
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="about" id="about">
      <div
        className={`about-inner animate-on-scroll ${isVisible ? "visible" : ""}`}
        ref={ref}
      >
        <div className="about-image-wrapper">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="about-image"
          />
          <div className="about-image-decoration"></div>
        </div>

        <div className="about-content">
          <span className="section-badge">✦ About Me</span>
          <h2 className="section-title">
            Passionate Developer & AI Enthusiast
          </h2>
          <p className="about-text">{summary}</p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="about-stat" key={index}>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

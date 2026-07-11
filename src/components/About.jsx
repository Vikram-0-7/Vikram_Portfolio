import { personalInfo, summary } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Download } from "lucide-react";
import "./About.css";

const stats = [
  { number: "2", label: "Internships" },
  { number: "10+", label: "Projects Built" },
  // { number: "9.04", label: "CGPA" },
  //  { number: "5+", label: "AI web apps Built " },
  { number: "250+", label: "Github contributions" },
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="about" id="about">
      <div
        className={`about-inner animate-on-scroll ${isVisible ? "visible" : ""}`}
        ref={ref}
      >


        <div className="about-content">
          <span className="section-badge">✦ About Me</span>
          <p className="about-greeting">
          </p>

          <h2 className="section-title about-title">
            Hi, I'm Vikram Thatikonda
          </h2>
          <p className="about-text">{summary}</p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="about-stat" key={index}>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}vikram_resume_777.pdf`}
              download="Vikram_Thatikonda_Resume.pdf"
              className="about-stat resume-download-card"
            >
              <div className="about-stat-number" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Resume <Download size={22} style={{ strokeWidth: 2.5 }} />
              </div>
              <div className="about-stat-label">Download PDF</div>
            </a>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="about-image"
          />
          <div className="about-image-decoration"></div>
        </div>
      </div>
    </section>
  );
}

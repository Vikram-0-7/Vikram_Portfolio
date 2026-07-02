import { Sparkles, Download } from "lucide-react";
import { skillCards, personalInfo } from "../data/resumeData";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* <div className="hero-badge">
        <Sparkles size={16} />
        <span></span>
      </div> */}

      <h1 className="hero-heading">
  Hello, I'm Vikram 👋
  <br />
  Aspiring AI Engineer &
  <br />
  Full-Stack Developer
</h1>

      <p className="hero-subtitle">
        I build AI-powered web applications, scalable backend systems,
        and machine learning solutions using modern technologies.
        Passionate about solving real-world problems through software
        engineering and artificial intelligence.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">
          Explore Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="btn-secondary"
        >
          <Download size={18} />
          Resume
        </a>
      </div>

      <div className="hero-stats">
        
      </div>

      <div className="hero-cards">
        {skillCards.map((card, index) => (
          <div className="hero-card" key={index}>
            <img
              src={card.image}
              alt={card.title}
              loading="eager"
            />

            <div className="hero-card-overlay">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
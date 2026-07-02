import { useState } from "react";
import { personalInfo } from "../data/resumeData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}

${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner" ref={ref}>
        <div
          className={`contact-header animate-on-scroll ${
            isVisible ? "visible" : ""
          }`}
        >
          <span className="section-badge">📬 Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project idea or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <form
          className={`contact-form animate-on-scroll delay-1 ${
            isVisible ? "visible" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <div className="contact-field">
              <label className="contact-label" htmlFor="name">
                Name
              </label>
              <input
                className="contact-input"
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="email">
                Email
              </label>
              <input
                className="contact-input"
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="subject">
              Subject
            </label>
            <input
              className="contact-input"
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="contact-textarea"
              id="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary contact-submit">
            Send Message
          </button>
        </form>

        <div
          className={`contact-info animate-on-scroll delay-2 ${
            isVisible ? "visible" : ""
          }`}
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
          >
            <div className="contact-info-icon">
              <MdEmail size={20} />
            </div>
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="contact-info-item"
          >
            <div className="contact-info-icon">
              <Phone size={18} />
            </div>
            <span>{personalInfo.phone}</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
          >
            <div className="contact-info-icon">
              <FaLinkedin size={20} />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
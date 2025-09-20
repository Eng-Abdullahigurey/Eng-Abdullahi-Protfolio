import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaFileDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Heading */}
      <h2 className="contact-heading">
        Contact <span>Me</span>
      </h2>
      <p className="contact-subtitle">
        I’d love to hear from you! Whether you have a project in mind, a
        question, or just want to connect — feel free to reach out ✨
      </p>

      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>engabdullahi1313@example.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+252 61 3198195</span>
          </div>
          <div className="info-item">
            <FaWhatsapp className="icon whatsapp" />
            <a
              href="https://wa.me/252613198195"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Mogadishu, Somalia</span>
          </div>

          {/* Resume Button */}
          <div className="resume-download">
            <a href="Eng Abdullahi.pdf" download className="btn resume-btn">
              <FaFileDownload /> Download Resume
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/Eng-Abdullahi"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Eng-Abdullahigurey"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/UpdullahiGurrey"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

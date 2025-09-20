import React from "react";
import { FaReact, FaPython, FaCode, FaDatabase } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="services-heading">
        My <span>Services</span>
      </h2>
      <p className="services-subtitle">
        As a passionate <strong>Software Engineering student</strong> and{" "}
        <strong>Full-Stack Developer</strong>, I provide end-to-end software
        solutions that combine clean code, modern technologies, and user-focused
        design to deliver impactful digital products.
      </p>

      <div className="services-container">
        {/* Web Development */}
        <div className="service-box">
          <FaReact className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Designing and building modern, responsive, and high-performing web
            applications using <strong>React.js, JavaScript, HTML,</strong> and{" "}
            <strong>CSS</strong>. My goal is to create seamless user experiences
            while ensuring scalability and performance.
          </p>
        </div>

        {/* Software Engineering Solutions */}
        <div className="service-box">
          <FaPython className="service-icon" />
          <h3>Software Engineering Solutions</h3>
          <p>
            Developing reliable and efficient software systems with{" "}
            <strong>Python</strong> and backend technologies. From automation
            tools to full applications, I focus on writing clean, maintainable,
            and scalable code that solves real-world problems.
          </p>
        </div>

        {/* Frontend Design & UI/UX */}
        <div className="service-box">
          <FaCode className="service-icon" />
          <h3>Frontend Design & UI/UX</h3>
          <p>
            Creating user-friendly interfaces with a focus on{" "}
            <strong>UI/UX design</strong>. I blend creativity with engineering
            principles to deliver visually appealing and intuitive digital
            experiences.
          </p>
        </div>

        {/* Database & Data Management */}
        <div className="service-box">
          <FaDatabase className="service-icon" />
          <h3>Database & Data Management</h3>
          <p>
            Designing and managing <strong>databases</strong> to support
            data-driven applications. I focus on building secure, optimized, and
            scalable database solutions that ensure business reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

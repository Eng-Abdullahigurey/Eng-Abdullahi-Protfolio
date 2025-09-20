import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span>Eng Abdullahi</span>
        </h1>
        <h2>Software Engineer & Full-Stack Developer</h2>
        <p>
          I specialize in building modern, scalable, and user-friendly web applications.  
          With experience in <strong>React, JavaScript, Python, and backend systems</strong>,  
          I turn ideas into high-quality digital products 🚀.
        </p>

        <div className="hero-buttons">
          {/* ✅ Resume Download Button */}
          <a 
            href="/Eng Abdullahi.pdf" 
            download="Eng Abdullahi.pdf" 
            className="btn"
          >
            📄 Download Resume
          </a>

          {/* Contact / Hire Me */}
          <a href="#contact" className="btn-outline">🤝 Hire Me</a>
        </div>
      </div>

      <div className="hero-image">
        {/* Add your picture or illustration here */}
        <img src="abdullahi.jpg" alt="Eng Abdullahi" />
      </div>
    </section>
  )
}

export default Hero

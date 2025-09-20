import React from "react";
// Import local images
import portfolioImg from "../assets/portfolio.png";
import financeImg from "../assets/Finance.png";
import ecommerceImg from "../assets/ecommerce.jpg";

const Projects = () => {
  const projectList = [
    {
      img: portfolioImg,
      title: "Portfolio Website",
      desc: "A personal portfolio built with React.js to showcase my skills, services, and projects. Designed with a modern and responsive UI for all devices.",
      demoLink: "https://codewithabdalla.netlify.app", // 🔗 Live demo link
      githubLink: "https://github.com/Eng-Abdullahigurey/portfolio", // 🔗 GitHub repo
    },
    {
      img: financeImg,
      title: "Finance Tracker",
      desc: "A web app that helps users manage daily income and expenses. Built with React.js and Firebase, featuring authentication and real-time database storage.",
      demoLink: "https://your-finance-tracker-demo.com", // 🔗 Live demo
      githubLink: "https://github.com/Eng-Abdullahigurey/finance-tracker", // 🔗 GitHub repo
    },
    {
      img: ecommerceImg,
      title: "E-commerce Store",
      desc: "An online shopping platform with user authentication, shopping cart, and checkout system. Developed using React.js, Node.js, and MongoDB.",
      demoLink: "https://your-ecommerce-demo.com", // 🔗 Live demo
      githubLink: "https://github.com/Eng-Abdullahigurey/ecommerce-store", // 🔗 GitHub repo
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">
        My <span>Projects</span>
      </h2>
      <p className="projects-subtitle">
        A selection of projects that highlight my expertise in{" "}
        <strong>web development</strong>, <strong>frontend design</strong>, and{" "}
        <strong>software engineering</strong>.
      </p>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn demo"
              >
                🔗 Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github"
              >
                📂 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

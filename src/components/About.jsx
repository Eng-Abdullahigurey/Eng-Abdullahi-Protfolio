import profile_img from "../assets/logo.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// ✅ Import icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { name: "HTML", width: "95%", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS", width: "95%", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "JavaScript", width: "75%", icon: <FaJs className="skill-icon js" /> },
    { name: "React.js", width: "95%", icon: <FaReact className="skill-icon react" /> },
    { name: "Python", width: "95%", icon: <FaPython className="skill-icon python" /> },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <h1 className="about-heading">
        About <span>Me</span>
      </h1>

      <div className="about-content">
        {/* Left Side (Profile Image) */}
        <div className="about-left">
          <img src={profile_img} alt="Eng Abdullahi" />
        </div>

        {/* Right Side (Bio + Skills + Stats) */}
        <div className="about-right">
          <p>
            Hi, I’m <strong>Eng Abdullahi</strong>, a dedicated{" "}
            <strong>Software Engineering student</strong> and{" "}
            <strong>Full-Stack Developer</strong> with a strong passion for
            transforming ideas into real-world digital solutions.
            <br /> <br />
            I specialize in building{" "}
            <em>modern, scalable, and user-friendly applications</em> using
            technologies like <strong>React.js, JavaScript, Python,</strong> and
            backend systems. My focus is on writing clean, efficient code while
            always keeping design and user experience at the core of every
            project.
            <br /> <br />
            Beyond coding, I’m a strong believer in{" "}
            <strong>teamwork, problem-solving, and continuous learning</strong>.
            My ultimate goal is to grow into a versatile engineer capable of
            delivering innovative and impactful software solutions 🚀.
          </p>

          {/* Skills with Animated Progress Bars + Icons */}
          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-header">
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
                <div className="bar">
                  <div
                    className={`progress ${inView ? "animate" : ""}`}
                    style={{ "--target-width": skill.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats with CountUp + Icons */}
          <div className="about-stats">
            <div className="stat">
              <FaProjectDiagram className="stat-icon" />
              <h2>{inView && <CountUp start={0} end={10} duration={2} />}+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <MdOutlineWork className="stat-icon" />
              <h2>{inView && <CountUp start={0} end={3} duration={2} />}+</h2>
              <p>Years of Coding Experience</p>
            </div>
            <div className="stat">
              <GiTechnoHeart className="stat-icon" />
              <h2>{inView && <CountUp start={0} end={5} duration={2} />}+</h2>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect } from "react";
import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaJava,
  FaAws,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const skills = [
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 
          className="text-center mb-5 text-white"
          data-aos="fade-up"
        >
          My Skills
        </h2>

        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="icon">{skill.icon}</div>
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
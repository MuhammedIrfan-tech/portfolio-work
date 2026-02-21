import React, { useEffect } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="about-section">
      <div className="container">

        <div className="about-wrapper text-center">

          <h2 
            className="about-title"
            data-aos="fade-up"
          >
            About Me
          </h2>

          <p 
            className="about-summary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am a <span>Full Stack Developer</span> passionate about building 
            scalable, high-performance web applications using modern technologies. 
            I specialize in creating clean UI experiences and efficient backend systems 
            that solve real-world problems.
          </p>

          <div 
            className="about-highlights"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="highlight">Frontend Development</div>
            <div className="highlight">Backend & API Development</div>
            <div className="highlight">Database & Cloud (AWS)</div>
            <div className="highlight">Problem Solving & Optimization</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
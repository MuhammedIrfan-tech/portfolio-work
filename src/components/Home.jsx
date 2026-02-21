import React from "react";
import "../styles/home.css";
import image from '../assets/profilepic.jpg';
const Home = () => {
  return (
     <section className="home">
      <div className="home-container">

        {/* Left Side Content */}
        <div 
          className="home-content"
          data-aos="fade-right"
        >
          <h1 className="username">Awin Sethu</h1>
          <h2 className="profession">Full Stack Developer</h2>
          <p className="caption">
            Crafting modern, scalable and user-friendly digital experiences
            with passion and precision.
          </p>
        </div>

        {/* Right Side Image */}
        <div 
          className="image-container"
          data-aos="zoom-in"
        >
          <img src={image} alt="John Doe" className="profile-image" />
        </div>

      </div>
    </section>
  );
};

export default Home;
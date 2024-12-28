import React from 'react';
import './Styles.css';  // Add this if you want to use specific CSS for this component
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Optional: for social icons if you prefer to use React icons

const About = () => {
  return (
    <div>

      {/* ===== ABOUT ===== */}
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="assets/img/about.png" alt="About" />
          </div>

          <div>
            <h2 className="about__subtitle">I am Marlon</h2>
            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
          </div>
        </div>
      </section>
    </div>
  )
}   
export default About;

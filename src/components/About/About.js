import React from 'react';
import './Styles.css';  // Add this if you want to use specific CSS for this component

const About = () => {
  return (
    <div>
      {/* ===== ABOUT ===== */}
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__text">
            <h2 className="about__subtitle">I am Sneha C Shaji</h2>
            <p className="about__description">
            I am Sneha C Shaji, a passionate individual with a background in Computer Science and Engineering.
             I have experience in sales, marketing automation, and project coordination, and I'm always looking for ways to combine technology with business.
             I'm excited to explore new opportunities and grow in the tech industry.
            </p>
          </div>

          <div className="timelines-container">
            {/* Experience Timeline */}
            <div className="timeline experience-timeline">
              <h3 className="timeline-title">Experience</h3>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <img src="\assets\img\Timeline Icon2.png" alt="Role 2" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-subtitle">International Sales Executive</h3>
                  <p className="timeline-date">Dec 2024 - Present</p>
                  <p className="timeline-description">Webdura Technologies</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                <img src="\assets\img\Timeline Icon2.png" alt="Role 1" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-subtitle">Business Development Executive</h3>
                  <p className="timeline-date">Nov 2023 - Nov 2024</p>
                  <p className="timeline-description">Softnotions Technologies</p>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="timeline education-timeline">
              <h3 className="timeline-title">Education</h3>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <img src="\assets\img\Timeline Icon1.png" alt="Graduation" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-subtitle">B.Tech in Computer Science and Engineering</h3>
                  <p className="timeline-date">2020 - 2024</p>
                  <p className="timeline-description">Jyothi Engineering College</p>
                </div>
              </div>

              {/* Add more education items here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

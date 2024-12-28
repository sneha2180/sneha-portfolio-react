import React from 'react';
import './Styles.css';  // Add this if you want to use specific CSS for this component

const Skills = () => {
  return (
    <div>
    {/* ===== SKILLS ===== */}
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-html5 skills__icon'></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">95%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-css3 skills__icon'></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-javascript skills__icon'></i>
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxs-paint skills__icon'></i>
              <span className="skills__name">UX/UI</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
        </div>

        <div>
          <img src="assets/img/work3.jpg" alt="Work" className="skills__img" />
        </div>
      </div>
    </section>
  </div>
  );
};

export default Skills;

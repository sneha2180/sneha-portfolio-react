import React from 'react';
import './Styles.css'; // Add this if you want to use specific CSS for this component
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Optional: for social icons if you prefer to use React icons

const Home = () => {
  return (
    <div>
      {/* ===== HOME ===== */}
      <section className="home bd-grid" id="home">
        {/* Image Section */}
        <div className="home__img">
          <svg
            className="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" maskType="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
              <image className="home__blob-img" x="50" y="60" href="assets/img/perfil.png" />
            </g>
          </svg>
        </div>

        {/* Data Section */}
        <div className="home__data">
          <h1 className="home__title">
            Navigating <span className="home__title-color"><br />Collaborations</span>
          </h1>
          <h3>Exploring business development strategies in the IT industry.</h3>
          <p>
            With a solid foundation in B2B sales, engagement automation, and account management, I bring a goal-oriented
            approach to exploring innovative technological solutions for marketing and business challenges. Proficient in
            leveraging tools like LinkedIn Sales Navigator, HubSpot, Salesforce, and AI, I excel in driving lead generation,
            optimizing campaigns, and delivering impactful results.
          </p>
          <br />
          <a
            href="https://calendly.com/snehacshaji202/collaboration_discussion"
            className="button"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="home__social">
          <a href="https://www.linkedin.com/in/sneha-c-shaji/" className="home__social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sneha2180" className="home__social-icon">
            <FaGithub size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

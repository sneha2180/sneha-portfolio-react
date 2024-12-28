import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Hide the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home'; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust offset for better highlight timing
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Sneha C Shaji</a>
        </div>

        <div className={`nav__menu ${menuVisible ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
              <li className="nav__item" key={section}>
                <a
                  href={`#${section}`}
                  className={`nav__link ${activeSection === section ? 'active-link' : ''}`}
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

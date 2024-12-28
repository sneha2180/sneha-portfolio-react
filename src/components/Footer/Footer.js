import React from 'react';
import './Footer.css'; // Add this file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Sneha C Shaji</p>
      <div className="footer__social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <p className="footer__copy">&#169; {new Date().getFullYear()} Sneha C Shaji. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

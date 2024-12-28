import React from 'react';
import './Styles.css'; // Add this file for custom styles

const Work = () => {
  // List of work images and their links
  const workItems = [
    { imgSrc: 'assets/img/work1.jpg', alt: 'Work 1', link: '#' },
    { imgSrc: 'assets/img/work2.jpg', alt: 'Work 2', link: '#' },
    { imgSrc: 'assets/img/work3.jpg', alt: 'Work 3', link: '#' },
    { imgSrc: 'assets/img/work4.jpg', alt: 'Work 4', link: '#' },
    { imgSrc: 'assets/img/work5.jpg', alt: 'Work 5', link: '#' },
    { imgSrc: 'assets/img/work6.jpg', alt: 'Work 6', link: '#' },
  ];

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        {workItems.map((item, index) => (
          <a href={item.link} className="work__img" key={index}>
            <img src={item.imgSrc} alt={item.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;

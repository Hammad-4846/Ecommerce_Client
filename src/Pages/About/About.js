import React from 'react';
import "./About.scss";
import aboutus from "../../Assets/Images/aboutus.png";
import { motion } from 'framer-motion';
import aboutBanner from "../../Assets/Images/all.png";
import arrow from "../../Assets/Images/carasole.png";
function About() {
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="about-us-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Think Food, Think us
          </motion.p>
        </div>
        <img src={aboutus} alt="Hero" />
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="section-title">
          <h2 className='best'>Why we are best?</h2>
          <h2 className='ncr'>BEST GLUTEN FREE PRODUCT IN DELHI-NCR</h2>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Posuere lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </section>

      {/* Our Story Section */}
      
      <div className="About__Banner">
        <div className="container about__banner flex__center">
          <div className="left">
            <div className="about__banner-info">
              <h3 className="ab-head-first">What Inspire us?</h3>
              <h2 className="ab-head-sec">Story behind <span style={{ fontWeight: 'bold' }}> Free Of Gluten </span></h2>
              <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Posuere lorem ipsum dolor sit amet consectetur adipiscing.
              </p>
              <button className="btn1"><img src={arrow} alt="" className='arrow'/> Story behind Free Of Gluten </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={aboutBanner} alt="banner" />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        <div className="section-title">
          <h2>Vision and Mission</h2>
        </div>
        <div className="vision-mission-content">
          <div className="vision">
            <h3>Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mission">
            <h3>Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-images">
          <img src="gallery-image-1.jpg" alt="Gallery 1" />
          <img src="gallery-image-2.jpg" alt="Gallery 2" />
          <img src="gallery-image-3.jpg" alt="Gallery 3" />
          <img src="gallery-image-4.jpg" alt="Gallery 4" />
          <img src="gallery-image-5.jpg" alt="Gallery 5" />
          <img src="gallery-image-6.jpg" alt="Gallery 6" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>
        <div className="team-members">
<div className="team-member">
<img src="team-member-1.jpg" alt="Team Member 1" />
<h4>John Doe</h4>
<p>CEO</p>
</div>
<div className="team-member">
<img src="team-member-2.jpg" alt="Team Member 2" />
<h4>Jane Smith</h4>
<p>COO</p>
</div>
<div className="team-member">
<img src="team-member-3.jpg" alt="Team Member 3" />
<h4>Mike Johnson</h4>
<p>CTO</p>
</div>
<div className="team-member">
<img src="team-member-4.jpg" alt="Team Member 4" />
<h4>Sarah Lee</h4>
<p>CFO</p>
</div>
</div>
</section>
</div>
);
}

export default About;
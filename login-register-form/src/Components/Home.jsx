import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import { FaInfoCircle, FaPhone, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <section className="one">
        <h1>Welcome to SuperTarpaulin</h1>
        <p>We warmly welcome you to our Tarpaulin System.</p>
        <p>Explore our high-quality tarpaulin products</p>
        <p>and create amazing designs for your events and businesses.</p>
        <p>We are here to assist you in making your vision come to life.</p>
        <p>Get started today and unleash your creativity!</p>
      </section>

      <section className="two">
        <div className="service-container">
          <h1 className="service-title">Our Services</h1>
          <div className="service-grid">
            <div className="service-card">
              <h2 className="service-subtitle">Custom Design Services</h2>
              <p className="service-description">Our team of experienced designers can help you create a unique design for your tarpaulin. Whether you need a logo, a custom graphic, or a specific color scheme, we can help you bring your vision to life.</p>
            </div>
            <div className="service-card">
              <h2 className="service-subtitle">Material Selection</h2>
              <p className="service-description">We offer a variety of high-quality materials to choose from, including PVC, PE, and canvas. Our team can help you select the best material for your needs, based on factors such as durability, weather resistance, and weight.</p>
            </div>
            <div className="service-card">
              <h2 className="service-subtitle">Printing Services</h2>
              <p className="service-description">We use state-of-the-art printing technology to ensure that your tarpaulin looks its best. Our printing services include full-color digital printing, screen printing, and vinyl lettering.</p>
            </div>
            <div className="service-card">
              <h2 className="service-subtitle">Finishing Services</h2>
              <p className="service-description">We offer a range of finishing options to give your tarpaulin a professional look and feel. Our finishing services include hemming, grommet installation, and reinforcement patches.</p>
            </div>
            <div className="service-card">
              <h2 className="service-subtitle">Fast and Reliable Shipping</h2>
              <p className="service-description">We understand that time is of the essence, which is why we offer fast and reliable shipping options. We work with trusted carriers to ensure that your tarpaulin is delivered to you on time and in perfect condition.</p>
            </div>
          </div>
          <p className="service-text">
            At our Tarpaulin Ordering System, we are committed to providing exceptional service and support. If you have any questions or concerns about our services, our friendly and knowledgeable team is always here to help.
          </p>
          <p className="service-text">
            Thank you for choosing our Tarpaulin Ordering System. We look forward to working with you!
          </p>
        </div>
      </section>
      <header>
        <div className="row">
          <div className="column">
            <p className="about-row"><FaInfoCircle /> About</p>
            <p className="phone"><FaPhone /> Phone: 0935 606 7435</p>
            <p className="hotline"><FaPhoneAlt /> Hotline: 043-774-0275</p>
            <p className="mail"><FaEnvelope /> Email: superprint_2015@yahoo.com</p>
          </div>
          <div className="about-container">
            <div className="social-media-bar">
              <span className="link">
                <a href="https://www.facebook.com/supertarpaulinprinting" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                  https://www.facebook.com/supertarpaulinprinting
                </a>
              </span>
              <span className="link">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                  https://www.twitter.com/supertarpaulinprinting
                </a>
              </span>
              <span className="link">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                  https://www.instagram.com/supertarpaulinprinting
                </a>
              </span>
            </div>
          </div>
          <div class="container-map">
            <iframe className="map"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.1525712759795!2d121.1445065!3d13.9409668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6cc720c6e69b%3A0x48e0366137214ce1!2sSuper%20Tarpaulin%20Printing%20Services!5e0!3m2!1sen!2s!4v1626170532513!5m2!1sen!2s"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
         <h3>&copy; {new Date().getFullYear()} Super Tarpaulin. All rights reserved.</h3>
      </header>
    </div>
  );
};

export default Home;

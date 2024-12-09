import React, { useState } from "react";
import "./footer.css"
import { Link } from "react-router-dom";

// import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const handleLanguageClick = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

  return (
    <footer className="netflix-footer">
      <div className="footer-top">
        <a className="contact-link">Questions? Call 1-800-123-4567</a>
      </div>
      <div className="footer-links">
        <ul className="footer-column">
          <li><Link to="/user-details">My Account</Link></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">Account</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
        <ul className="footer-column">
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

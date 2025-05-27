import React from 'react';
import './styles.scss';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h4>Jay Ajudiya</h4>
        <p>Java Developer | Passionate about Clean Code & Scalable Systems</p>
      </div>

      <div className="footer__right">
        <div className="footer__icons">
          <a href="https://github.com/Ajudiya-Jay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ajudiyajay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/jay__.5222" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Jay Ajudiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './styles.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__name">Jay Ajudiya</h3>
        <p className="footer__tagline">Java Developer | Passionate about Clean Code & Scalable Systems</p>

        <div className="footer__socials">
          <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jayajudiya23/" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>

        <p className="footer__copy">&copy; {new Date().getFullYear()} Jay Ajudiya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

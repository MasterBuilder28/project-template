import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.youtube.com/channel/UC_Pneeusj68jCBzTfT0sDeg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://discord.gg/nFS79GQMq6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">
        <img src="/poweredbygiphy.png" alt="giphy" />
      </a>
      <br />
      <a
        href="https://github.com/sudoalx"
        target="_blank"
        rel="noopener noreferrer"
        className="links"
      >
        Made by sudoalx
      </a>
    </footer>
  );
};

export default Footer;

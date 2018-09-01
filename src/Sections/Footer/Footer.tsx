import * as React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Designed in Figma. Built with React + TypeScript.  Copyright © {new Date().getFullYear()} Anthony Roberts.</p>
      <p>Proudly made in Melbourne 🇦🇺</p>
    </footer>
  );
}

export default Footer;
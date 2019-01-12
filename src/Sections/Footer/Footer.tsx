import * as React from 'react';
import './Footer.scss';

import siteContent from '../../site-content.json';

function Footer() {
  return (
    <footer>
      <p>Designed in Figma. Built with React + TypeScript + Code.</p>
      <p>Version {siteContent.metadata.version}, published {siteContent.metadata.lastUpdated}.</p>
      <p>Proudly made in Melbourne 🇦🇺</p>
    </footer>
  );
}

export default Footer;
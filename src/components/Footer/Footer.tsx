import styles from './Footer.module.scss';

import siteContent from '../../site-content.json';

export const Footer: React.FC = () => {
  return <footer className={styles.footer}>
    <p>Designed in Figma. Built with React + TypeScript + VS Code.</p>
    <p>Version {siteContent.metadata.version}, published {siteContent.metadata.lastUpdated}.</p>
    <p>Proudly made in Melbourne 🇦🇺</p>
  </footer>
}

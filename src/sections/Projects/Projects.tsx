import styles from './Projects.module.scss';
import { Header } from '../../components/Header/Header';
import { Project } from './Project/Project';

import siteContent from '../../site-content.json';

export const Projects: React.FC = () => {
  const projects = siteContent.projects.map((project, index) =>
    <Project projectData={project} key={index} />
  );

  return (
    <>
      <Header title="Projects" />
      <div className={styles.projectContainer}>
        {projects}
      </div>
    </>
  );
}
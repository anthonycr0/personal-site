import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../index.module.scss';

import siteContent from '../../../site-content.json';
import { ProjectData } from '../../../sections/Projects/types';

export default function PabloProjects() {
  const projects: ProjectData[] = siteContent.projects;

  useEffect(() => {
    console.log('updating');

    updateDimensions()

    return function removeEventListener() {
      console.log('removing');
      window.removeEventListener("resize", updateDimensions);
    }
  }, [])

  const renderedProjects = projects.map((project, index) => 
    <tr className={styles.largeText} key={index}>
      <td/>
      <td colSpan={3}><Link href={project.url}><a>{project.title}</a></Link></td>
    </tr>
  );

const renderWhitespace = () => {
  const elements = [];
  for(let i = 0; i < 9; i++) {
    elements.push(
      <tr className={styles.smallText} key={i}>
        <td>&nbsp;</td>
      </tr>
    );  
  }

  return elements;
}

  const updateDimensions = () => {
    if (document.documentElement.clientWidth >= 769) {
      const cover = document.getElementById('album-cover');
      if (cover) {
        const style = window.getComputedStyle(cover)
        const height = style.getPropertyValue('height');
        cover.style.width = height;
      }
    }
  }

  return (
    <div className={styles.pablo}>
      <div className={styles.background}>
        <div className={styles.albumCover} id="album-cover">
          <table className={styles.contentTable}>
            <tbody>
              <tr className={styles.largeText}>
                <td/>
                <td>Projects</td>
              </tr>
              <tr className={styles.largeText}>
                <td>&nbsp;</td>
              </tr>
              {renderedProjects}
              {renderWhitespace()}
              <tr className={styles.smallText}>
                <td colSpan={2}><Link href="/pablo"><a>Back</a></Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// class PabloProjects extends React.Component {
//   private projects: ProjectData[];

//   constructor(props: any) {
//     super(props);
//     this.projects = siteContent.projects;
//   }

//   public render() {
//     return (
//       <div className="pablo">
//         <div className="background">
//           <div className="album-cover" id="album-cover">
//             <table className="content-table">
//               <tbody>
//                 <tr className="large-text">
//                   <td/>
//                   <td>Projects</td>
//                 </tr>
//                 <tr className="large-text">
//                   <td>&nbsp;</td>
//                 </tr>
//                 {this.renderProjects()}
//                 {this.renderWhitespace()}
//                 <tr className="small-text">
//                   <td colSpan={2}><Link to="/pablo">Back</Link></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   public componentWillMount() {
//     this.updateDimensions();
//   }

//   public componentDidMount() {
//     this.updateDimensions();
//     window.addEventListener('resize', this.updateDimensions);
//   }

//   public componentWillUnmount() {
//     window.removeEventListener('resize', this.updateDimensions);
//   }

//   private updateDimensions() {
//     if (document.documentElement.clientWidth >= 769) {
//       const cover = document.getElementById('album-cover');
//       if (cover) {
//         const style = window.getComputedStyle(cover)
//         const height = style.getPropertyValue('height');
//         cover.style.width = height;
//       }
//     }
//   }

//   private renderProjects() {
//     return this.projects.map((project, index) => 
//       <tr className="large-text" key={index}>
//         <td/>
//         <td colSpan={3}><a href={project.url} target="_blank">{project.title}</a></td>
//       </tr>
//     );
//   }

//   private renderWhitespace() {
//     const elements = [];
//     for(let i = 0; i < 9; i++) {
//       elements.push(
//         <tr className="small-text" key={i}>
//           <td>&nbsp;</td>
//         </tr>
//       );  
//     }
  
//     return elements;
//   }
// }

// export default PabloProjects;
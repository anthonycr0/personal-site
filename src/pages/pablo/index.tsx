import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

import siteContent from "../../site-content.json";
import selfieImg from "../../../public/Images/projects/pablo/me.jpg";
import inNOutImg from "../../../public/Images/projects/pablo/in-n-out.jpg";

export default function Pablo() {
  useEffect(() => {
    console.log('updating');

    updateDimensions()

    return function removeEventListener() {
      console.log('removing');
      window.removeEventListener("resize", updateDimensions);
    }
  }, [])

  const updateDimensions = () => {
    if (document.documentElement.clientWidth >= 769) {
      const cover = document.getElementById("album-cover");
      if (cover) {
        const style = window.getComputedStyle(cover);
        const height = style.getPropertyValue("height");
        cover.style.width = height;
      }
    }
  }
  return (
    <div className={styles.pablo}>
      <div className={styles.background}>
        <div className={styles.albumCover} id="album-cover">
          <div className={`${styles.floatingImage} ${styles.pic1}`}>
            <Image className={styles.pic1} src={selfieImg} alt="A photo of Anthony" />
          </div>
          <div className={`${styles.floatingImage} ${styles.pic2}`}>
            <Image className={styles.pic2} src={inNOutImg} alt="A photo In-N-Out burger" />
          </div>
          <table className={styles.contentTable}>
            <tbody>
              <tr className={styles.largeText}>
                <td />
                <td>Anthony</td>
                <td className={styles.colSpace} />
                <td>Roberts</td>
              </tr>
              <tr className={styles.largeText}>
                <td>&nbsp;</td>
              </tr>
              <tr className={styles.largeText}>
                <td />
                <td colSpan={3}>Software Engineer</td>
              </tr>
              <tr className={styles.largeText}>
                <td />
                <td colSpan={3}>Software Engineer</td>
              </tr>
              <tr className={styles.largeText}>
                <td />
                <td colSpan={3}>Software Engineer</td>
              </tr>
              <tr className={styles.largeText}>
                <td />
                <td colSpan={3}>Software Engineer</td>
              </tr>
              <tr className={styles.largeText}>
                <td>&nbsp;</td>
              </tr>
              <tr className={styles.largeText}>
                <td />
                <td>About Me</td>
                <td colSpan={2}>Links</td>
              </tr>
              <tr className={styles.smallText}>
                <td />
                <td />
                <td>
                  <Link href="/pablo/projects"><a>Projects</a></Link>
                </td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>Foodie</td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>Photographer</td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>Skier</td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>Web / Mobile Dev</td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>UX Designer</td>
              </tr>
              <tr className={styles.smallText}>
                <td>&nbsp;</td>
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>Melbourne, AUS</td>
              </tr>
              <tr className={styles.smallText}>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr className={styles.smallText}>
                <td colSpan={2}>
                  <Link href="/"><a>← Home</a></Link>
                </td>
                <td />
                <td>
                  <a href={siteContent.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//   public componentWillMount() {
//   this.updateDimensions();
// }

//   public componentDidMount() {
//   this.updateDimensions();
//   window.addEventListener("resize", this.updateDimensions);
// }

//   public componentWillUnmount() {
//   window.removeEventListener("resize", this.updateDimensions);
// }

//   private updateDimensions() {
//   if (document.documentElement.clientWidth >= 769) {
//     const cover = document.getElementById("album-cover");
//     if (cover) {
//       const style = window.getComputedStyle(cover);
//       const height = style.getPropertyValue("height");
//       cover.style.width = height;
//     }
//   }
// }

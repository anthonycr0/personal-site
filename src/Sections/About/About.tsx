import Image from 'next/image';
import styles from './About.module.scss';
import { Heading } from '../../components/Typography/Heading';
import profileImg from '../../../public/Images/profile-photo-400.jpeg';

export const About: React.FC = () => {
  return <div className={styles.container}>
    <div className={styles.profilePicContainer}>
      <Image src={profileImg} alt="Photo of Anthony" className={styles.profilePic} />
    </div>
    <div className={styles.aboutContent}>
      <Heading level='hxl'>Hi, I'm Anthony 👋</Heading>
      <p>A Software Engineer / Designer from Melbourne, Australia.</p>
      <p>Food · Skiing · Photography · Tech</p>
    </div>
  </div>
}


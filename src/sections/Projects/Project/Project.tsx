import Link from 'next/link';
import Image from 'next/image';
import styles from './Project.module.scss';
import { ProjectData } from '../types';
import { VStack } from '../../../components/VStack/VStack';
import { Heading } from '../../../components/Typography/Heading';
import { Text } from '../../../components/Typography/Text';

interface Props {
  projectData: ProjectData
}

export const Project: React.FC<Props> = (props) => {
  const { url } = props.projectData;

  const getImageTemplate = () => {
    const { image, title } = props.projectData;

    return <Image className={styles.projectImage} src={image} alt={title} layout="fill" />
  }

  const getInfoTemplate = () => {
    const { title, desc } = props.projectData;

    return <VStack className={styles.projectInfo} space='xxsmall'>
      <Heading level='h2' className={styles.projectTitle}>{title}</Heading>
      <Text variant='body' className={styles.projectDesc}>{desc}</Text>
    </VStack>;
  }

  return <Link href={url} >
    <a className={styles.project}>
      {getImageTemplate()}
      {getInfoTemplate()}
    </a>
  </Link>
}

import Image from 'next/image';
import styles from './Artwork.module.scss';

import { ArtworkData } from '../Art';
import { Heading } from '../../../components/Typography/Heading';
import { Text } from '../../../components/Typography/Text';
import { TextLink } from '../../../components/TextLink/TextLink';
import { VStack } from '../../../components/VStack/VStack';
import Link from 'next/link';

type Props = {
  artworkData: ArtworkData,
}

export const Artwork: React.FC<Props> = ({ artworkData }) => {
  return <div className={styles.artwork}>
    <div className={styles.artworkImage}>
      <Image src={artworkData.image} alt={artworkData.title} width={artworkData.width} height={artworkData.height} layout="responsive" objectFit='contain' />
    </div>

    <div className={styles.artworkTitleContainer}>
      <ArtworkLabel artworkData={artworkData} />
    </div>
  </div>
}

const ArtworkLabel: React.FC<Props> = ({ artworkData }) => (
  <VStack space='xsmall'>
    <Heading level='h1'>{artworkData.title}, <Text variant='unstyled' weight='medium' as='span'>{artworkData.date}</Text></Heading>
    <Text variant='body-large' weight='medium'>{artworkData.medium}</Text>
    <Text variant='body-large'>{artworkData.width}× {artworkData.height} px</Text>
    <Link href={artworkData.image} passHref><TextLink variant='secondary'>Full resolution</TextLink></Link>
  </VStack>
)
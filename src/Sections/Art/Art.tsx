import styles from './Art.module.scss';
import { Header } from '../../components/Header/Header';
import { VStack } from '../../components/VStack/VStack';
import { Artwork } from './Artwork/Artwork';

import siteContent from '../../site-content.json';

export interface ArtworkData {
  title: string,
  date: string,
  medium: string,
  width: string,
  height: string,
  image: string
}

export const Art: React.FC = () => {
  const artData = siteContent.art;
  const art = artData.map((artwork, index) => <Artwork artworkData={artwork} key={index} />);

  return (
    <>
      <Header title="Art" />
      <div className={styles.artContainer}>
        <VStack space='xlarge'>
          {art}
        </VStack>
      </div>
    </>
  );
}
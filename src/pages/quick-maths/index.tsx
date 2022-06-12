import Image from 'next/image';
import styles from './index.module.scss';

import { Heading } from '../../components/Typography/Heading';
import { Text } from '../../components/Typography/Text';
import { BlogLayout } from '../../layouts/BlogLayout/BlogLayout';
import { VStack } from '../../components/VStack/VStack';

import quickMathsPromoImg from '../../../public/Images/projects/quick-maths/quick-maths-promo.png';
import appStoreBadge from '../../../public/Images/projects/quick-maths/app-store-badge.svg';
import playStoreBadge from '../../../public/Images/projects/quick-maths/play-store-badge.svg';

export default function QuickMaths() {
  return <BlogLayout title="Quick Maths">
    <VStack space='large' className={styles.grid}>
      <Image src={quickMathsPromoImg} alt="Quick Maths for iOS and Android" />
      <VStack space='small'>
        <Heading level='h3'>Quick Maths is a mini calculator-come-soundboard inspired by Big Shaq's viral hit, Man's Not Hot.</Heading>
        <Text>
          Inspiration came whilst procrastinating final exam study (as usual).
          A day later most of the functionality was done and a week later the app was on the App Store.
          The Android app followed a couple of weeks later.
        </Text>
        <div className={styles.badges}>
          <a className={styles.badge} href='https://bit.ly/2plus2is4'><Image alt='Download on the App Store' src={appStoreBadge} /></a>
          <a className={styles.badge} href='https://bit.ly/2plus2is4A'><Image alt='Get it on Google Play' src={playStoreBadge} /></a>
        </div>
      </VStack>
    </VStack>
  </BlogLayout>
}

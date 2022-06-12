import styles from './index.module.scss';

import { Heading } from '../../components/Typography/Heading';
import { Text } from '../../components/Typography/Text';
import { TextLink } from '../../components/TextLink/TextLink';
import { VStack } from '../../components/VStack/VStack';
import { BlogLayout } from '../../layouts/BlogLayout/BlogLayout';

export default function OneRegDetail() {
  return <BlogLayout title="AusPost Registration">
    <VStack space='large'>
      <iframe className={styles.promoVideo} src="https://www.youtube-nocookie.com/embed/JXvYLWzSWpU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <VStack space='small'>
        <Heading level="h3">A whole new way to sign up.</Heading>
        <Text>
          After building the <TextLink variant="secondary" href="https://auspost.com.au/auth/invite" target="_blank" rel="noreferrer">new AusPost registration app</TextLink>, a complete rethink of how customers create an account, we needed a bold way to announce and reveal the new customer journey.
        </Text>
        <Text>
          Inspired by similar perspective and 3D-esque interface reveal videos (such as those by Apple), I wanted to give it a go myself.
          Created entirely in Adobe After Effects having never used the software before, I worked on this reveal video for over 6 weeks, usually at night after work.
          My deadline was our end-of-year showcase in mid-December, 2018.
        </Text>
        <Text>
          The bulk of the work was recreating each interface element directly in After Effects.
          As you can imagine, this was not a simple task as After Effects is not a prototyping application.
          Less than a week before the showcase, I added the multiple 3D cameras used to provide the different camera angles seen in the video.
          The music had to be epic too, in this case a shortened version of The Reveal by David Bruggemann.
        </Text>
        <Text>
          Making the video was certainly a challenge, more time-consuming than I had originally imagined, but an achievable one nonetheless. The video was very well received both internally and externally.
        </Text>
      </VStack>
    </VStack>
  </BlogLayout>
};
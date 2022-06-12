import Image from 'next/image';

import { Heading } from '../../components/Typography/Heading';
import { Text } from '../../components/Typography/Text';
import { BlogLayout } from '../../layouts/BlogLayout/BlogLayout';
import { VStack } from '../../components/VStack/VStack';

import mainImg from '../../../public/Images/projects/macos-concept/macos-concept.png';
import finderLightImg from '../../../public/Images/projects/macos-concept/finder-light.png';
import finderDarkImg from '../../../public/Images/projects/macos-concept/finder-dark.png';

export default function MacConcept() {
  return <BlogLayout title="macOS Concept">
    <VStack space='large'>
      <Image src={mainImg} alt="Concept artwork for present-day macOS" />

      <VStack space='small'>
        <Heading level='h3'>Not a concept for tomorrow, but a concept for today.</Heading>
        <Text>
          A fresh coat of paint, clean lines, and gentle curves.
          These are not three separate ideas. This 'concept' does not aim to rethink the Finder, or the system as a whole.
          Instead, it offers a look at a simple visual update of today's macOS.
        </Text>
        <Text>Rounded corners and the elimination of borders around components aim to soften the interface whilst a drop of colour has been added in the sidebar to help give context.</Text>
        <Text>Files and folders are easily distinguishable by thinner tags, and the expand/collapse folder button has been removed. Instead, simply click on the folder icon to reveal or hide its contents.</Text>

        <div>
          <Image src={finderLightImg} alt="A light theme for Finder" />
        </div>

        <Heading level='h3'>A classic light theme.</Heading>

        <div>
          <Image src={finderDarkImg} alt="A dark theme for Finder" />
        </div>

        <Heading level='h3'>A bold dark theme.</Heading>
      </VStack>
    </VStack>
  </BlogLayout>
};


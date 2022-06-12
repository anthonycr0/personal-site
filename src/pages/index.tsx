import { VStack } from '../components/VStack/VStack';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { About } from '../sections/About/About';
import { Art } from '../sections/Art/Art';
import { Footer } from '../components/Footer/Footer';
import { Projects } from '../sections/Projects/Projects';
import Head from 'next/head';

export default function Home() {
  return <MainLayout>
    <Head>
      <title>Anthony Roberts | The Collection</title>
    </Head>
    <VStack space='large'>
      <About />
      <Projects />
      <Art />
      <Footer />
    </VStack>
  </MainLayout>
}
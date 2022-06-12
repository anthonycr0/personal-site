import Head from 'next/head';
import { BackLink } from '../../components/BackLink/BackLink';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../MainLayout/MainLayout';
import styles from './BlogLayout.module.scss';

type Props = {
  title: string;
} & React.HTMLProps<HTMLDivElement>;

export const BlogLayout: React.FC<Props> = ({ title, children }) => {
  return <MainLayout>
    <Head>
      <title>{title} | Anthony Roberts</title>
    </Head>
    <BackLink />
    <Header title={title} />
    <div className={styles.content}>
      {children}
    </div>
  </MainLayout>
}
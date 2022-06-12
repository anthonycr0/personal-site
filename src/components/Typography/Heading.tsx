import styles from './Heading.module.scss';

type Props = {
  level: 'hxl' | 'h1' | 'h2' | 'h3',
} & React.HTMLProps<HTMLHeadingElement>;

export const Heading: React.FC<Props> = ({ level, children }) => {
  const HeadingElement = level === 'hxl' ? 'h1' : level;
  return <HeadingElement className={styles[level]}>
    {children}
  </HeadingElement>
}


import styles from './Text.module.scss';

type Props = {
  variant?: 'body' | 'body-large' | 'serif' | 'unstyled',
  weight?: 'normal' | 'medium' | 'bold',
  as?: 'p' | 'span',
} & React.HTMLProps<HTMLParagraphElement>;

export const Text: React.FC<Props> = ({ variant = 'serif', weight = 'normal', as = 'p', children }) => {
  const className = `${styles[variant]} ${styles[weight]}`;
  const TextElement = as;
  return <TextElement className={className}>{children}</TextElement>
}
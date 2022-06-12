import styles from './VStack.module.scss';

type Props = {
  space: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
} & React.HTMLProps<HTMLDivElement>;

export const VStack: React.FC<Props> = ({ space, className, children, ...otherProps }) => {
  return <div className={`${styles.vstack} ${styles[space]} ${className ?? ''}`} {...otherProps}>
    {children}
  </div>
}
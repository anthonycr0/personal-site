import styles from './MainLayout.module.scss';

export const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return <div className={styles.page}>
    <div className={styles.layout}>
      {children}
    </div>
  </div>
}
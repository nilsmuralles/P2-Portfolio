import CustomTerminal from '@components/Terminal'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <main className={styles.layout}>
      <CustomTerminal className={styles.term1}/>
      <CustomTerminal className={styles.term2}/>
      <CustomTerminal className={styles.term3}/>
      <CustomTerminal className={styles.term4}/>
      <CustomTerminal className={styles.term5}/>
      <CustomTerminal className={styles.term6}/>
    </main>
  )
}

export default Layout

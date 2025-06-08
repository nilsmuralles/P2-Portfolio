import Terminal from '@components/Terminal'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <main className={styles.layout}>
      <Terminal className={styles.term1}/>
      <Terminal className={styles.term2}/>
      <Terminal className={styles.term3}/>
      <Terminal className={styles.term4}/>
      <Terminal className={styles.term5}/>
      <Terminal className={styles.term6}/>
    </main>
  )
}

export default Layout

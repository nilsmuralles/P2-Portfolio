import CustomTerminal from '@components/Terminal'
import styles from './Layout.module.css'
import ProyectsTerm from '@components/ProyectsTerm'
import PreviewTerm from '@components/PreviewTerm'
import { useState } from 'react'
import NameTerm from '@components/NameTerm'
import AboutMeTerm from '@components/AboutMeTerm'

const Layout = () => {
  const [selectedProyect, setSelectedProyect] = useState(0)

  return (
    <main className={styles.layout}>
      <NameTerm className={styles.term1}/>
      <AboutMeTerm className={styles.term2}/>
      <CustomTerminal className={styles.term3}/>
      <ProyectsTerm 
        className={styles.term4} 
        setSelectedProject={setSelectedProyect} 
        selectedProyect={selectedProyect}
      />
      <PreviewTerm 
        className={styles.term5} 
        selectedProject={selectedProyect}
      />
      <CustomTerminal className={styles.term6}/>
    </main>
  )
}

export default Layout

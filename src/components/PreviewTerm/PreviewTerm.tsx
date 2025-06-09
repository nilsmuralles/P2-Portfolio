import CustomTerminal from "@components/Terminal"
import useProyectList from "@hooks/useProyectList"
import type { Terminal } from "@xterm/xterm"
import { useEffect, useRef } from "react"
import styles from "./PreviewTerm.module.css"

interface PreviewTermProps {
  className: string
  selectedProject: number
}

const PreviewTerm = ({className, selectedProject}: PreviewTermProps) => {
  const { showPreview, selected } = useProyectList(selectedProject)
  const termRef = useRef<Terminal | null>(null)

  const handleTermInit = (term: Terminal) => {
    termRef.current = term
    term.focus()
    showPreview(term)
  }

  useEffect(() => {
    if (termRef.current) {
      termRef.current.clear()
    }
  }, [selectedProject, showPreview])

  return (
    <CustomTerminal className={className} onTerminalInit={handleTermInit}>
      <img 
        className={styles.terminalimg}
        src={selected.imageURL}
        alt={selected.title}
      />
    </CustomTerminal>
  )
}

export default PreviewTerm

import CustomTerminal from "@components/Terminal"
import useProyectList from "@hooks/useProyectList"
import type { Terminal } from "@xterm/xterm"
import { useEffect, useRef } from "react"

interface PreviewTermProps {
  className: string
  selectedProject: number
}

const PreviewTerm = ({className, selectedProject}: PreviewTermProps) => {
  const { showPreview } = useProyectList(selectedProject)
  const termRef = useRef<Terminal | null>(null)

  const handleTermInit = (term: Terminal) => {
    termRef.current = term
    term.focus()
    showPreview(term)
  }

  useEffect(() => {
    if (termRef.current) {
      termRef.current.clear()
      showPreview(termRef.current)
    }
  }, [selectedProject, showPreview])

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={handleTermInit}
    />
  )
}

export default PreviewTerm

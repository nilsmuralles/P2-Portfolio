import CustomTerminal from "@components/Terminal"
import useProyectList from "@hooks/useProyectList"
import type { Terminal } from "@xterm/xterm"
import { useEffect, useRef } from "react"

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
        src={selected.imageURL}
        alt={selected.title}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "80%",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          pointerEvents: "none", 
          scale: "0.7",
        }}
      />
    </CustomTerminal>
  )
}

export default PreviewTerm

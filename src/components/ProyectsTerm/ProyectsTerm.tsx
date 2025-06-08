import CustomTerminal from "@components/Terminal"
import useProyectList from "@hooks/useProyectList"
import type { Terminal } from "@xterm/xterm"

interface ProyectsTermProps {
  className?: string
  selectedProyect: number
  setSelectedProject: (index: number) => void
}

const ProyectsTerm = ({className, selectedProyect, setSelectedProject}: ProyectsTermProps) => {
  const { renderList, projects } = useProyectList(selectedProyect)

  const handleKeyPressed = (key: string) => {
    if (key === '\u001b[A' || key === 'k') {
      if (selectedProyect > 0) {
        setSelectedProject(selectedProyect - 1)
      }
    } else if (key === '\u001b[B' || key === 'j') {
      if (selectedProyect < projects.length - 1) {
        setSelectedProject(selectedProyect + 1)
      }
    }
  }

  const handleTermInit = (term: Terminal) => {
    if (!term) return
    term.focus()
    renderList(term)

    term.onKey(({ key }) => {
      handleKeyPressed(key)
    })
  }

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={handleTermInit}
    />
  )
}

export default ProyectsTerm

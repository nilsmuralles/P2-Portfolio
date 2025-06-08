import CustomTerminal from "@components/Terminal"
import type { Terminal } from "@xterm/xterm"

interface ProyectsTermProps {
  className?: string
}

const ProyectsTerm = ({className}: ProyectsTermProps) => {
  const printHello = (term: Terminal) => {
    term.writeln('Hello world')
    const greenBackground = '\x1b[48;5;34m'
    const whiteText = '\x1b[38;5;15m'
    const reset = '\x1b[0m'

    term.writeln(`${greenBackground}${whiteText}File name ${reset}`)

    term.focus()
  }

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={printHello}
    />
  )
}

export default ProyectsTerm

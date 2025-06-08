import CustomTerminal from "@components/Terminal"
import type { Terminal } from "@xterm/xterm"

interface NameTermProps {
  className: string
}

const NameTerm = ({className}: NameTermProps) => {

  const handleTermInit = (term: Terminal) => {
    term.clear()
    term.writeln("\x1b[0;38;2;245;66;1380;49m    ▗▖ ▗▖▗▄▄▄▖▗▖   ▗▖    ▗▄▖     ▗▄▄▄▖▗▖  ▗▖")
    term.writeln("    ▐▌ ▐▌▐▌   ▐▌   ▐▌   ▐▌ ▐▌      █  ▐▛▚▞▜▌")
    term.writeln("    ▐▛▀▜▌▐▛▀▀▘▐▌   ▐▌   ▐▌ ▐▌      █  ▐▌  ▐▌")
    term.writeln("    ▐▌ ▐▌▐▙▄▄▖▐▙▄▄▖▐▙▄▄▖▝▚▄▞▘    ▗▄█▄▖▐▌  ▐▌")
    term.writeln("")
    term.writeln("\x1b[0;38;2;54;255;87;49m                  ▗▖  ▗▖▄ █  ▄▄▄ ")
    term.writeln("                  ▐▛▚▖▐▌▄ █ ▀▄▄  ")
    term.writeln("                  ▐▌ ▝▜▌█ █ ▄▄▄▀ ")
    term.writeln("                  ▐▌  ▐▌█ █      ")
  }

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={handleTermInit}
    />
  )
}

export default NameTerm

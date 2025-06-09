import CustomTerminal from "@components/Terminal"
import type { Terminal } from "@xterm/xterm"

interface NeovimTermProps {
  className: string
}

const NeovimTerm = ({className}: NeovimTermProps) => {
  const handleTermInit = (term: Terminal) => {
    term.clear()
    term.writeln('\x1b[0;38;2;54;255;87;49m           ▗▖  ▗▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖▗▄▄▄▖▗▖  ▗▖')
    term.writeln('           ▐▛▚▖▐▌▐▌   ▐▌ ▐▌▐▌  ▐▌  █  ▐▛▚▞▜▌')
    term.writeln('           ▐▌ ▝▜▌▐▛▀▀▘▐▌ ▐▌▐▌  ▐▌  █  ▐▌  ▐▌')
    term.writeln('           ▐▌  ▐▌▐▙▄▄▖▝▚▄▞▘ ▝▚▞▘ ▗▄█▄▖▐▌  ▐▌')
    term.writeln('')
    term.writeln('            ▗▄▄▖ ▗▄▖ ▗▄▄▖ ▗▖  ▗▖▗▄▄▄▖▗▄▄▖  ')
    term.writeln('           ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▛▚▖▐▌▐▌   ▐▌ ▐▌')
    term.writeln('           ▐▌   ▐▌ ▐▌▐▛▀▚▖▐▌ ▝▜▌▐▛▀▀▘▐▛▀▚▖')
    term.writeln('           ▝▚▄▄▖▝▚▄▞▘▐▌ ▐▌▐▌  ▐▌▐▙▄▄▖▐▌ ▐▌')
    term.writeln('\x1b[0m')
    term.write('Why is NeoVim better for me? It has changed the way I view coding, it has made it fun again and I really    appreciate that. It has improved my workflow so much I could not go back. That is why it gets a special     place on my portfolio. I would say it is my most      essential developing tool and I could not go a day without using  it.')
    term.writeln("")
    term.writeln("")
    term.writeln("\x1b[1;38;2;255;255;255;49mDotfiles: https://github.com/nilsmuralles/dotfiles/tree/main/.config/nvim")
  }

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={handleTermInit}
    />
  )
}

export default NeovimTerm

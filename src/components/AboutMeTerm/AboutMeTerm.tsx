import CustomTerminal from "@components/Terminal"
import type { Terminal } from "@xterm/xterm"

interface AboutMeTermProps {
  className: string
}

const AboutMeTerm = ({className}: AboutMeTermProps) => {
  const handleTermInit = (term: Terminal) => {
    term.clear()
    term.writeln(" \x1b[1;38;2;255;255;255;49m┌ About Me ──────────────────────────────────────────────────────────────────┐")
    term.writeln(" │                                                                            │")
    term.writeln(" │      \x1b[1;38;2;255;255;255;49mExperienced \x1b[1;38;2;252;224;10;49msoftware engineer \x1b[1;38;2;255;255;255;49mand \x1b[1;38;2;252;224;10;49mcomputer science \x1b[1;38;2;255;255;255;49mstudent            │")
    term.writeln(" │      based on Latin America. Pasionate for developing solutions            │")
    term.writeln(" │      using cutting edge technology.                                        │")
    term.writeln(" │                                                                            │")
    term.writeln(" │      Reliable, available and always looking up for oportunities            │")
    term.writeln(" │      and learning something new every day.                                 │")
    term.writeln(" │                                                                            │")
    term.writeln(" └────────────────────────────────────────────────────────────────────────────┘")
  }

  return (
    <CustomTerminal 
      className={className}
      onTerminalInit={handleTermInit}
    />
  )
}

export default AboutMeTerm

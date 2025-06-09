import CustomTerminal from "@components/Terminal"
import type { Terminal } from "@xterm/xterm"

interface ContactMeTermProps {
  className: string
}

const ContactMeTerm = ({className}: ContactMeTermProps) => {

  const handleTermInit = (term: Terminal) => {
    term.clear()
    term.writeln("\x1b[0;93;49mnils@porftolio home/nils/contact-me-info\x1b[0m")
    term.writeln("> ls")
    term.writeln("")
    term.writeln("\u001b[1;32m🚀 Contact Me!  🚀 \u001b[0m")
    term.writeln("\u001b[1;36m📧 Correo:\u001b[0m murallesnils11@gmail.com")
    term.writeln("\u001b[1;36m💻 GitHub:\u001b[0m https://github.com/nilsmuralles")
    term.writeln("\u001b[1;36m🔗 LinkedIn:\u001b[0m https://linkedin.com/in/nils-muralles-morales")
  }

  return (
    <CustomTerminal 
      className={className}
      onTerminalInit={handleTermInit}
    />
  )
}

export default ContactMeTerm

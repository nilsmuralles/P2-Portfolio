import { XTerm } from "react-xtermjs"
import { FitAddon } from "@xterm/addon-fit";
import { useEffect } from "react";

interface TerminalProps {
  className?: string
}

const Terminal = ({className}: TerminalProps) => {
  const fitAddon = new FitAddon()
  useEffect(() => {
    if (fitAddon) {
      setTimeout(() => fitAddon.fit(), 0)
    }
  }, [fitAddon])

  return (
    <XTerm
      className={className}
      options={{ 
        cursorBlink: true, 
        theme: {
          background: 'rgba(0, 0, 0, 0)',
          foreground: '#ffffff'
        }
      }}
      style={{ 
        width: '100%', 
        height: '100%',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        WebkitBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)'
      }}
      addons={[fitAddon]}
    />
  )
}

export default Terminal

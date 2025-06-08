import { useXTerm } from "react-xtermjs"
import { FitAddon } from "@xterm/addon-fit";
import { useEffect } from "react";
import type { Terminal } from "@xterm/xterm";

interface TerminalProps {
  className?: string
  onTerminalInit?: (terminal: Terminal) => void
}

const CustomTerminal = ({className, onTerminalInit}: TerminalProps) => {
  const { instance, ref } = useXTerm()
  const fitAddon = new FitAddon()

  useEffect(() => {
    if (instance) {
      instance.options = {
        fontSize: 16,
        fontFamily: '"Hack Nerd Font", monospace',
        cursorBlink: true,
        theme: {
          background: 'rgba(0, 0, 0, 0)',
          foreground: '#ffffff'
        }
      }
    }

    if (fitAddon) {
      setTimeout(() => fitAddon.fit(), 0)
      instance?.loadAddon(fitAddon)
    }

    if (onTerminalInit && instance) {
      onTerminalInit(instance)
    }
  }, [fitAddon])

  return (
    <div 
      className={className}
      ref={ref}
      style={{
        width: '100%', 
        height: '100%',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        WebkitBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
      }}
    />
  )
}

export default CustomTerminal

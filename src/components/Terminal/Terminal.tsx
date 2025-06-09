import { useXTerm } from "react-xtermjs"
import { FitAddon } from "@xterm/addon-fit";
import { useEffect, useRef } from "react";
import type { Terminal } from "@xterm/xterm";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { Unicode11Addon } from "@xterm/addon-unicode11";

interface TerminalProps {
  className?: string
  onTerminalInit?: (terminal: Terminal) => void
  children?: React.ReactNode
}

const CustomTerminal = ({ className, onTerminalInit, children }: TerminalProps) => {
  const { instance, ref } = useXTerm()
  const fitAddonRef = useRef<FitAddon | null>(null)

  useEffect(() => {
    if (!instance) return

    instance.options = {
      fontSize: 16,
      fontFamily: '"Hack Nerd Font", monospace',
      cursorBlink: true,
      theme: {
        background: 'rgba(0, 0, 0, 0)',
        foreground: '#ffffff'
      }
    }

    instance.loadAddon(new WebLinksAddon())

    if (!fitAddonRef.current) {
      fitAddonRef.current = new FitAddon()
      instance.loadAddon(fitAddonRef.current)
      setTimeout(() => {
        fitAddonRef.current?.fit()
      }, 0)
    }

    if (onTerminalInit) {
      onTerminalInit(instance)
    }
  }, [instance, onTerminalInit])

  return (
    <div
      className={className}
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        padding: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        WebkitBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 1px 6px 0px rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {children}
    </div>
  )
}

export default CustomTerminal

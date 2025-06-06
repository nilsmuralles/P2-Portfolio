import { XTerm } from "react-xtermjs"
import { FitAddon } from "@xterm/addon-fit";
import { useEffect } from "react";

const Terminal = () => {
  const fitAddon = new FitAddon()
  useEffect(() => {
    if (fitAddon) {
      setTimeout(() => fitAddon.fit(), 0)
    }
  }, [fitAddon])

  return (
    <XTerm
      options={{ cursorBlink: true }}
      style={{ width: '100%', height: '100%' }}
      addons={[fitAddon]}
    />
  )
}

export default Terminal

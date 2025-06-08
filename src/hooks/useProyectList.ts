import type { Terminal } from "@xterm/xterm"
import { useRef } from "react"

const useProyectList = () => {
  const projects = [
    'React Calculator',
    'Go REST API',
    'Physics Simulation with C',
    'De Aquí Para Allá'
  ]

  const selectedIndex = useRef(0)

  const listProyects = (term: Terminal) => {
    if (!term) return

    term.focus()
    renderList(term)

    term.onKey(({ key }) => {
      handleKeyPressed(key, term)
    })
  }

  const handleKeyPressed = (key: string, term: Terminal) => {
    if (key === '\u001b[A') {
      if (selectedIndex.current > 0) {
        selectedIndex.current--
      }
    } else if (key === '\u001b[B') {
      if (selectedIndex.current < projects.length - 1) {
        selectedIndex.current++
      }
    }

    renderList(term)
  }

  const renderList = (term: Terminal) => {
    term.clear()
    projects.forEach((project, index) => {
      if (index === selectedIndex.current) {
        term.writeln(`\x1b[47;30m ${project} \x1b[0m`)
      } else {
        term.writeln(` ${project}`)
      }
    })
  }

  return { listProyects }
}

export default useProyectList

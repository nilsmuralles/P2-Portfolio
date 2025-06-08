import type { Project } from "@interfaces/project"
import type { Terminal } from "@xterm/xterm"

const useProyectList = (selectedIndex: number) => {
  const projects: Project[] = [
    {
      id: 0,
      title: 'React Calculator',
      description: 'This is just temporary description'
    },
    {
      id: 1,
      title: 'Go REST API',
      description: 'This is just temporary description'
    },
    {
      id: 2,
      title: 'Physics Simulation with C',
      description: 'This is just temporary description'
    },
    {
      id: 3,
      title: 'De Aquí Para Allá',
      description: 'This is just temporary description'
    },
  ]

  const renderList = (term: Terminal) => {
    term.clear()
    term.writeln("\x1b[38;2;100;149;237m" + "nils@porftolio home/nils/projects\x1b[0m")
    projects.forEach((project, index) => {
      if (index === selectedIndex) {
        term.writeln(`\x1b[47;30m ${project.title} \x1b[0m`)
      } else {
        term.writeln(` ${project.title}`)
      }
    })
    term.focus()
  }

  const showPreview = (term: Terminal) => {
    const project = projects[selectedIndex]
    term.clear()

    term.writeln("\x1b[1m" + project.title + "\x1b[0m")
    term.writeln("")
    
    term.writeln(project.description)
  }

  return { projects, renderList, showPreview, selectedIndex }
}

export default useProyectList

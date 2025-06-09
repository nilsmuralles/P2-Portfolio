import type { Project } from "@interfaces/project"
import type { Terminal } from "@xterm/xterm"

const useProyectList = (selectedIndex: number) => {
  const projects: Project[] = [
    { 
      id: 0, 
      title: 'React Calculator', 
      description: 'Simple React calculator built for learning Vitest, storybook and React Testing Library. I was also able to practice my React skills overall', 
      imageURL: '/images/calculator_image.png', 
      stack: [
        {
          name: 'Reac\x1b[0m',
          ansicolor: '\x1b[0;96;49m'
        },
        {
          name: 'Bun\x1b[0m,',
          ansicolor: '\x1b[0;38;2;255;0;247;49m'
        }
      ] 
    },
    { 
      id: 1, 
      title: 'Go REST API', 
      description: 'Well documented full REST API built using Go and Gin Gonic. Learnt backend and proper documentation techniques.', 
      imageURL: '/images/goapi.png',
      stack: [
        {
          name: 'Go\x1b[0m',
          ansicolor: '\x1b[0;38;2;0;187;255;49m'
        }
      ]
    },
    { 
      id: 2, 
      title: 'ASCII Art Pac-Man', 
      description: 'ASCII Art version of the classical game Pac-Man built using C. Perfect for learning low level programming and multi-threading.', 
      imageURL: 'images/ascii-pacman.png',
      stack: [
        {
          name: 'C\x1b[0m',
          ansicolor: '\x1b[0;92;49m'
        }
      ]
    },
    { 
      id: 3, 
      title: 'De Aquí Para Allá', 
      description: 'Full stack web application built for learning how an actual SAAS works. Except Scrum, I personally did not like scrum.', 
      imageURL: 'images/dapa.png', 
      stack: [
        {
          name: 'Vue\x1b[0m',
          ansicolor: '\x1b[0;92;49m'
        },
        {
          name: 'Go\x1b[0m',
          ansicolor: '\x1b[0;38;2;0;187;255;49m'
        },
        {
          name: 'PostgreSQL',
          ansicolor: '\x1b[0;38;2;64;50;252;49m'
        }
      ]
    },
  ]
  const selected = projects[selectedIndex]

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
    term.clear()

    term.writeln("\x1b[1m" + selected.title + "\x1b[0m")
    term.writeln("")
    term.writeln(selected.description)
    term.writeln("")
    const stackString = selected.stack.map(tech => `${tech.ansicolor}${tech.name}`).join(', ')
    term.writeln(`\x1b[1mStack:\x1b[0m ${stackString.trimEnd().replace(/,\s*$/, '')}`)

    term.blur()
  }

  return { projects, renderList, showPreview, selectedIndex, selected }
}

export default useProyectList

export interface Project {
  id: number
  title: string
  description: string
  imageURL?: string
  stack: technology[]
}

export interface technology {
  name: string
  ansicolor: string
}

const techs = [
  {
    name: 'React',
    ansicolor: '\x1b[0;96;49m'
  }
  {
    name: 'Bun',
    ansicolor: '\x1b[0;95;49m'
  }
]

export default techs

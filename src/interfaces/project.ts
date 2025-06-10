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

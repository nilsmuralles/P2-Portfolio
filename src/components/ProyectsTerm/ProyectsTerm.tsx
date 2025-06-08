import CustomTerminal from "@components/Terminal"
import useProyectList from "@hooks/useProyectList"

interface ProyectsTermProps {
  className?: string
}

const ProyectsTerm = ({className}: ProyectsTermProps) => {
  const { listProyects } = useProyectList()

  return (
    <CustomTerminal 
      className={className} 
      onTerminalInit={listProyects}
    />
  )
}

export default ProyectsTerm

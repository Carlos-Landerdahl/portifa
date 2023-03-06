import { Title } from '../../styles/global'
import { ContainerProjects } from './styles'
import { Carousel } from './components/Carousel'

export function Projects() {
  return (
    <ContainerProjects>
      <Title className="title">Meus projetos</Title>
      <Carousel />
    </ContainerProjects>
  )
}

import { Title } from '../../styles/global'
import { ContainerProjects } from './styles'
import { Carousel } from './components/Carousel'
import { MdTouchApp } from 'react-icons/md'

export function Projects() {
  return (
    <ContainerProjects>
      <Title className="title">Meus projetos</Title>
      <p>Clique ou arraste para o lado para interagir</p>
      <MdTouchApp size={50} />
      <Carousel />
    </ContainerProjects>
  )
}

import { Title } from '../../styles/global'
import { CardSkills } from './components/card'
import { ContainerSkills } from './styles'
import img from '../../images/Carlos3D.png'

export function Skills() {
  return (
    <ContainerSkills>
      <Title className="title">Hard Skills</Title>
      <div className="container">
        <CardSkills
          url={img}
          title={'sadawsd'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
        <CardSkills
          url={img}
          title={'sadawsd'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
        <CardSkills
          url={img}
          title={'sadawsd'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
      </div>
    </ContainerSkills>
  )
}

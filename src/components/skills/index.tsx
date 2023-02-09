import { Title } from '../../styles/global'
import { CardSkills } from './components/card'
import { ContainerSkills } from './styles'
import reactLogo from '../../images/react-logo.png'
import mysqlLogo from '../../images/mysql-logo.png'
import htmlLogo from '../../images/html-logo.png'
import { MdTouchApp } from 'react-icons/md'

export function Skills() {
  return (
    <ContainerSkills>
      <Title className="title">Hard Skills</Title>
      <MdTouchApp size={50} />
      <p>Clique ou toque para visualizar</p>
      <div className="container">
        <CardSkills
          url={htmlLogo}
          title={'Card'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
        <CardSkills
          url={mysqlLogo}
          title={'sadawsd'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
        <CardSkills
          url={reactLogo}
          title={'sadawsd'}
          subtitle={
            ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reiciendis impedit qui, dolor eum labore illum voluptates molestiae est magni pariatur officiis veritatis accusantium minima, rem culpa alias aperiam officia.'
          }
        />
      </div>
    </ContainerSkills>
  )
}

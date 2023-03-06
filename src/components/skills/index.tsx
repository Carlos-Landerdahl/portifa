import { Title } from '../../styles/global'
import { CardSkills } from './components/card'
import { ContainerSkills } from './styles'
import reactLogo from '../../images/react-logo.png'
import mysqlLogo from '../../images/mysql-logo.png'
import htmlLogo from '../../images/html-logo.png'
import jsLogo from '../../images/js-logo.png'
import tsLogo from '../../images/ts-logo.png'
import cssLogo from '../../images/css-logo.png'
import gitLogo from '../../images/git-logo.png'

export function Skills() {
  return (
    <ContainerSkills>
      <Title className="title">Habilidades</Title>
      <div className="container">
        <CardSkills
          url={jsLogo}
          title={'JavaScript'}
          subtitle={
            'Conhecimento sólido em JS como: manipulação de arrays, tipos, funções, variáveis, manipulação DOM e muito mais.'
          }
        />
        <CardSkills
          url={tsLogo}
          title={'TypeScript'}
          subtitle={
            'Começei a usar faz poucos meses porém sou apaixonado por essa linguagem, conhecimento em tipagens, manipulações e muito mais.'
          }
        />
        <CardSkills
          url={reactLogo}
          title={'React.js'}
          subtitle={
            'Hoje minha ferramenta favorita para criar meus sites e desenvolver web pages, um boa e sólida experiência vale resaltar.'
          }
        />
        <CardSkills
          url={htmlLogo}
          title={'HTML'}
          subtitle={
            ' Altamente experiente em criar esqueletos semânticos, acessíveis e bem estruturados.'
          }
        />
        <CardSkills
          url={cssLogo}
          title={'CSS'}
          subtitle={
            'Conhecimento avançado em estilização, utilizando principalmente bibliotecas e pré-processadores, como por exemplo: SCSS, Styled-components, Tailwind e CSS Modules.'
          }
        />
        <CardSkills
          url={mysqlLogo}
          title={'Mysql'}
          subtitle={
            'Tenho experiência nivel júnior, realizando tarefas como DML, DDL e CRUD.'
          }
        />
        <CardSkills
          url={gitLogo}
          title={'Git'}
          subtitle={
            'Experiência vasta utilizando e versiando códigos através do Git/GitHub.'
          }
        />
      </div>
    </ContainerSkills>
  )
}

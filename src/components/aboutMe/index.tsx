import { Subtitle, Title } from '../../styles/global'
import { ContainerAboutMe, ContainerDiv, NavlinkAboutMe } from './styles'
import {
  SiStyledcomponents,
  SiReact,
  SiTailwindcss,
  SiGithubactions,
} from 'react-icons/si'
import imgAboutMe from '../../images/about-me.svg'

export function AboutMe() {
  return (
    <ContainerDiv>
      <ContainerAboutMe>
        <Title className="title">Sobre mim</Title>
        <section>
          <img src={imgAboutMe} alt="" />
        </section>
        <Subtitle className="subtitle">
          Cursando o{' '}
          <a
            href="https://www.digitalhouse.com/br/productos/programacion/certified-tech-developer"
            target="_blank"
            rel="noreferrer"
          >
            Certified Tech Developer
          </a>{' '}
          oferecido pela Digital House em conjunto com a Globant e Mercado
          livre. Estou na área de programação a 1 ano, onde o meu foco é
          Front-end, já trabalhei com renderizações 3D e sou apaixonado pela
          área da tecnologia e design. Possuo experiência como desenvolvedor
          Front-end, atuando na criação de site usando React.js com
          styled-components e Tailwind.
        </Subtitle>
        <NavlinkAboutMe>
          <SiStyledcomponents size={30} />
          <SiReact size={30} />
          <SiTailwindcss size={30} />
          <SiGithubactions size={30} />
        </NavlinkAboutMe>
      </ContainerAboutMe>
    </ContainerDiv>
  )
}

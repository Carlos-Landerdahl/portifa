import Character3D from '../../images/Carlos3D.png'
import { Subtitle, Title } from '../../styles/global'
import { Content, ContentContainer, NavLink } from './styles'
import { AiOutlineCloudDownload, AiOutlineDoubleRight } from 'react-icons/ai'

export function ContentHome() {
  return (
    <ContentContainer>
      <img src={Character3D} alt="" />
      <Content>
        <p>Olá, meu nome é</p>
        <Title className="title">Carlos Landerdahl</Title>
        <Subtitle className="subtitle">
          Eu sou desenvolvedor Front-end.
        </Subtitle>
        <Subtitle className="description">
          Sou um desenvolvedor focado em solucionar problemas e criar páginas e
          aplicações web altamente funcionais, personalizadas, acessíveis para
          uso comercial ou pessoal.
        </Subtitle>
        <NavLink>
          <a href="#" target="_blank" rel="noreferrer">
            <button>
              Baixar CV
              <AiOutlineCloudDownload size={24} />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/carloslanderdahl/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              LinkedIn
              <AiOutlineDoubleRight size={24} />
            </button>
          </a>
        </NavLink>
      </Content>
    </ContentContainer>
  )
}

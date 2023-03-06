import { MdWorkOutline } from 'react-icons/md'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Title } from '../navbar/styles'
import { TimelineContainer } from './styles'

export function Timeline() {
  return (
    <>
      <TimelineContainer>
        <Title className="title">Experiências</Title>

        <VerticalTimeline lineColor={'#1C2F41'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#112240', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date="set de 2021 - jan de 2022 · 5 meses"
            iconStyle={{ background: '#112240', color: 'white' }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor freelancer / Customer support
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Self Employed · Autônomo
            </h4>
            <p>
              Estou atuando como desenvolvedor freelancer, desenvolvendo sites
              pessoais e também atuando na comunidade WEB 3.0, especificamente
              no ecosistema Solana como suporte.
            </p>
            <p className="spanDesc">
              Competências: React · Software de produtividade Notion ·
              styled-components · Typescript · Git · MongoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#112240', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date="set de 2021 - jan de 2022 · 5 meses"
            iconStyle={{ background: '#112240', color: 'white' }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor Front-End Jr
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Solaland</h4>
            <p>
              Minhas responsabilidades: Responsável pela coleta de requisitos
              com os clientes e alinhamento de expectativas, desenvolvimentos
              das páginas web usando react.js com tailwind ou styled-components,
              correções e resolução de bugs relatados pelos clientes.
              Responsável também pela organização das hot tasks, demandas
              pequenas e rápidas que eu alinhava com cada desenvolvedor de
              acordo com a necessidade e pedido do cliente.
            </p>
            <p className="spanDesc">
              Competências: YouTrack · Software de produtividade Notion ·
              Tailwind · JavaScript · React.js · Next.js · Git · Figma ·
              Styled-components · MongoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#112240', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date="set de 2021 - jan de 2022 · 5 meses"
            iconStyle={{ background: '#112240', color: 'white' }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Auxiliar de logística
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Minas card</h4>
            <p>
              Minhas responsabilidades: Faço o auxílio na organização das rotas
              para os técnicos, monitoramento de entrada e saída do estoque
              usando o sistema Paytec, emissão de nota fiscal e por fim,
              organização e boa logística do estoque.
            </p>
            <p className="spanDesc">
              Competências: Banco de dados · Logística de distribuição · Office
              365
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TimelineContainer>
    </>
  )
}

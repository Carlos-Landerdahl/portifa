import { Title } from '../../../../styles/global'
import { ContainerCards, ContentCard, Card } from './styles'

interface PropsCard {
  title: string
  url: string
  subtitle: string
}

export function CardSkills({ title, url, subtitle }: PropsCard) {
  return (
    <ContainerCards>
      <div className="touch"></div>
      <Card backgroundImg={url}>
        <ContentCard className="visible">
          <Title>{title}</Title>
          <p>{subtitle}</p>
          <button>
            <a href="https://github.com/Carlos-Landerdahl">Ver projeto</a>
          </button>
        </ContentCard>
      </Card>
    </ContainerCards>
  )
}

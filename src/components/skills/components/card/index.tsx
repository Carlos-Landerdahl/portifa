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
      <Card backgroundImg={url}>
        <ContentCard className="visible">
          <Title>{title}</Title>
          <p>{subtitle}</p>
          <button>Ver projeto</button>
        </ContentCard>
      </Card>
    </ContainerCards>
  )
}

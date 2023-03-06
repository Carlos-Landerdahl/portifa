import styled from 'styled-components'

interface PropsCard {
  backgroundImg: string
}

export const ContainerCards = styled.div`
  display: flex;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  p {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Card = styled.div<PropsCard>`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px solid transparent;
  cursor: pointer;
`
export const ContentCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  padding: 10px;
  text-align: center;

  backdrop-filter: blur(3px);
  background-color: rgba(28, 47, 65, 0.8);

  .titleCard-skills {
    color: ${(props) => props.theme.white};
  }
`

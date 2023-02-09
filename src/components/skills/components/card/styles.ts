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
`

export const Card = styled.div<PropsCard>`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-position: center;

  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 3px;
`
export const ContentCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;
  text-align: center;

  opacity: 0;
  transition: all 0.2s;

  :hover {
    opacity: 1;
    backdrop-filter: blur(3px);
  }
`

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

  .touch {
    position: absolute;
    svg {
      opacity: 0.6;
      color: ${(props) => props.theme['base-border']};
    }
  }
`

export const Card = styled.div<PropsCard>`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: contain;
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

  padding: 10px;
  text-align: center;

  opacity: 0;
  transition: all 0.2s;

  button {
    font-size: 1.2rem;
    padding: 10px 30px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.blue};
    font-weight: 400;
    cursor: pointer;
    margin-top: 20px;
    background-color: transparent;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-text']};
    }

    :hover {
      transition: 0.3s;
      background-color: ${(props) => props.theme.blue};
    }
  }

  :hover {
    opacity: 1;
    backdrop-filter: blur(3px);
    background-color: rgba(28, 47, 65, 0.8);
  }
`

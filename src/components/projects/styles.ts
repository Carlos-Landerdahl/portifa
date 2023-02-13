import styled from 'styled-components'

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 190px;
  margin-bottom: 190px;

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    border-bottom: 3px solid ${(props) => props.theme.blue};
  }

  .CardContainer {
    display: flex;
    max-width: 800px;
    gap: 30px;
    overflow-x: scroll;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  svg {
    animation: fadeInOut 2s linear infinite;
    margin-bottom: 60px;
  }
`

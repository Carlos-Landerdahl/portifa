import styled from 'styled-components'

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;

  p {
    padding: 0 20px;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.theme.white};
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

  > svg {
    animation: fadeInOut 2s linear infinite;
    margin-bottom: 25px;
  }
`

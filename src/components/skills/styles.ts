import styled from 'styled-components'

export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 60px;

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.white};
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    max-width: 1100px;
    width: 100%;
    padding: 30px;
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
    margin-left: 5px;
  }

  p {
    margin: 5px 0 10px 0;
  }
`

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
    margin-bottom: 70px;
    border-bottom: 3px solid ${(props) => props.theme.blue};
  }

  .CardContainer {
    display: flex;
    max-width: 800px;
    gap: 30px;
    overflow-x: scroll;
  }
`

import styled from 'styled-components'

export const ContainerSkills = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  .title {
    font-size: 2rem;
    margin-bottom: 50px;
    border-bottom: 3px solid ${(props) => props.theme.blue};
  }

  .container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
`

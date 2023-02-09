import styled from 'styled-components'

export const ContainerDiv = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['base-border']};
  margin-top: 160px;
  padding: 50px 0;
  box-shadow: 1px 0px 25px 1px rgba(28, 47, 65, 0.5);
  -webkit-box-shadow: 1px 0px 25px 1px rgba(28, 47, 65, 0.5);
  -moz-box-shadow: 1px 0px 25px 1px rgba(28, 47, 65, 0.5);
`

export const ContainerAboutMe = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 30px auto;
  padding: 20px;

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    border-bottom: 3px solid ${(props) => props.theme.blue};
  }

  .subtitle {
    font-size: 1.1rem;
    opacity: 0.7;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      opacity: 1;

      :hover {
        margin-bottom: 10px;
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`

export const NavlinkAboutMe = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;

  margin-top: 10px;

  cursor: pointer;
`

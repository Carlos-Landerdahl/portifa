import styled from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
  padding: 20px;

  img {
    max-width: 400px;
    width: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 0px 0px 5px rgba(27, 124, 146, 0.63);
    -webkit-box-shadow: 0px 0px 0px 5px rgba(27, 124, 146, 0.63);
    -moz-box-shadow: 0px 0px 0px 5px rgba(27, 124, 146, 0.63);
  }

  .svgArrowDown {
    max-width: 300px;
    width: 100%;

    opacity: 0.1;
    position: absolute;
    top: 700px;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
  }
`

export const Content = styled.div`
  max-width: 700px;
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 10px;
  line-height: 1.75rem;
  font-weight: bold;

  p {
    color: ${(props) => props.theme['base-span']};
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-bottom: 6px;
  }

  .title {
    padding: 3px 0;
    font-size: 3rem;
    line-height: 1.75rem;
    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
  }

  .subtitle {
    font-size: 2rem;
    opacity: 0.4;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .description {
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 1.1rem;
    opacity: 0.7;
  }
`

export const NavLink = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: nowrap;

  a {
    text-decoration: none;
  }

  button {
    width: 160px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 8px 20px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme['base-subtitle']};
    outline: none;

    font-weight: bold;
    color: ${(props) => props.theme['base-text']};

    cursor: pointer;
    transition: all 0.2s;

    svg {
      transition: all 0.2s;
    }

    :hover {
      background-color: ${(props) => props.theme['base-border']};
      border-color: ${(props) => props.theme['base-border']};

      svg {
        margin-left: 5px;
      }
    }
  }
`

import styled from 'styled-components'

export const ContainerNavLink = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    opacity: 0;
    transition: all 0.3s ease-in-out;

    h1 {
      font-weight: 400;
      position: absolute;
      top: 15px;
    }

    p {
      position: absolute;
      top: 60px;
      margin: 0 auto;
      padding: 5px 20px;
    }
  }

  .contentHover {
    text-align: center;
    font-size: 18px;

    position: relative;
    top: -70px;

    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    opacity: 0;

    a {
      text-decoration: none;
      color: #1c2f41;
      font-weight: bold;
    }

    button {
      width: 110px;
      height: 40px;

      background-color: #e7edf4;
      border-radius: 3px;
      border: none;
    }

    transition: all 0.3s ease-in-out;
  }

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    img {
      opacity: 0.1;
      filter: blur(5px);
    }
    .contentHover {
      opacity: 1;
      transform: translateY(-20px);
    }
    div {
      opacity: 1;
    }
  }
`

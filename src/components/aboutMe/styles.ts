import styled from 'styled-components'

export const ContainerDiv = styled.main`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 60px;
`

export const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 700px;

  margin: 0 auto;
  padding: 0 20px;

  section {
    width: 100%;
    max-width: 700px;

    @keyframes Animation-rotate {
      0% {
        transform: translateX(0) rotate(0);
      }
      50% {
        transform: translateX(2px) rotate(2deg);
      }
      100% {
        transform: translateX(0) rotate(0);
      }
    }

    img {
      animation: Animation-rotate 2s ease-in-out infinite;
    }
  }

  .title {
    font-size: 3rem;
    color: ${(props) => props.theme.white};

    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .subtitle {
    font-size: 1.1rem;
    opacity: 0.7;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: ${(props) => props.theme['base-span']};

      position: relative;
      display: inline-block;

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme['base-span']};
        transition: width 0.3s ease-in-out;
      }

      :hover::after {
        width: 100%;
      }
    }
  }
`

export const NavlinkAboutMe = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 10px;

  cursor: pointer;
`

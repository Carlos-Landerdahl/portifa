import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17, 33, 49);
  background: linear-gradient(
    45deg,
    rgba(17, 33, 49, 0.7935674758184523) 0%,
    rgba(7, 20, 34, 1) 100%
  );
  backdrop-filter: blur(3px);

  transition: 0.5s;
  transform: translateY(50px);

  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 23px;
    right: 27px;
    transform: rotate(45deg);
    transition: 0.7s;

    &:hover {
      color: ${(props) => props.theme['red-300']};
      transition: 0.2s;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    transform: scale(0.6);
    transition: 0.7s;

    > a {
      text-decoration: none;
      cursor: pointer;
      color: ${(props) => props.theme['base-text']};
      font-size: 1.1rem;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`

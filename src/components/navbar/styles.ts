import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;

  padding: 1.5rem 20px;
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-text']};

  svg {
    display: none;
  }

  .listItems {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: ${(props) => props.theme['base-text']};
      position: relative;
      display: inline-block;
      padding-bottom: 5px;

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

  @media (max-width: 768px) {
    .listItems {
      display: none;
    }
    svg {
      display: flex;
      cursor: pointer;
    }
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`

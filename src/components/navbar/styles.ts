import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 2rem;
  background-color: transparent;
  color: ${(props) => props.theme['base-text']};

  position: sticky;

  svg {
    display: none;
  }

  .listItems {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      cursor: pointer;
      color: ${(props) => props.theme['base-text']};
      font-size: 1.1rem;
      transition: all ease-in-out 0.1s;

      :hover {
        transform: scale(105%);
        color: rgba(255, 255, 255, 0.6);
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

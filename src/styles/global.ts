import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['base-post']};
  }
  ::-webkit-scrollbar {
      width: 12px;
      background: ${(props) => props.theme['base-input']};
  }
  ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['base-span']};
  }

  :focus {
      outline: 0;
    }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.h2`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`

export const SmallPrint = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme['base-span']};
`

import { createGlobalStyle, css } from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
      color: ${theme.colors.type.primary};
      overflow-x: hidden;
    }

    body {
      font-family: ${theme.font.family.body};
      font-size: ${theme.font.sizes.text.body1};
      ${!removeBg &&
      css`
        background: ${theme.colors.background.gradient.primary};
      `}
    }
  `}

`

export default GlobalStyles

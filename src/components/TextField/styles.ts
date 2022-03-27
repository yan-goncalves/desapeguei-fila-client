import { darken, TextField as MuiTextField } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const TextField = styled(MuiTextField)`
  ${({ theme, error }) => css`
    && {
      position: 'relative';
      width: 100%;
      background-color: #859eaa;
      height: 5.5rem;
      border-radius: 1rem;
      transition: box-shadow 0.3s cubic-bezier(0.4, 0, 1, 1);

      ${error &&
      css`
        border: 0.1rem solid ${darken(theme.colors.ui.error.dark, 0.35)};
      `}

      > div {
        border-radius: 1rem;
      }

      fieldset {
        border: none;
      }

      &:focus-within {
        ${!error
          ? css`
              box-shadow: 0 0 1.5rem ${theme.colors.accent};
            `
          : css`
              box-shadow: 0 0 1.5rem ${darken(theme.colors.ui.error.dark, 0.35)};
            `}
      }
    }
  `}
`

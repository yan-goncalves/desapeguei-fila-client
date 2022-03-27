import { darken, TextField as MuiTextField } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const TextField = styled(MuiTextField)`
  ${({ theme, error }) => css`
    && {
      font-size: ${theme.font.sizes.text.body1};
      background-color: #859eaa;
      border-radius: 1rem;
      color: ${theme.colors.background.dark};
      border: none;
      transition: box-shadow 0.3s cubic-bezier(0.4, 0, 1, 1);

      & .MuiAutocomplete-endAdornment {
        margin-top: 0.3rem;
      }

      ${
        error &&
        css`
          border: 0.1rem solid ${darken(theme.colors.ui.error.dark, 0.35)};
        `
      }

      & label {
        color: ${theme.colors.secondary.dark};
        font-size: ${theme.font.sizes.text.body1} !important;

        &.Mui-focused,
        &.MuiInputLabel-shrink {
          color: ${theme.colors.primary.light};
        }

        ${
          error &&
          css`
            color: ${theme.colors.secondary.dark};
          `
        }
      }

      & > div {
        height: 100%;
        background: transparent;

        &:before,
        &:after {
          display: none;
        }

        & > input {
          height: 100%;
          background: transparent;
          font-size: ${theme.font.sizes.text.body1};
          border-radius: 1rem;
          color: ${theme.colors.type.secondary};

          &:disabled {
            cursor: not-allowed;
            color: ${darken(theme.colors.ui.gray.light, 0.025)};
          }

        }
      }

      &:disabled {
        cursor: not-allowed;
        color: ${darken(theme.colors.ui.gray.light, 0.025)};

        & label {
          color: ${darken(theme.colors.ui.gray.light, 0.025)};
        }
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:focus-within {
        ${
          !error
            ? css`
                box-shadow: 0 0 1.5rem ${theme.colors.accent};
              `
            : css`
                box-shadow: 0 0 1.5rem
                  ${darken(theme.colors.ui.error.dark, 0.35)};
              `
        }
    }
  `}
`

import { darken, lighten } from '@material-ui/core'
import MaskedInput from 'react-text-mask'
import styled, { css } from 'styled-components'

export const TextFieldMask = styled(MaskedInput)`
  ${({ theme }) => css`
    && {
      font-size: ${theme.font.sizes.text.body1};
      background: transparent;
      margin-top: 0.3rem;
      border-radius: 1rem;
      color: ${theme.colors.background.dark};
      border: none;
      padding: 1.4rem;

      & + span.placeholder {
        position: absolute;
        top: 2rem;
        left: 1.5rem;
        transform-origin: 0 0;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;
        pointer-events: none;
        font-size: 1.6rem;
        font-family: ${theme.font.family.body};
        color: ${theme.colors.secondary.dark};
      }

      &:not(:placeholder-shown) + span.placeholder {
        color: ${theme.colors.primary.light};
        font-weight: 500;
        transform: translate3d(0, -1rem, 0) scale(0.75);
      }

      &:not(:placeholder-shown) {
        margin-top: 0.9rem;
      }

      &::placeholder {
        display: none;
      }

      &:focus {
        outline: none;
        caret-color: ${theme.colors.accent};

        &::placeholder {
          display: none;
        }
      }

      &:disabled {
        cursor: not-allowed;
        color: ${darken(theme.colors.ui.gray.light, 0.025)};
      }

      &:disabled + span.placeholder {
        color: ${lighten(theme.colors.primary.main, 0.6)};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  `}
`

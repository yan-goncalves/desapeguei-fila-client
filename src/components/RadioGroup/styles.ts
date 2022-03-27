import {
  darken,
  FormControlLabel as MuiFormControlLabel,
  Grid,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  TextField as MuiTextField
} from '@material-ui/core'
import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const RadioGroup = styled(MuiRadioGroup)`
  ${({ theme }) => css`
    && {
      width: 100%;
      label {
        font-family: ${theme.font.family.body};
        font-size: ${theme.font.sizes.heading.h1};
      }
    }
  `}
`

export const Wrapper = styled(Grid)<{ error?: number }>`
  ${({ theme, error = false }) => css`
    border-radius: 2rem;
    transition: box-shadow 0.15s cubic-bezier(0.4, 0, 1, 1);

    ${!!error &&
    css`
      border: 0.1rem solid ${theme.colors.ui.error.dark};
      background-color: inherit;
      box-shadow: 0 0 1.5rem ${darken(theme.colors.ui.error.dark, 0.35)};
    `}
  `}
`

export const WhenChecked = styled.div`
  && {
    max-width: 20rem;
    margin-left: 1.5rem;

    ${customMedia.lessThan('tablet')`
      max-width: 100%;
      width: calc(50% - 6.5rem);
      margin-left: 3.25rem;
    `}

    ${customMedia.lessThan('mobile')`
      max-width: 100%;
      width: calc(100% - 6.5rem);
      margin-left: 3.25rem;
    `}
  }
`

export const FormControlLabel = styled(MuiFormControlLabel)`
  ${({ theme, disabled }) => css`
    && {
      margin: 0;

      span {
        color: ${theme.colors.type.secondary};
        font-size: ${theme.font.sizes.text.body1};
      }
      ${!!disabled &&
      css`
        cursor: not-allowed !important;
      `}
    }
  `}
`

export const Radio = styled(MuiRadio)`
  ${({ theme }) => css`
    && {
      &.Mui-checked {
        span > div > svg:nth-child(1) {
          border-radius: 50%;
          box-shadow: 0 0 0.5rem ${theme.colors.accent};
          border: 0.05rem solid ${theme.colors.accent};
          filter: drop-shadow(0 0 0.1rem ${theme.colors.accent});
        }
      }

      span > div > svg:nth-child(2) {
        color: ${theme.colors.accent};
      }
    }
  `}
`

export const TextField = styled(MuiTextField)`
  ${({ theme, error, disabled }) => css`
    && {
      div {
        font-size: ${theme.font.sizes.text.body2};

        ${!!error &&
        css`
          caret-color: ${darken(theme.colors.ui.error.dark, 0.35)};
          &::after {
            border-bottom-color: ${darken(
              theme.colors.ui.error.dark,
              0.35
            )} !important;
          }
        `}

        &::before {
          border-bottom: 0.1rem solid ${theme.colors.type.secondary};
        }

        &::after {
          border-bottom: 2px solid ${theme.colors.accent};
        }

        &:hover {
          &::before {
            border-bottom-color: ${theme.colors.type.secondary};
          }
        }
      }

      input {
        ${!!disabled &&
        css`
          cursor: not-allowed !important;
        `}
      }

      ${customMedia.lessThan('tablet')`
        width: 100%;
      `}
    }
  `}
`
export const GridRadioWrapper = styled(Grid)`
  && {
    align-items: flex-start;

    ${customMedia.lessThan('tablet')`
      flex-direction: column;
    `}
  }
`

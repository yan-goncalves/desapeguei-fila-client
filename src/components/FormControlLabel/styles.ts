import { FormControlLabel as MuiFormControlLabel } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const FormControlLabel = styled(MuiFormControlLabel)`
  ${({ theme }) => css`
    && {
      span {
        color: ${theme.colors.type.secondary};
        font-size: ${theme.font.sizes.text.body1};
      }

      & .MuiIconButton-label {
        div {
          svg {
            color: ${theme.colors.accent};
          }
        }
      }
    }
  `}
`

import { Button as MuiButton, ButtonProps, darken } from '@material-ui/core'
import styled, { css } from 'styled-components'

const Button = styled(MuiButton)<Omit<ButtonProps, 'color'>>`
  ${({ theme, size = 'medium' }) => css`
    && {
      transition: background 0.15s, box-shadow 0.15s,
        transform 0.15s cubic-bezier(0.4, 0, 1, 1) 0ms;
      color: ${theme.colors.type.secondary};
      background: ${theme.colors.background.gradient.third};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.button[size]};
      height: ${theme.heights.button[size]};
      padding-left: ${theme.spacings.button[size]};
      padding-right: ${theme.spacings.button[size]};
      border-radius: ${theme.border.radius.button[size]};
      /* box-shadow: 0 0 0.5rem 0 ${theme.colors.primary.main}; */
      box-shadow: none;

      &:hover {
        transform: scale(1.05) translateZ(0);
        box-shadow: 0 0 0.25rem 0 ${theme.colors.primary.main};
        /* background: ${darken(theme.colors.accent, 0.05)} !important; */
      }

      &:active {
        transform: scale(0.9) translateZ(0);
        box-shadow: 0 0 1rem 0 ${theme.colors.primary.main};
      }
    }
  `}
`

export default Button

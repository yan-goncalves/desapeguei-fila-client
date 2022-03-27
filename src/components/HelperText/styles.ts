import { darken } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { HelperTextProps } from '.'

export const Wrapper = styled.div<Pick<HelperTextProps, 'type'>>`
  ${({ theme, type }) => css`
    font-weight: 600;
    font-size: ${theme.font.sizes.text.caption};
    margin-top: 1rem;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }

    ${type === 'error' &&
    css`
      color: ${darken(theme.colors.ui.error.dark, 0.35)};
    `}
  `}
`

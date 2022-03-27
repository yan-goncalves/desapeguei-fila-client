import { Grid as MuiGrid } from '@material-ui/core'
import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Grid = styled(MuiGrid)`
  ${customMedia.greaterThan('mobile')`
    justify-content: flex-start;
  `}
`

export const Strong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
  `}
`

import { Grid } from '@material-ui/core'
import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'
import { SectionProps } from '.'

export const Wrapper = styled(Grid)`
  margin-top: 20rem;
`

export const Title = styled.h4<Pick<SectionProps, 'spacing'>>`
  ${({ theme, spacing }) => css`
    font-size: ${theme.font.sizes.heading.h4};
    font-weight: bold;
    text-align: center;
    /* max-width: 65rem; */

    ${!!spacing &&
    css`
      padding-bottom: ${spacing}rem;
    `}

    ${customMedia.lessThan('mobile')`
      margin-bottom: -3rem;
    `}
  `}
`

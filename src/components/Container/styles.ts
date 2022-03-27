import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'
import { ContainerProps } from '.'

export const Wrapper = styled.section<Omit<ContainerProps, 'children'>>`
  ${({ theme, paddingTop, paddingTopOnTablet, paddingTopOnMobile }) => css`
    max-width: ${theme.grid.desktop.width};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.grid.desktop.padding};
    padding-right: ${theme.grid.desktop.padding};
    padding-top: ${Number(paddingTop) || 2}rem !important;

    ${customMedia.lessThan('tablet')`
      max-width: ${theme.grid.tablet.width};
      padding-top: ${Number(paddingTopOnTablet) || 1.5}rem !important;
      padding-left: ${theme.grid.tablet.padding};
      padding-right: ${theme.grid.tablet.padding};
    `}

    ${customMedia.lessThan('mobile')`
      max-width: ${theme.grid.mobile.width};
      padding-top: ${Number(paddingTopOnMobile) || 1}rem !important;
      padding-left: ${theme.grid.mobile.padding};
      padding-right: ${theme.grid.mobile.padding};
    `}
  `}
`

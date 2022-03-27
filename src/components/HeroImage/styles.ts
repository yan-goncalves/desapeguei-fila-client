import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.div`
  overflow: hidden;
  max-height: 65rem;
  transform: rotate(12deg);

  ${customMedia.lessThan('tablet')`
    max-height: 45rem;
    height: auto;
  `}

  ${customMedia.lessThan('mobile')`
    max-height: 38rem;
    height: auto;
  `}
`

type BackgroundProps = {
  top?: number
  width?: number
  height?: number
}

export const Background = styled.div<BackgroundProps>`
  ${({ theme, top = 150, width = 50, height = 50 }) => css`
    position: absolute;
    top: ${top}px;
    right: 45px;
    /* background: ${theme.colors.type.primary}; */
    background: linear-gradient(
      145deg,
      ${theme.colors.accent}88 0%,
      rgba(190, 227, 82, 0.35) 80%
    );
    border-radius: 3rem;
    width: ${width}rem;
    height: ${height}rem;
    /* box-shadow: 0px 24px 48px #f8bdd1, 0px 0px 4px #f8bcd1; */
    /* opacity: 0.5; */

    ${customMedia.lessThan('tablet')`
      right: 20px;
      top: calc(${top}px - 8rem);
      width: calc(${width}rem - 14rem);
      height: calc(${height}rem - 12rem);
    `}

    ${customMedia.lessThan('mobile')`
      width: calc(${width}rem - 21rem);
      height: calc(${height}rem - 19rem);
    `}
  `}
`

export const MainImage = styled.img`
  margin-top: -5rem !important;
  margin-right: -1rem !important;
  max-height: 75rem;
  transform: rotate(-12deg);

  ${customMedia.lessThan('tablet')`
    margin-top: -7.5rem !important;
    margin-right: -2.5rem !important;
    max-height: 55rem;
    height: auto;
  `}

  ${customMedia.lessThan('mobile')`
    margin-top: -5rem !important;
    margin-right: -2rem !important;
    max-height: 45rem;
    height: auto;
  `}
`

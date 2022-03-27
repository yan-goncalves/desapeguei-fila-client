import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 20rem;

    &::before {
      position: absolute;
      left: 0;
      z-index: -1;
      content: '';
      width: 100vw;
      height: 35rem;
      background: ${theme.colors.primary.light};
      background-size: cover;
      transform: skewY(-3deg);

      ${customMedia.lessThan('mobile')`
        transform: skewY(-5deg);
        margin-top: 10rem;
        height: 25rem;
      `}
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h4};

    span {
      color: ${theme.colors.accent};
    }
  `}
`

export const Subtitle = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h5};
    font-weight: normal;
  `}
`

export const GridWrapper = styled.div`
  margin-top: 4.5rem;
  justify-content: space-evenly;
  display: flex;
  flex: 1 0 auto;
`
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  height: 100%;
`
export const GridSeparator = styled.div`
  width: 10rem;
  max-height: 20rem;
  margin: 0;
  background-image: url('/img/separator.png');
  background-size: 10rem;
  background-repeat: no-repeat;
  background-position: center center;

  ${customMedia.lessThan('mobile')`
    max-height: 10rem;
    max-width: 5rem;
    background-size: 4rem;
  `}
`

export const Image = styled.img`
  margin: 0 auto;
  max-height: 20rem;

  ${customMedia.lessThan('mobile')`
    max-height: 10rem;
  `}
`

export const Text = styled.h5`
  ${({ theme }) => css`
    margin: 0 auto;
    font-size: ${theme.font.sizes.heading.h5};
    font-weight: 500;
    max-width: 18rem;

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.text.body1};
    `}
  `}
`

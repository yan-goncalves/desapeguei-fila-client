import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
`

export const Image = styled.img`
  width: 2rem;
  height: 2rem;

  ${customMedia.lessThan('mobile')`
    width: 1.5rem;
    height: 1.5rem;
  `}
`

export const Heading = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h6};
    background: -webkit-linear-gradient(
      260deg,
      #bc1888 20%,
      #cc2366 40%,
      #dc2743 60%,
      #e6683c 80%,
      #f58529 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 1rem;
    text-decoration: none;
    font-weight: 700;

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.text.caption};
      margin-left: 0.5rem;
    `}
  `}
`

export const SubHeading = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.text.overline};
    font-weight: 600;
    letter-spacing: 0.15rem;

    & span {
      font-size: ${theme.font.sizes.text.body1};
      color: ${theme.colors.accent};
    }

    ${customMedia.lessThan('mobile')`
      font-size: 0.6rem;

      & span {
        font-size: ${theme.font.sizes.text.overline};
      }
    `}
  `}
`

import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 2rem;
  text-align: center;
`

export const Heading = styled.h4`
  ${({ theme }) => css`
    && {
      font-size: ${theme.font.sizes.heading.h4};
      & strong {
        color: ${theme.colors.accent};
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 5rem 2rem;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
      padding: 1rem;
      text-align: center;
      font-size: ${theme.font.sizes.heading.h5};

      &:last-child {
        padding-top: 3rem;
      }

      & span {
        color: green;
        font-size: ${theme.font.sizes.heading.h4};
        margin-left: 1rem;
      }
    }

    ${customMedia.lessThan('mobile')`
      margin: 2.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      & p {
        padding: 1rem;
        text-align: center;
        font-size: ${theme.font.sizes.heading.h6};

        &:last-child {
          padding-top: 3rem;
        }

        & span {
          color: green;
          font-size: ${theme.font.sizes.heading.h5};
          margin-left: 1rem;
        }
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    font-weight: 500;

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.text.caption};
    `}
  `}
`

import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'
import { CardProps } from '.'

export const Wrapper = styled.div<Pick<CardProps, 'fullWidth'>>`
  ${({ theme, fullWidth }) => css`
    position: relative;
    display: grid;
    ${fullWidth &&
    css`
      grid-template-rows: ${theme.font.sizes.heading.h4} 1fr;
    `}
    grid-template-columns: 1fr;
    justify-content: space-between;
    text-align: ${!fullWidth && 'center'};
    width: ${fullWidth ? '100%' : 'auto'};
    min-width: 30rem;
    /* min-height: 35rem; */
    height: 100%;
    box-shadow: 0 1.6rem 3.2rem -0.4rem rgba(236, 64, 122, 0.25),
      0 0 0.2rem rgba(236, 64, 122, 0.5);
    border-radius: ${theme.border.radius.card};
    padding: 2rem 2rem 3rem;
    background: ${theme.colors.background.dark};

    ${customMedia.lessThan('mobile')`
      width: 36rem;
    `}

    ${!fullWidth &&
    css`
      transform-style: preserve-3d;
    `}

    ${fullWidth &&
    css`
      background: ${theme.colors.background.gradient.secondary};
      box-shadow: 0 2.4rem 4.8rem 0 rgba(218, 169, 210, 0.5),
        0 0 0.4rem 0 rgba(248, 189, 209, 0.5);

      ${customMedia.greaterThan('tablet')`
        min-width: 100%;
        min-height: 40rem;

        ${TextWrapper} {
          margin-left: 5rem;
          width: 45%;

          ${Subtitle} {
            text-indent: 5rem;
          }
        }

        ${ImageWrapper} {
          top: 50%;
          left: 25%;
          right: 10rem;
          transform: translate(35%, -50%);
          position: absolute;
        }

        ${Image} {
          width: 85%;
        }
      `}

      ${customMedia.between('mobile', 'tablet')`
        min-width: 100%;
        min-height: 40rem;

        ${TextWrapper} {
          margin-left: 5rem;
          width: 40%;

          ${Title},
          ${Subtitle},
          ${Overline} {
            text-align: left;
            text-indent: 0;
          }
        }

        ${ImageWrapper} {
          top: 50%;
          left: 15%;
          transform: translate(35%, -50%);
          position: absolute;
        }

        ${Image} {
          width: 80%;
        }
      `}

      ${customMedia.lessThan('mobile')`
        max-width: 36rem;

        ${ImageWrapper} {
          text-align: center;
          padding: 3rem;
        }

        ${Image} {
          width: 80%;
        }

        ${TextWrapper} {
          text-align: center;
        }
      `}
    `}
  `}
`

export const NumberBox = styled.p`
  ${({ theme }) => css`
    text-align: center;
    align-items: center;
    background: ${theme.colors.accent};
    border-radius: 50%;
    height: fit-content;
    width: ${theme.font.sizes.heading.h4};
    line-height: ${theme.font.sizes.heading.h4};
    box-shadow: 0 0.4rem 0.8rem rgba(236, 64, 122, 0.5);
    color: ${theme.colors.type.secondary};
    margin-left: 0.5rem;
    transform: translateZ(3rem);
  `}
`

export const ImageWrapper = styled.div`
  height: fit-content;
  transform: translateZ(4.5rem);
`

export const Image = styled.img`
  height: 75%;
`

export const TextWrapper = styled.div`
  display: grid;
  line-break: normal;
  overflow: hidden;
  transform: translateZ(3rem);
`

export const Title = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h5};
    margin-bottom: 1rem;
  `}
`

export const Subtitle = styled.h6`
  ${({ theme }) => css`
    color: ${theme.colors.type.primaryLight};
    font-size: ${theme.font.sizes.heading.h6};
    font-weight: normal;
  `}
`

export const OverlineWrapper = styled.div`
  height: 100%;
  display: grid;
  padding-top: 5rem;
  align-content: flex-end;
  font-weight: 500;

  ${customMedia.lessThan('tablet')`
    padding-top: 4rem;
  `}
`

export const Overline = styled.p`
  ${({ theme }) => css`
    display: grid;
    align-self: flex-end;
    max-width: 40rem;
    font-size: ${theme.font.sizes.text.body2};
  `}
`

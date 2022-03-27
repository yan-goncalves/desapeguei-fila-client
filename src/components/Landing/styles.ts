import { Grid as MuiGrid } from '@material-ui/core'
import { default as StandardButton } from 'components/Button'
import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Grid = styled(MuiGrid)`
  ${({ theme, direction }) => css`
    min-height: calc(100vh - 14rem);

    ${direction === 'row'
      ? css`
          grid-column-gap: ${theme.grid.desktop.gutter};

          ${customMedia.lessThan('desktop')`
            grid-column-gap: ${theme.grid.tablet.gutter};
          `}

          ${customMedia.lessThan('tablet')`
            height: 100%;
            grid-column-gap: ${theme.grid.mobile.gutter};
          `}
        `
      : css`
          grid-row-gap: ${theme.grid.desktop.gutter};

          ${customMedia.lessThan('desktop')`
            grid-row-gap: ${theme.grid.tablet.gutter};
          `}

          ${customMedia.lessThan('tablet')`
            height: fit-content;
            grid-row-gap: ${theme.grid.mobile.gutter};
          `}
        `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    && {
      margin-top: 10rem;
      font-size: ${theme.font.sizes.heading.h3};
      font-weight: 500;

      span {
        font-weight: 700;

        :last-child {
          color: ${theme.colors.accent};
        }
      }

      ${customMedia.lessThan('tablet')`
        margin-top: 0;
        text-align: justify;
        letter-spacing: -1.25px;
        font-size: ${theme.font.sizes.heading.h4};
        max-width: 100%;
      `}
    }
  `}
`

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    && {
      display: inline-flex;
      font-size: ${theme.font.sizes.heading.h5};
      text-align: left;
      font-weight: 800;
      margin-top: 2rem;
      border-radius: 2rem;
      /* width: 100%; */
      background-image: linear-gradient(
        26deg,
        ${theme.colors.primary.light},
        ${theme.colors.primary.main}
      );
      box-shadow: 0 0 1rem ${theme.colors.primary.light};
      padding: 1rem 1.5rem;

      p {
        color: ${theme.colors.type.secondary};
      }

      span {
        color: ${theme.colors.accent};
        border-radius: 2rem;
        margin-left: 0.5rem;
        background-color: ${theme.colors.accent};
        font-size: ${theme.font.sizes.heading.h5};
      }

      ${customMedia.lessThan('mobile')`
        padding: 1rem 0.5rem;
        width: 92%;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.5rem;
      `}
    }
  `}
`

export const Button = styled(StandardButton)`
  ${({ theme }) => css`
    && {
      margin-top: 5rem;

      ${customMedia.lessThan('mobile')`
        font-size: ${theme.font.sizes.button.small};
        height: ${theme.heights.button.large};
        padding-left: ${theme.spacings.button.medium};
        padding-right: ${theme.spacings.button.medium};
        border-radius: ${theme.border.radius.button.large};
        margin: 5rem auto;
        justify-self: center;
        align-self: center;
        width: 100%;
      `}
    }
  `}
`

import {
  CircularProgress as MuiCircularProgress,
  darken,
  Grid,
  Radio as MuiRadio
} from '@material-ui/core'
import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    border-radius: 4rem;
    background-color: ${theme.colors.background.form};
    padding: 5rem 10rem;

    ${customMedia.lessThan('tablet')`
      padding: 4rem 5rem;
    `}

    ${customMedia.lessThan('mobile')`
      padding: 1rem;
    `}
  `}
`

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    margin: 1rem 1rem 0;
    background-color: ${theme.colors.secondary.main}33;
    padding: 2.5rem 8rem;
    border-radius: 4rem;

    ${customMedia.lessThan('tablet')`
      padding: 2rem 6rem;
      border-radius: 3.5rem;
    `}

    ${customMedia.lessThan('mobile')`
      padding: 1.5rem 2rem;
      border-radius: 3rem;
    `}
  `}
`

export const HeadingTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h4};
    font-weight: bold;
    text-shadow: 0 0.4rem 1rem rgba(51, 51, 51, 0.35);

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.heading.h5};
    `}
  `}
`

export const CircularProgress = styled(MuiCircularProgress)`
  ${({ theme }) => css`
    position: absolute;
    align-self: center;
    left: 100%;
    color: ${darken(theme.colors.accent, 0.25)} !important;
  `}
`

export const HeadingSubtitle = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.heading.h6};
    color: ${theme.colors.secondary.dark};

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.text.body1};
    `}
  `}
`

export const SectionWrapper = styled.section`
  padding: 5rem 8rem 0rem;

  ${customMedia.lessThan('tablet')`
    padding: 3.75rem 5rem;
  `}

  ${customMedia.lessThan('mobile')`
    padding: 2.5rem 2rem;
  `}
`
export const InputWrapper = styled.div`
  margin-top: 2.5rem;
`

export const Caption = styled.h6`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-size: ${theme.font.sizes.text.body1};
    font-weight: 500;
    text-shadow: 0 0.4rem 0.4rem rgba(68, 68, 68, 0.2);
  `}
`

export const Radio = styled(MuiRadio)``

export const Tamanhos = styled(Grid)<{ error?: number }>`
  ${({ theme, error = 0 }) => css`
    margin-top: 1rem !important;
    margin-bottom: 0 !important;
    border-radius: 2rem;
    transition: box-shadow 0.15s cubic-bezier(0.4, 0, 1, 1);
    ${!!error &&
    css`
      border: 0.1rem solid ${theme.colors.ui.error.dark};
      box-shadow: 0 0 1.5rem ${darken(theme.colors.ui.error.dark, 0.35)};
    `};
  `}
`

export const SectionTitle = styled.section<{
  color: 'main' | 'light' | 'dark'
}>`
  ${({ theme, color = 'main' }) => css`
    font-size: ${theme.font.sizes.heading.h6};
    font-weight: 500;
    text-shadow: 0 0.4rem 0.4rem rgba(51, 51, 51, 0.35);

    &::before {
      content: '';
      border-left: 0.3rem solid ${theme.colors.primary[color]};
      margin-right: 0.5rem;

      ${customMedia.lessThan('tablet')`
        margin-right: 0.75rem;
      `}

      ${customMedia.lessThan('mobile')`
        margin-right: 0.5rem;
      `}
    }

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.text.body1};
    `}
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.dark};
    font-size: ${theme.font.sizes.heading.h3};
    text-shadow: 0 0.8rem 1.6rem rgba(145, 158, 171, 0.7);
    font-weight: 800;
    text-align: center;

    span {
      color: ${theme.colors.accent};
      text-shadow: 0 0.8rem 1.6rem rgba(266, 64, 122, 0.25);
    }

    ${customMedia.lessThan('mobile')`
      font-size: 3.2rem;
    `}
  `}
`

export const SubHeading = styled(Heading)`
  ${({ theme }) => css`
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: ${theme.font.sizes.heading.h4};

    ${customMedia.lessThan('mobile')`
      font-size: ${theme.font.sizes.heading.h5};
    `}
  `}
`

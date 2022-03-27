import styled, { css } from 'styled-components'
import customMedia from 'utils/customMedia'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 15rem;
  background: linear-gradient(
    180deg,
    #fce4ec 0%,
    #fce4ec 49.48%,
    rgba(252, 228, 236, 0) 100%
  );
  background-size: cover;
  padding: 5rem 0rem;

  ${customMedia.lessThan('mobile')`
    padding-top: 0;
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

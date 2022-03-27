import styled, { css } from 'styled-components'

export const Icon = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.4rem;
    border: 0.2rem solid ${theme.colors.type.secondary};

    @keyframes checkboxFadeIn {
      from {
        transform: rotate(45deg) scale(0);
      }
      to {
        transform: rotate(45deg) scale(1);
      }
    }

    @keyframes checkboxFadeOut {
      from {
        transform: rotate(45deg) scale(1);
      }
      to {
        transform: rotate(45deg) scale(0);
      }
    }

    &:before {
      position: absolute;
      content: '';
      top: -0.6rem;
      left: 0.6rem;
      width: 0.8rem;
      height: 1.5rem;
      border: 0.3rem solid ${theme.colors.accent};
      border-top: 0;
      border-left: 0;
      animation: 300ms checkboxFadeOut forwards;
    }
  `}
`

export const CheckedIcon = styled(Icon)`
  ${({ theme }) => css`
    box-shadow: 0 0 0.5rem 0.2rem ${theme.colors.accent};

    &:before {
      animation: 300ms checkboxFadeIn forwards;
    }
  `}
`

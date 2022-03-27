import { Radio as MuiRadio } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Radio = styled(MuiRadio)`
  ${({ theme }) => css`
    && {
      svg {
        font-size: ${theme.font.sizes.heading.h6};
      }
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 0.2rem solid ${theme.colors.type.secondary};

    @keyframes radioFadeIn {
      from {
        transform: translate(-50%, -50%) scale(0);
      }
      to {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    @keyframes radioFadeOut {
      from {
        transform: translate(-50%, -50%) scale(1);
      }
      to {
        transform: translate(-50%, -50%) scale(0);
      }
    }

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 0.8rem;
      height: 0.8rem;
      transform: translate(-50%, -50%) scale(0);
      background-color: ${theme.colors.accent};
      border-radius: 50%;
      animation: 300ms radioFadeOut forwards;
    }
  `}
`

export const CheckedIcon = styled(Icon)`
  ${({ theme }) => css`
    box-shadow: 0 0 0.5rem 0.2rem ${theme.colors.accent};

    &:before {
      animation: 300ms radioFadeIn forwards;
    }
  `}
`

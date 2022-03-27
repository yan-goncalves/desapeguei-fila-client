import { forwardRef, ForwardRefRenderFunction } from 'react'
import * as S from './styles'

export type ContainerProps = {
  children: React.ReactNode
  paddingTop?: number
  paddingTopOnTablet?: number
  paddingTopOnMobile?: number
}

const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  { children, paddingTop, paddingTopOnTablet, paddingTopOnMobile },
  ref
) => (
  <S.Wrapper
    ref={ref}
    paddingTop={paddingTop}
    paddingTopOnTablet={paddingTopOnTablet}
    paddingTopOnMobile={paddingTopOnMobile}
  >
    {children}
  </S.Wrapper>
)

export default forwardRef(Container)

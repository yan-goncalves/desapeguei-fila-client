import { Grid } from '@material-ui/core'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import * as S from './styles'

export type SectionProps = {
  id?: string
  title?: React.ReactNode
  children: React.ReactNode
  spacing?: number
  textAlignLeft?: boolean
}

const Section: ForwardRefRenderFunction<HTMLDivElement, SectionProps> = (
  { id, title, spacing = 0, textAlignLeft, children },
  ref
) => (
  <S.Wrapper id={id} ref={ref} container spacing={6} justifyContent={'center'}>
    <Grid
      item
      container
      justifyContent={textAlignLeft ? 'flex-start' : 'center'}
    >
      {title && <S.Title spacing={spacing}>{title}</S.Title>}
    </Grid>
    {children}
  </S.Wrapper>
)

export default forwardRef(Section)

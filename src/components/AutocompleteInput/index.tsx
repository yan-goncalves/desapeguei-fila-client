import { TextFieldProps } from '@material-ui/core'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import * as S from './styles'

const AutocompleteInput: ForwardRefRenderFunction<
  HTMLDivElement,
  TextFieldProps & { error?: boolean }
> = (props, ref) => (
  <S.TextField
    {...props}
    label={props.placeholder}
    placeholder={undefined}
    variant={'filled'}
    ref={ref}
    style={{ width: '100%' }}
  />
)

export default forwardRef(AutocompleteInput)

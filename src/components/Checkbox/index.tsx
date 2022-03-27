import { Checkbox as MuiCheckbox, CheckboxProps } from '@material-ui/core'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import * as S from './styles'

const Checkbox: ForwardRefRenderFunction<HTMLButtonElement, CheckboxProps> = (
  props,
  ref
) => {
  return (
    <MuiCheckbox
      {...props}
      ref={ref}
      icon={<S.Icon />}
      checkedIcon={<S.CheckedIcon />}
    />
  )
}
export default forwardRef(Checkbox)

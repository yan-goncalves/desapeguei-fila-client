/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TextFieldMask, { TextFieldMaskProps } from 'components/TextFieldMask'
import { ChangeEventHandler, forwardRef, ForwardRefRenderFunction } from 'react'
import { ChangeHandler } from 'react-hook-form'
import * as S from './styles'

const TextField: ForwardRefRenderFunction<
  HTMLDivElement,
  Omit<TextFieldMaskProps, 'inputRef'> & { error?: boolean } & {
    autoFocus?: boolean
  } & {
    onChange?: ChangeHandler | ChangeEventHandler
  }
> = (props, ref) => {
  return (
    <S.TextField
      {...props}
      autoFocus={props.autoFocus}
      variant={'outlined'}
      InputProps={{
        inputComponent: TextFieldMask as any
      }}
      ref={ref}
    />
  )
}

export default forwardRef(TextField)

import MaskedInput from 'react-text-mask'
import * as S from './styles'

export type TextFieldMaskProps = {
  placeholder?: string
  type?: 'text' | 'number' | 'phone' | 'cep'
  disabled?: boolean
  mask?: Array<string | RegExp> | false
  min?: number
  max?: number
  required?: boolean
  inputRef: (ref: HTMLElement | null) => void
}

const TextFieldMask = ({
  inputRef,
  type,
  placeholder,
  disabled,
  min,
  ...props
}: TextFieldMaskProps) => {
  const getMaskByType = () => {
    switch (type) {
      case 'phone':
        // eslint-disable-next-line prettier/prettier
        return [
          '(',
          /[1-9]/,
          /\d/,
          ')',
          ' ',
          /[9]/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]
      case 'cep':
        return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      default:
        return false
    }
  }

  return (
    <>
      <S.TextFieldMask
        {...props}
        ref={(ref: MaskedInput) => inputRef(ref ? ref.inputElement : null)}
        mask={getMaskByType()}
        inputMode={type === 'text' ? 'text' : 'numeric'}
        type={type}
        disabled={disabled}
        placeholder="&nbsp;"
        style={{ width: '100%' }}
        onKeyDown={(e) =>
          type === 'number' && e.key === 'e' && e.preventDefault()
        }
        min={min}
      />

      <span className={'placeholder'}>{placeholder}</span>
    </>
  )
}
export default TextFieldMask

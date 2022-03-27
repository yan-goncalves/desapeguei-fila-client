/* eslint-disable @typescript-eslint/ban-types */
import { Fade } from '@material-ui/core'
import Checkbox from 'components/Checkbox'
import { IFormInputs } from 'components/Form'
import { FormControlLabel } from 'components/FormControlLabel/styles'
import HelperText from 'components/HelperText'
import TextField from 'components/TextField'
import { TextFieldMaskProps } from 'components/TextFieldMask'
import {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect
} from 'react'
import {
  ChangeHandler,
  useFormContext,
  useFormState,
  useWatch
} from 'react-hook-form'
import * as S from './styles'

export type FormControlLabelCheckboxProps = {
  index: number
  label: string
  disabled?: boolean
}

const FormControlLabelCheckbox: ForwardRefRenderFunction<
  HTMLDivElement,
  FormControlLabelCheckboxProps &
    Omit<TextFieldMaskProps, 'inputRef'> & {
      onChange?: ChangeHandler | ChangeEventHandler
    }
> = ({ index, label, disabled, ...props }, ref) => {
  const { register, control, setValue } = useFormContext<IFormInputs>()
  const values = useWatch({
    control
  })
  const { errors } = useFormState<IFormInputs>({ control })

  useEffect(() => {
    if (!values?.tamanhos?.[index]?.checked) {
      setTimeout(() => setValue(`tamanhos.${index}.quantidade`, undefined), 300)
    }
  }, [values?.tamanhos?.[index]?.checked])

  useEffect(() => {
    if (!!values.quantidadeTotal && values.quantidadeTotal < 15) {
      setValue(`tamanhos.${index}.checked`, false)
    }
  }, [values.quantidadeTotal])

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <FormControlLabel
          control={<Checkbox />}
          label={label}
          disabled={disabled}
          style={{ cursor: disabled ? 'not-allowed' : 'auto' }}
          {...register(`tamanhos.${index}.checked`)}
        />
        <Fade
          in={!!values?.tamanhos?.[index]?.checked}
          timeout={300}
          unmountOnExit
          mountOnEnter
        >
          <div>
            <TextField
              {...props}
              disabled={disabled}
              type={'number'}
              placeholder={'Quantidade'}
              min={1}
              error={!!errors.tamanhos?.[index]?.quantidade}
              ref={ref}
              autoFocus
            />
            {errors.tamanhos?.[index]?.quantidade && (
              <HelperText
                type={'error'}
                message={
                  errors?.tamanhos?.[index]?.quantidade?.type === 'number.min'
                    ? 'Quantidade mínima é de 1 peça'
                    : 'Campo obrigatório'
                }
              />
            )}
          </div>
        </Fade>
      </S.InputWrapper>
    </S.Wrapper>
  )
}
export default forwardRef(FormControlLabelCheckbox)

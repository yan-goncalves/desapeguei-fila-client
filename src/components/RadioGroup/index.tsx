import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps
} from '@material-ui/core'
import HelperText from 'components/HelperText'
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useState
} from 'react'
import * as S from './styles'

type Label = {
  label: string
  value?: string
  whenChecked?: boolean
}

export type RadioGroupProps = {
  labels: Label[]
  direction?: 'row' | 'column'
  error?: number
  disabled?: boolean
}

const RadioGroup: ForwardRefRenderFunction<
  HTMLDivElement,
  RadioGroupProps & MuiRadioGroupProps
> = ({ labels, direction = 'row', error, disabled, ...props }, ref) => {
  const [value, setValue] = useState<string>(' ')
  const [inError, setInError] = useState(false)
  const inputRef = useRef<HTMLInputElement>()

  return (
    <MuiRadioGroup
      {...props}
      value={value}
      onChange={(_, newValue) => {
        setInError(false)
        setValue(newValue)
        !!props.onChange && props.onChange(_, newValue)
      }}
      ref={ref}
      style={{ width: '100%', minHeight: '6rem' }}
    >
      <S.Wrapper
        container
        direction={direction}
        spacing={1}
        alignItems={'flex-start'}
        error={error}
      >
        {labels.map(({ label, value: labelValue, whenChecked }) => (
          <S.GridRadioWrapper
            item
            container
            xl={!whenChecked ? 2 : 4}
            lg={!whenChecked ? 2 : 4}
            md={12}
            sm={12}
            xs={12}
            key={label}
          >
            <S.FormControlLabel
              disabled={disabled}
              value={labelValue || label}
              label={label}
              control={<S.Radio />}
            />
            {value === label && whenChecked && (
              <S.WhenChecked>
                <S.TextField
                  autoFocus
                  disabled={disabled}
                  error={inError}
                  inputRef={inputRef}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInError(false)
                    !!props.onChange &&
                      props.onChange(e, inputRef.current?.value || '')
                  }}
                  inputProps={{
                    onInvalid: (e) => {
                      e.preventDefault()
                      e.currentTarget.focus()
                      setInError(true)
                    }
                  }}
                  required
                />
                {inError && <HelperText type={'error'} />}
              </S.WhenChecked>
            )}
          </S.GridRadioWrapper>
        ))}
      </S.Wrapper>
    </MuiRadioGroup>
  )
}
export default forwardRef(RadioGroup)

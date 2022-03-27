/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

export type FormControlLabelProps = {
  value: string
  label: string
  control: React.ReactElement<any, any>
}

const FormControlLabel = ({ label, control }: FormControlLabelProps) => {
  return <S.FormControlLabel key={label} control={control} label={label} />
}

export default FormControlLabel

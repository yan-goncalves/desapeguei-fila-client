import * as FormControlLabelStyles from 'components/FormControlLabel/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 10rem;
  width: 20rem;

  ${FormControlLabelStyles.FormControlLabel} {
    align-self: flex-start;
    margin-left: 0.5rem;
  }

  ${TextFieldStyles.TextField} {
    max-width: 20rem;
  }
`

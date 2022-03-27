import { Fade } from '@material-ui/core'
import { IconAlertTriangle } from '@tabler/icons'
import { useTheme } from 'styled-components'
import * as S from './styles'

export type HelperTextProps = {
  message?: string
  type?: 'text' | 'error' | 'warning'
  noIcon?: boolean
}

const HelperText = ({
  message = 'Campo obrigatório',
  type,
  noIcon
}: HelperTextProps) => {
  const theme = useTheme()

  return (
    <Fade in={true} timeout={500}>
      <S.Wrapper type={type}>
        {!noIcon && (
          <>
            {type === 'error' && (
              <IconAlertTriangle size={theme.font.sizes.text.body2} />
            )}
          </>
        )}

        <span>{message}</span>
      </S.Wrapper>
    </Fade>
  )
}

export default HelperText

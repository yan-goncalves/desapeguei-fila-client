import RegisterSuccessParticles from 'components/RegisterSuccessParticles'
import { useLayoutEffect, useRef } from 'react'
import * as S from './styles'

const RegisterSuccess = () => {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])

  return (
    <S.Wrapper ref={ref}>
      <h1 style={{ fontSize: '7.2rem' }}>👑</h1>
      <S.Heading>
        Você agora faz parte do time{' '}
        <strong style={{ fontWeight: 900 }}>Desapeguei</strong>!
      </S.Heading>
      <S.Content>
        <p>
          Desde já agradecemos pela <strong>confiança</strong> de ter nos
          incluído neste processo.
        </p>
        <p>
          A ideia dessa iniciativa é não deixar{' '}
          <strong>nenhuma peça parada</strong> e fazer com que todos os teus
          desapegos ganhem um <strong>novo destino</strong>. 💗
        </p>
        <p>
          Parabéns por contruibuir com o <strong>consumo consciente</strong> e a{' '}
          <strong>moda sustentável</strong>.<span>♻</span>
        </p>
      </S.Content>
      <S.Footer>
        <p>
          <strong>Você já está em nossa fila, agora é só aguardar!</strong> 😍
        </p>
        <p> Tão logo chegue sua vez, entraremos em contato.</p>
      </S.Footer>
      <RegisterSuccessParticles />
    </S.Wrapper>
  )
}

export default RegisterSuccess

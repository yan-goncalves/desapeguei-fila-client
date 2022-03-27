import * as S from './styles'

type Props = {
  handleTryAgain: () => void
}

const RegisterFailed = ({ handleTryAgain }: Props) => (
  <S.Wrapper>
    <h1 style={{ fontSize: '7.2rem' }}>😢</h1>
    <S.Heading>Oops!</S.Heading>
    <S.Content>
      <p>
        Infelizmente não foi possível realizar seu cadastro agora! Mas{' '}
        <strong>não desanime</strong>. 💪
      </p>
      <p>
        Muito provavelmente estejamos passando por alguma manutenção em nossos
        servidores. 🔨
      </p>
    </S.Content>
    <S.Footer>
      <p>
        Por gentileza, volte novamente mais tarde, ou se deseja tentar novamente
        agora, <span onClick={handleTryAgain}>clique aqui</span>
      </p>
    </S.Footer>
  </S.Wrapper>
)

export default RegisterFailed

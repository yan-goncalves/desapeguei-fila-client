import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.HeadingWrapper>
      <S.Image src={'/img/instagram.png'} />
      <S.Heading
        href={'https://instagram.com/desapeguei_bybruna'}
        target={'_blank'}
      >
        @desapeguei_bybruna
      </S.Heading>
    </S.HeadingWrapper>
    <S.SubHeading>
      MADE WITH <span>❤</span> BY DESAPEGUEI
    </S.SubHeading>
  </S.Wrapper>
)

export default Footer

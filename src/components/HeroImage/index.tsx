import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import * as S from './styles'

const HeroImage = () => {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.from(ref.current, {
      autoAlpha: 0,
      scale: 0.5,
      x: 300,
      duration: 0.5,
      delay: 0.25
    })
  }, [])

  return (
    <S.Wrapper>
      <S.Background />
      <S.Background top={200} width={45} height={45} />
      <S.Background top={250} width={40} height={40} />
      <S.MainImage ref={ref} src={'/img/hero-bruna.png'} />
    </S.Wrapper>
  )
}
export default HeroImage

import Container from 'components/Container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { screenSizes } from 'utils/customMedia'
import * as S from './styles'

gsap.registerPlugin(ScrollTrigger)

const SectionWeManageAll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = gsap.utils.selector(ref)

  useEffect(() => {
    ScrollTrigger.matchMedia({
      [`(max-width: ${screenSizes.mobile})`]: () => {
        gsap.fromTo(
          ref.current,
          {
            autoAlpha: 0,
            y: 100
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: ref.current,
              once: true,
              start: 'top center+=250'
            }
          }
        )
        gsap.fromTo(
          imageRef('img'),
          {
            scale: 0
          },
          {
            scale: 1,
            ease: 'bounce',
            duration: 0.5,
            scrollTrigger: {
              trigger: imageRef('img'),
              once: true,
              start: 'top bottom'
            }
          }
        )
      },

      [`(min-width: ${screenSizes.tablet})`]: () => {
        gsap.fromTo(
          ref.current,
          {
            autoAlpha: 0,
            y: 100
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: ref.current,
              once: true,
              start: 'top bottom'
            }
          }
        )
        gsap.fromTo(
          imageRef('img'),
          {
            scale: 0
          },
          {
            scale: 1,
            ease: 'bounce',
            duration: 0.5,
            scrollTrigger: {
              trigger: imageRef('img'),
              once: true,
              start: 'top bottom'
            }
          }
        )
      }
    })
  }, [])

  return (
    <S.Wrapper>
      <Container ref={ref} paddingTop={2} paddingTopOnMobile={0.01}>
        <S.Title>
          Gerenciamos <span>TUDO</span>
        </S.Title>
        <S.Subtitle>
          Você não se preocupa com <strong>NADA</strong>
        </S.Subtitle>
        <S.GridWrapper>
          <S.GridItem>
            <S.Image src={'/img/contact.png'} />
            <S.Text>Contato com as clientes</S.Text>
          </S.GridItem>
          <S.GridSeparator />
          <S.GridItem>
            <S.Image src={'/img/package.png'} />
            <S.Text>Embalagem</S.Text>
          </S.GridItem>
          <S.GridSeparator />
          <S.GridItem>
            <S.Image src={'/img/deliver.png'} />
            <S.Text>Entrega</S.Text>
          </S.GridItem>
        </S.GridWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default SectionWeManageAll

import Card from 'components/Card'
import Container from 'components/Container'
import Section from 'components/Section'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { screenSizes } from 'utils/customMedia'
import * as S from './styles'

gsap.registerPlugin(ScrollTrigger)

const SectionPayment = () => {
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = gsap.utils.selector(ref)

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
              start: 'top center+=450'
            }
          }
        )
        gsap.fromTo(
          cardRef(`${ref.current?.tagName} > div:first-child`),
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
              start: 'top center+=450'
            },
            stagger: 0.25
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
          cardRef(`${ref.current?.tagName} > div:first-child`),
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
              start: 'top center+=100'
            },
            stagger: 0.25
          }
        )
      }
    })
  }, [])

  return (
    <Container paddingTop={15} paddingTopOnTablet={15} paddingTopOnMobile={15}>
      <Section
        ref={ref}
        title={'Hmmm, e como eu recebo meu pagamento?'}
        spacing={5}
        textAlignLeft
      >
        <S.Grid
          item
          container
          justifyContent={'center'}
          xl={12}
          lg={12}
          md={11}
          sm={12}
          xs={12}
        >
          <Card
            fullWidth
            num={7}
            title={'Pagamento'}
            subtitle={
              <p>
                Conforme os itens são vendidos, sua planilha é atualizada e
                assim vamos combinado o seu pagamento, que pode ser em{' '}
                <S.Strong>DINHEIRO</S.Strong> ou em <S.Strong>APEGOS</S.Strong>.
              </p>
            }
            overline={
              'O pagamento ocorre via depósito bancário e ocorre em média 45 dias após suas postagens.'
            }
            img={'payment'}
          />
        </S.Grid>
      </Section>
    </Container>
  )
}

export default SectionPayment

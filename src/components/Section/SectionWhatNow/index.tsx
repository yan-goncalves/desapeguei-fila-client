import { Grid } from '@material-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import Section from 'components/Section'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { screenSizes } from 'utils/customMedia'

gsap.registerPlugin(ScrollTrigger)

const SectionWhatNow = () => {
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
              start: 'top center+=300'
            }
          }
        )
        cardRef(`${ref.current?.tagName} > div:first-child`).forEach((ref) => {
          gsap.fromTo(
            ref,
            {
              autoAlpha: 0,
              y: 100
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: ref,
                once: true,
                start: 'top center+=400'
              }
            }
          )
        })
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
              start: 'top center+=300'
            },
            stagger: 0.1
          }
        )
      }
    })
  }, [])

  return (
    <Container paddingTop={15} paddingTopOnTablet={15} paddingTopOnMobile={15}>
      <Section ref={ref} spacing={3} title={'Desapegos entregues, e agora?'}>
        <Grid
          item
          container
          justifyContent={'center'}
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <Card
            num={4}
            title={'Avalia????o'}
            subtitle={
              '???Realizaremos uma avalia????o/curadoria dos desapegos, priorizamos itens novos e semi-novos, em ??timo estado de conserva????o, limpeza e atemporais'
            }
            img={'evaluation'}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={'center'}
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <Card
            num={5}
            title={'Valida????o'}
            subtitle={`Informaremos tudo o que for e o que n??o for selecionado.
            Todos desapegos selecionados ser??o planilhados e enviaremos esta planilha para voc?? validar os valores sugeridos para voc??`}
            img={'validation'}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={'center'}
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <Card
            num={6}
            title={'Venda'}
            subtitle={
              '???Ap??s o seu OK ????, iniciaremos as realiza????o das fotos e as postagens de seus desapegos, o valor final a gente que define, mas voc?? n??o precisa se preocupar, pois voc?? ganha o valor que voc?? validou.'
            }
            img={'selling'}
          />
        </Grid>
      </Section>
    </Container>
  )
}

export default SectionWhatNow

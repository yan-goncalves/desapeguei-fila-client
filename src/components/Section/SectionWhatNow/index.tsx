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
            title={'Avaliação'}
            subtitle={
              '️Realizaremos uma avaliação/curadoria dos desapegos, priorizamos itens novos e semi-novos, em ótimo estado de conservação, limpeza e atemporais'
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
            title={'Validação'}
            subtitle={`Informaremos tudo o que for e o que não for selecionado.
            Todos desapegos selecionados serão planilhados e enviaremos esta planilha para você validar os valores sugeridos para você`}
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
              '️Após o seu OK 👌, iniciaremos as realização das fotos e as postagens de seus desapegos, o valor final a gente que define, mas você não precisa se preocupar, pois você ganha o valor que você validou.'
            }
            img={'selling'}
          />
        </Grid>
      </Section>
    </Container>
  )
}

export default SectionWhatNow

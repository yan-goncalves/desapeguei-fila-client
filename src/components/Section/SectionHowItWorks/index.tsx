import { Grid } from '@material-ui/core'
import Card from 'components/Card'
import Container from 'components/Container'
import Section from 'components/Section'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { screenSizes } from 'utils/customMedia'

gsap.registerPlugin(ScrollTrigger)

const SectionHowItWorks = () => {
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
                start: 'top center+=450'
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
    <Container paddingTopOnTablet={10} paddingTopOnMobile={15}>
      <Section id={'howItWorks'} spacing={3} ref={ref} title={'Como funciona?'}>
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
            num={1}
            title={'Seleção'}
            subtitle={'Selecione tudo o que você deseja desapegar'}
            img={'selection'}
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
            num={2}
            title={'Cadastro'}
            subtitle={
              'Preencha o formulário ao final da página com os dados solicitados'
            }
            img={'register'}
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
            num={3}
            title={'Coleta'}
            subtitle={
              'Entraremos em contato para combinarmos a entrega de seus desapegos'
            }
            img={'colect'}
          />
        </Grid>
      </Section>
    </Container>
  )
}
export default SectionHowItWorks

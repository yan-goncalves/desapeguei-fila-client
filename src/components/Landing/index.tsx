import { Grid, Hidden, Typography, useMediaQuery } from '@material-ui/core'
import Container from 'components/Container'
import HeroImage from 'components/HeroImage'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useEffect, useRef } from 'react'
import { down } from 'utils/customMedia'
import * as S from './styles'

gsap.registerPlugin(TextPlugin)

const descriptions = [
  'Gerenciamos desapegos pessoais e de loja.',
  'Da divulgação à entrega.',
  'Aqui a moda é sustentável.'
]

const Landing = () => {
  const descriptionRef = useRef(null)
  const cursorRef = useRef(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRefGridItem = useRef(null)
  const buttonRef = useRef(null)
  const timeline = gsap.timeline({ repeat: -1 })
  const isMobile = useMediaQuery(down('mobile'))

  useEffect(() => {
    gsap.from(buttonRef.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 0.25
    })
  }, [])

  useEffect(() => {
    gsap.fromTo(
      descriptionRefGridItem.current,
      {
        autoAlpha: 0,
        y: 50
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        delay: 0.25
      }
    )
  }, [])

  useEffect(() => {
    gsap.from(`${titleRef.current?.tagName} > p`, {
      autoAlpha: 0,
      y: -150,
      duration: 0.5,
      delay: 0.25,
      stagger: 0.15
    })
  }, [])

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      repeat: -1
    })
    descriptions.map((description) => {
      const descriptionTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
      })
      descriptionTimeline.to(descriptionRef.current, {
        duration: 1,
        text: description
      })
      timeline.add(descriptionTimeline)
    })
  }, [])

  const handleClick = () => {
    const top = isMobile ? 0 : 200

    window.scrollTo({
      top: (document.getElementById('howItWorks')?.offsetTop || 0) - top,
      behavior: 'smooth'
    })
  }

  return (
    <Container paddingTop={3} paddingTopOnTablet={10} paddingTopOnMobile={3}>
      <S.Grid container>
        <Grid
          item
          container
          direction={'column'}
          justifyContent={'flex-start'}
          alignContent={'center'}
          spacing={2}
          xl={6}
          lg={6}
          md={6}
        >
          <Grid item>
            <S.Title ref={titleRef}>
              A solução <span>prática</span> e <span>eficaz</span> que você
              merece para vender seus <span>desapegos</span>
            </S.Title>
          </Grid>
          <Grid item>
            <Typography variant={'h6'}>
              Acumulando peças que não utiliza mais, ou tenha enjoado dos mesmos
              looks, ou quem sabe aquela peça que já não serve em você, mas
              sirva apenas pra ocupar espaço?
              <br />
              Vivenciando alguma dessas situações e não sabe como destinar essas
              peças ou não tenha tempo pra isso?
              <br />
              <strong> Vem comigo que no caminho eu te explico. 🔥</strong>
            </Typography>
            <br />
            <Typography variant={'h6'}>
              Gerenciamos seus desapegos, seja pessoal ou loja. Desde a coleta
              até a entrega de suas peças, realizamos todo o processo para seus
              desapegos terem um novo destino.
            </Typography>
            <br />
            <Typography variant={'h6'}>
              <span style={{ fontSize: '1.6rem' }}>❤️</span> Nós cuidamos de
              tudo para você.
              <br />
              <span style={{ fontSize: '1.6rem' }}>😍</span> O processo de
              divulgação e venda é totalmente online, ou seja, expandido a
              visibilidade para todo o Brasil, aceleramos a venda de seus
              desapegos.
              <br />
              <span style={{ fontSize: '1.6rem' }}>♻️</span> Você lucra com a
              venda e ainda contribui com a ascensão da moda sustentável.
            </Typography>
          </Grid>
          <Hidden mdUp>
            <Grid
              item
              container
              alignContent={'center'}
              justifyContent={'center'}
            >
              <HeroImage />
            </Grid>
          </Hidden>
          <Grid item container>
            <S.Button
              ref={buttonRef}
              variant={'contained'}
              size={'large'}
              onClick={handleClick}
              endIcon={<img src={'/img/hanger.png'} width={25} />}
              disableRipple
            >
              Quero desapegar
            </S.Button>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid
            item
            container
            xl={6}
            lg={6}
            md={6}
            alignContent={'flex-start'}
            justifyContent={'center'}
          >
            <HeroImage />
          </Grid>
        </Hidden>
      </S.Grid>
    </Container>
  )
}

export default Landing

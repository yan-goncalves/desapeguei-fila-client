import { useMediaQuery } from '@material-ui/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import { down, screenSizes } from 'utils/customMedia'
import * as S from './styles'

gsap.registerPlugin(ScrollTrigger)

export type CardProps = {
  num: number
  title: string
  subtitle: React.ReactNode
  overline?: string
  img: string
  fullWidth?: boolean
}

const Card = ({
  num,
  title,
  subtitle,
  overline,
  img,
  fullWidth
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const isMobile = useMediaQuery(down('mobile'))

  useEffect(() => {
    if (fullWidth) {
      ScrollTrigger.matchMedia({
        [`(max-width: ${screenSizes.mobile})`]: () => {
          gsap.fromTo(
            imgRef.current,
            {
              autoAlpha: 0
            },
            {
              autoAlpha: 1,
              rotate: -720,
              scrollTrigger: {
                trigger: ref.current,
                once: true,
                start: 'top center+=200'
              }
            }
          )
        },
        [`(min-width: ${screenSizes.tablet})`]: () => {
          gsap.fromTo(
            imgRef.current,
            {
              autoAlpha: 0,
              x: 360
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              rotateZ: -360,
              scrollTrigger: {
                trigger: ref.current,
                once: true,
                start: 'top center+=150'
              }
            }
          )
        }
      })
    }
  }, [fullWidth])

  return (
    <ReactParallaxTilt
      perspective={2000}
      scale={!isMobile && !fullWidth ? 1.05 : 1}
      transitionSpeed={1000}
      style={{
        minHeight: '35rem',
        transformStyle: !isMobile ? 'preserve-3d' : 'unset'
      }}
      tiltEnable={!isMobile && !fullWidth}
      gyroscope
    >
      <S.Wrapper ref={ref} fullWidth={fullWidth}>
        <S.NumberBox>{num}</S.NumberBox>
        <S.ImageWrapper className={'inner-element'}>
          <S.Image ref={imgRef} src={`/img/card-image-${img}.png`} />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          {!!overline && (
            <S.OverlineWrapper>
              <S.Overline>{overline}</S.Overline>
            </S.OverlineWrapper>
          )}
        </S.TextWrapper>
      </S.Wrapper>
    </ReactParallaxTilt>
  )
}

export default Card

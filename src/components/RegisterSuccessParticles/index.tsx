import Particles from 'react-tsparticles'
import { useTheme } from 'styled-components'
import { loadConfettiShape } from 'tsparticles-shape-confetti'

const RegisterSuccessParticles = () => {
  const theme = useTheme()

  return (
    <Particles
      id="registerSuccessParticles"
      width={'0'}
      height={'0'}
      init={(main) => loadConfettiShape(main)}
      params={{
        autoPlay: true,
        fpsLimit: 60,
        fullScreen: {
          enable: true,
          zIndex: 1000
        },
        particles: {
          number: {
            value: 0
          },
          color: {
            value: [
              theme.colors.primary.main,
              theme.colors.primary.dark,
              theme.colors.primary.light,
              theme.colors.secondary.main
            ]
          },
          shape: {
            type: 'confetti'
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              startValue: 'max',
              destroy: 'min'
            }
          },
          size: {
            value: 7,
            random: {
              enable: true,
              minimumValue: 3
            }
          },
          links: {
            enable: false
          },
          life: {
            duration: {
              sync: true,
              value: 5
            },
            count: 1
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 20
            },
            speed: { min: 10, max: 30 },
            decay: 0.1,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'destroy',
              top: 'none'
            }
          }
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            resize: true
          }
        },
        detectRetina: true,
        emitters: {
          autoPlay: true,
          name: 'party',
          direction: 'none',
          life: {
            count: 10,
            duration: 0.1,
            delay: 0.4
          },
          rate: {
            delay: 0.1,
            quantity: 100
          },
          size: {
            width: 0,
            height: 0
          }
        }
      }}
    />
  )
}

export default RegisterSuccessParticles

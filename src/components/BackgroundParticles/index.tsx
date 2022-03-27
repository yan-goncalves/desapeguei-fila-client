import Particles from 'react-tsparticles'
import { useTheme } from 'styled-components'
import { tsParticles } from 'tsparticles'
// import { HeartDrawer } from 'utils/HeartDrawer'
import { RoundedRectDrawer } from 'utils/RoundedRectDrawer'

tsParticles.addShape('rounded-rect', new RoundedRectDrawer())
// tsParticles.addShape('heart', new HeartDrawer())

const BackgroundParticles = () => {
  const theme = useTheme()

  return (
    <Particles
      id="backgroundParticles"
      params={{
        fullScreen: {
          enable: true
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'light',
              parallax: {
                enable: true,
                force: 100,
                smooth: 200
              }
            },
            resize: true
          }
        },
        particles: {
          reduceDuplicates: true,
          shape: {
            type: ['rounded-rect', 'heart'],
            options: {
              'rounded-rect': {
                radius: 10,
                particles: {
                  size: {
                    value: 100,
                    animation: {
                      size_min: 40
                    },
                    random: true
                  }
                }
              },

              heart: {
                particles: {
                  size: {
                    value: 20,
                    animation: {
                      size_min: 10
                    },
                    random: true
                  }
                }
              }
            }
          },
          shadow: {
            color: '#F8BDD1',
            blur: 5,
            offset: {
              x: 0,
              y: 24
            }
          },
          color: {
            value: [
              theme.colors.background.dark,
              theme.colors.primary.light,
              theme.colors.background.main
            ]
          },
          number: {
            limit: 40,
            value: 20,
            density: {
              enable: true,
              area: 400
            }
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: true,
            speed: 0.5,
            straight: false
          },
          links: {
            enable: false
          },
          opacity: {
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.25,
              sync: false
            },
            value: 0.5
          },
          life: {
            duration: {
              sync: false,
              value: 15
            }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default BackgroundParticles

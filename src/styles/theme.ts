export default {
  grid: {
    desktop: {
      width: '1570px',
      padding: '3.2rem',
      gutter: '1.6rem'
    },
    tablet: {
      width: '1366px',
      padding: '2.4rem',
      gutter: '1.2rem'
    },
    mobile: {
      width: '960px',
      padding: '1.6rem',
      gutter: '0.8rem'
    }
  },
  border: {
    radius: {
      button: {
        small: '0.4rem',
        medium: '0.6rem',
        large: '0.8rem'
      },
      card: '1.5rem'
    }
  },
  font: {
    family: {
      heading:
        "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sizes: {
      heading: {
        h1: '7.2rem',
        h2: '6rem',
        h3: '4.8rem',
        h4: '3.4rem',
        h5: '2.4rem',
        h6: '2rem'
      },
      text: {
        body1: '1.6rem',
        body2: '1.4rem',
        caption: '1.2rem',
        overline: '1rem'
      },
      button: {
        large: '1.5rem',
        medium: '1.4rem',
        small: '1.3rem'
      }
    }
  },
  colors: {
    primary: {
      main: '#F48FB1',
      dark: '#F06292',
      light: '#F8BBD0',
      lightest: '#FCE4EC'
    },
    secondary: {
      main: '#546E7A',
      dark: '#455A64',
      light: '#607D8B'
    },
    accent: '#EC407A',
    type: {
      primary: '#333333',
      secondary: '#FCE4EC',
      primaryLight: '#444444'
    },
    background: {
      dark: '#FCE4EC',
      main: '#FDEDF2',
      light: '#FEF8FA',
      form: '#607D8B',
      gradient: {
        primary: 'linear-gradient(90deg, #FCE4EC 0%, #F8BBD0 100%)',
        secondary:
          'linear-gradient(90deg, #E5BADB 0%, rgba(249, 190, 210, 0) 100%)',
        third: 'linear-gradient(27deg, #f37da4 0%, #f50057 100%)'
      }
    },
    common: {
      black: '#333333',
      white: '#FAFAFA'
    },
    ui: {
      info: {
        main: '#2196F3',
        dark: '#0B79D0',
        light: '#64B6F7'
      },
      success: {
        main: '#4CAF50',
        dark: '#3B873E',
        light: '#7BC67E'
      },
      warning: {
        main: '#FF9800',
        dark: '#C77700',
        light: '#FFB547'
      },
      error: {
        main: '#F44336',
        dark: '#E31B0C',
        light: '#F88078'
      },
      gray: {
        main: '#999999',
        light: '#CCCCCC',
        dark: '#666666'
      }
    }
  },
  heights: {
    button: {
      small: '3rem',
      medium: '3.6rem',
      large: '4.8rem'
    }
  },
  spacings: {
    button: {
      small: '1rem',
      medium: '1.6rem',
      large: '2rem',
      icon: '0.8rem'
    }
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const

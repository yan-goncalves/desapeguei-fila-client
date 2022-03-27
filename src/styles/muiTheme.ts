import { createTheme } from '@material-ui/core'

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1570
    }
  }
})

export default muiTheme

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import BackgroundParticles from 'components/BackgroundParticles'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Register from 'components/Register'
import SectionHowItWorks from 'components/Section/SectionHowItWorks'
import SectionPayment from 'components/Section/SectionPayment'
import SectionWeManageAll from 'components/Section/SectionWeManageAll'
import SectionWhatNow from 'components/Section/SectionWhatNow'
import { client } from 'graphql/client'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import muiTheme from 'styles/muiTheme'
import theme from 'styles/theme'

ReactDOM.render(
  <Router>
    <Redirect path={'*'} to={'/'} />
    <Route path={'/'} exact>
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <BackgroundParticles />
            <GlobalStyles />
            <Header />
            <Landing />
            <div style={{ padding: 20 }}>
              <SectionHowItWorks />
              <SectionWhatNow />
              <SectionPayment />
            </div>
            <SectionWeManageAll />
            <Register />
            <Footer />
          </ThemeProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </Route>
  </Router>,
  document.getElementById('root')
)

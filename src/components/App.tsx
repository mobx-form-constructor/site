import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'
import { ThemeProvider } from '@styled-components'
import { defaultTheme } from '@styled-components/theme'

import routes from '../routes'
import GlobalStyle from '../global-style'

interface IProps {
  history: History
}

function App({ history }: IProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Router history={history}>{renderRoutes(routes)}</Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

export default hot(App)

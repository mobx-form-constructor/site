import * as React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './components/App'

const history = createBrowserHistory()

function renderApp() {
    render(<App history={history} />, document.getElementById('react-root'))
}

renderApp()

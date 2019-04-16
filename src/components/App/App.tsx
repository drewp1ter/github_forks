import * as React from 'react'

import { Provider } from 'react-redux'

import store, { history } from 'store'
// import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'

import routes from 'routes'

import './App.scss'

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  </Provider>
)

export default App

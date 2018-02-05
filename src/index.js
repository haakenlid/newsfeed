import 'react-hot-loader/patch'
import 'stylesheets/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { PersistGate } from 'redux-persist/lib/integration/react'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'
import Page from 'components/Page'

const { store, persistor } = configureStore()

const render = App =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )

render(Page)
module.hot && module.hot.accept('components/Page', () => render(Page))

registerServiceWorker()

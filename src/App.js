import './App.css'
import 'animate.css'
import 'antd/dist/antd.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import ErrorHandlerComponent from './components/commons/ErrorHandler/ErrorHandler.component'
import React, { Suspense } from 'react'
import store from './redux-flow/index'
function App() {
  return (
    <BrowserRouter>
      <ErrorHandlerComponent>
        <Provider store={store}>
          <Suspense fallback="loading">
            <AppRouter />
          </Suspense>
        </Provider>
      </ErrorHandlerComponent>
    </BrowserRouter>
  )
}

export default App

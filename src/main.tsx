import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyle } from './globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

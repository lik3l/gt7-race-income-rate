import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Dashboard } from './layouts/Dashboard/Dashboard'

const theme = createTheme({})

const App: React.FC = () => {
  return <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  </React.Fragment>
}

export default App

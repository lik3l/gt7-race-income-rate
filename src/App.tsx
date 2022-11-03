import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Dashboard } from './layouts/Dashboard/Dashboard'
import { NavBar } from './components/NavBar/NavBar'
import styled from '@emotion/styled'
import { FirebaseAuthProvider } from './context/FirebaseAuthContext'

const theme = createTheme({})

const PageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: 100vh;
`

const App: React.FC = () => {
  return <React.Fragment>
    <ThemeProvider theme={theme}>
      <FirebaseAuthProvider>
        <CssBaseline />
        <PageWrapper>
          <NavBar />
          <Dashboard />
        </PageWrapper>
      </FirebaseAuthProvider>
    </ThemeProvider>
  </React.Fragment>
}

export default App

import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'

export const NavBar: React.FC = () => {
  return <AppBar color="transparent" position="static" variant="outlined">
    <Toolbar>
      <Button sx={{ ml: 'auto' }} color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
}

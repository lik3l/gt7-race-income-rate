import React, { useState } from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { LoginDialog } from '../Login/LoginDialog'
import { TCallback } from '../../types'

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleCloseLogin: TCallback = () => {
    setOpen(false)
  }
  const handleOpenLogin = (): void => {
    setOpen(true)
  }
  return <AppBar color="transparent" position="static" variant="outlined">
    <Toolbar>
      <Button onClick={handleOpenLogin} sx={{ ml: 'auto' }} color="inherit">Login</Button>
    </Toolbar>
    <LoginDialog open={open} onClose={handleCloseLogin} />
  </AppBar>
}

import React, { useEffect, useState } from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { LoginDialog } from '../Login/LoginDialog'
import { TCallback } from '../../types'
import { useAuth } from '../../context/FirebaseAuthContext'

export const NavBar: React.FC = () => {
  const { user } = useAuth()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleCloseLogin: TCallback = () => {
    setOpen(false)
  }
  const handleOpenLogin = (): void => {
    setOpen(true)
  }

  return <AppBar color="transparent" position="static" variant="outlined">
    <Toolbar>
      {(user == null) ? <Button onClick={handleOpenLogin} sx={{ ml: 'auto' }} color="inherit">Login</Button> : null}
    </Toolbar>
    <LoginDialog open={open} onClose={handleCloseLogin} />
  </AppBar>
}

import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Stack, Toolbar } from '@mui/material'
import { LoginDialog } from '../Login/LoginDialog'
import { TCallback } from '../../types'
import { useAuth } from '../../context/FirebaseAuthContext'
import { Add } from '@mui/icons-material'

export const NavBar: React.FC = () => {
  const { user, loading, logout } = useAuth()
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)

  useEffect(() => {
    // console.log(user)
  }, [user])

  const handleCloseLogin: TCallback = () => {
    setOpen(false)
  }
  const handleOpenLogin = (): void => {
    setOpen(true)
  }

  const handleOpenMenu: React.MouseEventHandler = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleLogout: React.MouseEventHandler = () => {
    logout().finally(() => {
      handleClose()
    })
  }

  return <AppBar color="transparent" position="static" variant="outlined" elevation={0}>
    <Toolbar sx={{ justifyContent: 'flex-end' }}>
      {/* Unauthorized */}
      {(user == null && !loading) ? <Button onClick={handleOpenLogin} color="inherit">Login</Button> : null}
      {/* Authorized */}
      {(Boolean(user) && !loading)
        ? <Stack direction='row' spacing={1}>
          <IconButton><Add /></IconButton>
          <Avatar sx={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleOpenMenu}>IM</Avatar>
        </Stack>
        : null}
    </Toolbar>
    <Menu
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
    <LoginDialog open={open} onClose={handleCloseLogin}/>
  </AppBar>
}

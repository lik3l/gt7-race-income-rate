import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IDialogProps } from '../../types'

interface IForm {
  email: string
  password: string
}
const blankForm: IForm = { email: '', password: '' }

export const LoginDialog: React.FC<IDialogProps> = ({ open, onClose }) => {
  const [form, setForm] = useState<IForm>(blankForm)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (open) {
      setForm(blankForm)
    }
  }, [open])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value, name } }): void => {
    setForm({ ...form, [name]: value })
  }

  const handleLogin = (): void => {
    onClose()
  }

  return <Dialog open={open} onClose={onClose}>
    <form action="" onSubmit={handleLogin}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <Box py={2}>
          <TextField
            fullWidth
            variant='standard'
            label='Email'
            value={form.email}
            name='email'
            onChange={handleChange}
            type='email' />
          <TextField
            fullWidth
            variant='standard'
            label='Password'
            value={form.password}
            name='password'
            onChange={handleChange}
            type='password' />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>Close</Button>
        <Button type='submit' variant='contained' onClick={handleLogin}>Login</Button>
      </DialogActions>
    </form>
  </Dialog>
}

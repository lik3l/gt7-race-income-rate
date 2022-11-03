import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { IDialogProps } from '../../types'

interface IForm {
  email: string
  password: string
}
const blankForm: IForm = { email: '', password: '' }

export const LoginDialog: React.FC<IDialogProps> = ({ open, onClose }) => {
  const [form, setForm] = useState<IForm>(blankForm)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (open) {
      setForm(blankForm)
    }
  }, [open])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value, name } }): void => {
    setForm({ ...form, [name]: value })
  }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const handleLogin: React.FormEventHandler = async () => {
    const { email, password } = form
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      onClose()
    } finally {
      setLoading(false)
    }
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
        <LoadingButton
          loading={loading}
          type='submit'
          variant='contained'
          onClick={handleLogin}>Login</LoadingButton>
      </DialogActions>
    </form>
  </Dialog>
}

import * as React from 'react'
import { FC } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogType } from '../pages/SignIn/constants'

interface IFormDialogProps {
  open: boolean
  handleClose: () => void
  title?: string
  type?: string
}

export const FormDialog: FC<IFormDialogProps> = ({open, handleClose, title, type}) => {


  return (
    <div>
      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>{ title }</DialogTitle>
        <DialogContent>
          {
            type === DialogType.REG && <TextField
              autoFocus
              margin="dense"
              id="Your name"
              label="Your name"
              type="name"
              fullWidth
              variant="standard"
            />
          }
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
          {
            type === DialogType.REG
              ? <Button>Next</Button>
              : <Button>Login</Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  )
}

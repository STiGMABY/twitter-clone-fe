import React, { FC, useState } from 'react'
import styles from './SignIn.module.css'
import { Button, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import { FormDialog } from '../../components/FormDialog/FormDialog'
import { DialogType } from './constants'

export const SignIn: FC = () => {

  const [openDialog, setOpenDialog] = useState({
    registration: false,
    authorization: false,
    dialogType: '',
  })

  const handleClickReg = () => {
    setOpenDialog({...openDialog, registration: !openDialog.registration, dialogType: DialogType.REG})
  }
  const handleClickAuth = () => {
    setOpenDialog({...openDialog, authorization: !openDialog.authorization, dialogType: DialogType.AUTH})
  }
  const handleClose = () => {
    setOpenDialog({
      registration: false,
      authorization: false,
      dialogType: '',
    })
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.left }>

      </div>

      <div className={ styles.right }>
        <TwitterIcon color="primary"/>
        <Typography variant="h2" fontWeight="bold">Happening now</Typography>
        <Typography>Join Twitter today.</Typography>

        <Button
          variant="contained"
          onClick={ handleClickReg }
        >Registration</Button>

        <Button
          variant="outlined"
          onClick={ handleClickAuth }
        >Login</Button>
      </div>

      <FormDialog
        open={ openDialog.registration || openDialog.authorization }
        handleClose={ handleClose }
        title={ openDialog.registration ? 'Registration' : 'Authorization' }
        type={ openDialog.dialogType }
      />
    </div>
  )
}
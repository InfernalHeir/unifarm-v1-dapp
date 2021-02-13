import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { useAppsStatus } from '../../store/app/hooks'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const SnackBarNotes = () => {
  const appStatus: any = useAppsStatus()

  const classes = useStyles()

  const handleClose = (event) => {
    return null
  }

  return (
    <div className={classes.root}>
      <Snackbar
        autoHideDuration={5000}
        key="enter"
        open={appStatus.appError || appStatus.appSuccess}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={appStatus.appError ? 'error' : 'success'}
        >
          {appStatus.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBarNotes

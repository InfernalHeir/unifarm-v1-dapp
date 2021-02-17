import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

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
  const classes = useStyles()

  const handleClose = (event) => {
    return null
  }

  return (
    <div className={classes.root}>
      <Snackbar
        autoHideDuration={5000}
        key="enter"
        open={false}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={`success`}>
          Nothing
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBarNotes

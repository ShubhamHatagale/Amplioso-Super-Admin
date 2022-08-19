import React from 'react'
import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 600,
        '& > * + *': {
            marginTop: theme.spacing(6),
        },
    },
    dialog: {
        width: '450px',
        // height: '100px'
        color: "#000000"
    }
}))

export default function Notification(props) {
    const { notify, setNotify } = props;
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}>
            <Alert className={classes.dialog} severity={notify.type}
                onClose={handleClose} >
                <AlertTitle><strong>{notify.header}</strong></AlertTitle>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
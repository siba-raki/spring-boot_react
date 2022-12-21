import { Alert, Snackbar } from '@mui/material';
import React from 'react'

const Snack = ({msg, setMsg, severity='info'}) => {
    return (
        <Snackbar
            open={msg}
            autoHideDuration={3000}
            anchorOrigin={{vertical: 'top', 'horizontal': 'center'}}
            variant=""
            onClose={(e, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setMsg(false)
            }}
        >
            <Alert severity={severity}>{msg}</Alert>
        </Snackbar>
    )
}
export default Snack

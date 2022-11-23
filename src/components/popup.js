import { Snackbar, Alert } from '@mui/material'
import React from 'react';

export default function Popup() {

const [open, setOpen] = React.useState(true);

// const handleClick = () => {
//   setOpen(true);
// };

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

    return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert variant="outlined" onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
      This is a warning message! 
    </Alert>
  </Snackbar>
    )
}
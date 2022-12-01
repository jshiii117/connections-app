import React from 'react';
import { Box, Fab, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddConnectionForm from './NewForm';

const emails = ['hello@gmail.com', 'nima@gmail.com', 'jame@gmail.com']

export default function NewConnectionButton() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const [clickedFab, setClickedFab] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
      setClickedFab(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setClickedFab(false);
      setSelectedValue(value);
    };

    return (
      <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 30, right: 45}}>
        <Fab sx={{ borderRadius: 0 }} variant="extended" color="white" aria-label="add" onClick={handleClickOpen} disabled={clickedFab}>
          <AddCircleRoundedIcon sx={{ mr: 1 }} />
          <Typography sx={{fontWeight: "bold"}} variant="button" >
                New
          </Typography>
          <AddConnectionForm
          onClose={handleClose}
          selectedValue={selectedValue}
          open={open}
          />
        </Fab>
      </Box>
    )
  }
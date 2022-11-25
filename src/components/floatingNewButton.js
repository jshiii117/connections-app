import PropTypes from 'prop-types';
import { Box, Fab, Typography, Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText, Slide} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add'
import * as React from 'react';

const emails = ['hello@gmail.com', 'nima@gmail.com', 'jame@gmail.com']

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open} TransitionComponent={Transition} PaperProps={{ sx: { position: "fixed", bottom: 30, right: 45, m: 0, width: 400, height: 600} }}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main", color: "primary.text" }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
  
          <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


export default function FloatingNewButton() {
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
        <Fab sx={{ borderRadius: 0 }} variant="extended" color="secondary" aria-label="add" onClick={handleClickOpen} disabled={clickedFab}>
          <AddCircleRoundedIcon sx={{ mr: 1 }} />
          <Typography sx={{fontWeight: "bold"}} variant="button" >
                New
          </Typography>
          <SimpleDialog
          onClose={handleClose}
          selectedValue={selectedValue}
          open={open}
          />
        </Fab>
      </Box>
    )
  }
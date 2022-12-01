import React, { useState } from 'react';
import { Slide, TextField, Button, Dialog, DialogTitle, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });
  
  const defaultFormValues = {
    name: "", 
    position: "",
    lastContacted: "",
    contactMethod: "",
    notes: ""
  }
  
export default function AddConnectionForm(props) {
      const { onClose, selectedValue, open } = props;
      const [formValues, setFormValues] = useState(defaultFormValues)
  
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
  
      const handleClose = () => {
        onClose(selectedValue);
      };
  
      const handleSubmit = () => {  
        onClose();
      };
    
      return (
        <Dialog onClose={handleClose} open={open} TransitionComponent={Transition} PaperProps={{ sx: { position: "fixed", bottom: 30, right: 45, m: 0, width: 400, height: 600} }}>
          <DialogTitle>Create New Connection</DialogTitle>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item >
            <TextField 
              sx={{color:'black', borderRadius: 25}}
              variant="standard"
              name={'Hello'}
              label="Full Name"
              placeholder="Bob Joe"
              margin={'normal'}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
          </Grid>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
        </Dialog>
      );
  }
  
  AddConnectionForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
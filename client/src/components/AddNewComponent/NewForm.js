import React, { useState } from "react";
import {
  Slide,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  Box,
  alpha,
} from "@mui/material";
import PropTypes from "prop-types";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { addConnection } from "../../api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const defaultFormValues = {
  profilePicture: "https://source.unsplash.com/random",
  name: "A Friendly Connection",
  position: "Software Engineer",
  lastContacted: "Today",
  contactMethod: "LinkedIn",
  description: "A short but informative description",
};

export default function AddConnectionForm(props) {
  const { onClose, open } = props;
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [selectedFile, setSelectedFile] = useState(
    "https://source.unsplash.com/random"
  );
  const [pictureHover, setPictureHover] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      //   this.setState({
      //     selectedFile: [reader.result]
      //   });
      setSelectedFile(reader.result);
      setFormValues({
        ...formValues,
        profilePicture: reader.result,
      });
      console.log(url);

      setFormValues({
        ...formValues,
        profilePicture: reader.result,
      });
      console.log(formValues); //Image will not have updated at this point
    };

    // // this.setState({
    // //   mainState: "uploaded",
    // //   selectedFile: event.target.files[0],
    // //   imageUploaded: 1
    // // });
    // setSelectedFile(event.target.files[0])
    // console.log("ran handleUploadClick")
    // console.log(event.target.files[0])
    // setFormValues({
    //     ...formValues,
    //     profilePicture: url
    // })
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    addConnection(formValues);
    e.preventDefault();
    console.log(
      `Add Connection: Form submit success with values: ${formValues} `
    );
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          position: "fixed",
          bottom: 30,
          right: 45,
          m: 0,
          width: 400,
          height: 0.8,
        },
      }}
    >
      <DialogTitle sx={{ mt: 3 }}>
        <center>
          <div>
            <Typography align="center" variant="h6" sx={{ fontWeight: "bold" }}>
              Create New Connection
            </Typography>
          </div>
        </center>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <Grid
          sx={{ px: 10 }}
          container
          justify-content="center"
          align-items="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <label htmlFor="contained-button-file">
              <center>
                <Button
                  component="span"
                  onMouseEnter={() => {
                    setPictureHover(true);
                  }}
                  onMouseLeave={() => {
                    setPictureHover(false);
                  }}
                >
                  {pictureHover && (
                    <Box
                      display="false"
                      style={{
                        backgroundColor: alpha("#343434", 0.3),
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 3,
                      }}
                    >
                      <AddPhotoAlternateIcon
                        align="center"
                        justify="center"
                        sx={{
                          color: "white",
                          height: 80,
                          width: 80,
                          maxHeight: { xs: 60, md: 80 },
                          maxWidth: { xs: 60, md: 80 },
                        }}
                      ></AddPhotoAlternateIcon>
                      <Typography
                        variant="h10"
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          textTransform: "none",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Upload a Picture
                      </Typography>
                    </Box>
                  )}
                  <Box
                    component="img"
                    sx={{
                      textTransform: "none",
                      position: "relative",
                      bgColor: "secondary",
                      color: "black",
                      height: 120,
                      width: 120,
                      maxHeight: { xs: 100, md: 120 },
                      maxWidth: { xs: 100, md: 120 },
                    }}
                    alt="Can't load image"
                    src={formValues.profilePicture}
                  />
                  {/* <Typography variant="h10" color="inherit" noWrap sx={{textTransform: 'none'}}>
                        Upload a Helpful Picture
                    </Typography> */}
                </Button>
              </center>
            </label>
            <input
              name="profilePicture"
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick} //Also handleUploadClick here
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              name="name"
              variant="standard"
              label="Full Name"
              placeholder={defaultFormValues.name}
              margin={"normal"}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              name="position"
              variant="standard"
              label="Position"
              placeholder={defaultFormValues.position}
              margin={"normal"}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              name="lastContacted"
              variant="standard"
              label="Last Contacted"
              placeholder={defaultFormValues.lastContacted}
              margin={"normal"}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              name="contactMethod"
              variant="standard"
              label="Contact Method"
              placeholder={defaultFormValues.contactMethod}
              margin={"normal"}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="description"
              variant="filled"
              label="Description"
              placeholder={defaultFormValues.description}
              margin={"normal"}
              onChange={handleInputChange}
            />
          </Grid>
          <Box sx={{ height: 60 }}></Box>
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

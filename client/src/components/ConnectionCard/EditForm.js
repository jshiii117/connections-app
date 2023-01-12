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
    Select,
    MenuItem
} from "@mui/material";
import PropTypes from "prop-types";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { patchConnection } from "../../api";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function EditConnectionForm(props) {
    const { onClose, open, existingConnection, updateConnectionGroup } = props;
    const [formValues, setFormValues] = useState(existingConnection);
    const [setSelectedFile] = useState(
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
    };

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await patchConnection(formValues)
        await updateConnectionGroup(-1)
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
                            Edit Connection
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
                            // value={formValues.profilePicture} Cannot be null
                            onChange={handleUploadClick} //Also handleUploadClick here
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            name="fullName"
                            variant="standard"
                            label="Full Name"
                            value={formValues.fullName}
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
                            value={formValues.position}
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
                            value={formValues.lastContacted}
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
                            value={formValues.contactMethod}
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
                            value={formValues.description}
                            margin={"normal"}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <Select
                            fullWidth
                            name="idconnectionGroups"
                            variant="filled"
                            label="Group"
                            onChange={handleInputChange}
                            value={formValues.idconnectionGroups}
                        >
                            <MenuItem value={0}>
                                Misc
                            </MenuItem>
                            <MenuItem value={1}>Ten</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>
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

EditConnectionForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

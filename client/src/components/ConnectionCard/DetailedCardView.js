import { Typography, Button, Grid, Popover, Box } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditConnectionForm from "./EditForm";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      display="grid"
      sx={{
        m: 1,
        color: "white",
        bgcolor: "secondary.main",
        borderColor: "grey.800",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function DetailedCardView(props) {
  const { open, setOpen, anchorEl, connection, updateConnectionGroup } = props;
  const handleClose = () => {
    console.log("closing");
    setOpen(false);
  };

  const [formOpen, setFormOpen] = useState(false);
  const handleFormClose = (value) => {
    setFormOpen(false);
  };

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      sx={{
        mx: 2,
      }}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
    >
      <div style={{ width: 600, height: 300 }}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "primary.main",
            borderRadius: 1,
            height: 1,
          }}
        >
          <Item sx={{ width: 0.35 }}>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {/* <AddPhotoAlternateIcon
                align="center"
                justify="center"
                sx={{
                  color: "black",
                  height: 80,
                  width: 80,
                  maxHeight: { xs: 60, md: 80 },
                  maxWidth: { xs: 60, md: 80 },
                }}
              ></AddPhotoAlternateIcon> */}
              <Box
                component="img"
                sx={{
                  textTransform: "none",
                  position: "relative",
                  bgColor: "secondary",
                  borderRadius: 1,
                  color: "black",
                  height: 120,
                  width: 120,
                  maxHeight: { xs: 100, md: 120 },
                  maxWidth: { xs: 100, md: 120 },
                }}
                alt="Can't load image"
                src={connection.profilePicture}
              />
              <Typography sx={{ fontWeight: "bold" }}>
                {connection.fullName}
              </Typography>
              <Typography>{connection.position}</Typography>
              <Typography>Placeholder Text</Typography>
            </Grid>
          </Item>
          <Item sx={{ width: 0.65 }}>
            <Grid
              sx={{ p: 2 }}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="left"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Description:</Typography>
                <Button sx={{ color: "white", mr: -2 }} onClick={() => setFormOpen(!formOpen)}>
                  <EditIcon />
                </Button>
              </div>
              <Typography display="block">{connection.description}</Typography>
              <Box sx={{ height: 0.3 }} />
              <Typography>Last Contacted:</Typography>
              <Typography display="block">
                {connection.lastContacted}
              </Typography>
              <EditConnectionForm onClose={handleFormClose} open={formOpen} existingConnection={connection} updateConnectionGroup={updateConnectionGroup} />
            </Grid>
          </Item>
        </Box>
      </div>
    </Popover>

  );
}

DetailedCardView.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  anchorEl: PropTypes.any,
  connection: PropTypes.object.isRequired,
};

import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddConnectionForm from "./NewForm";

export default function NewConnectionButton(props) {
  const { updateConnectionGroup } = props;
  const [open, setOpen] = React.useState(false);
  const [clickedFab, setClickedFab] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setClickedFab(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setClickedFab(false);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        bottom: 30,
        right: 45,
      }}
    >
      <Fab
        sx={{ borderRadius: 0 }}
        variant="extended"
        color="white"
        aria-label="add"
        onClick={handleClickOpen}
        disabled={clickedFab}
      >
        <AddCircleRoundedIcon sx={{ mr: 1 }} />
        <Typography sx={{ fontWeight: "bold" }} variant="button">
          New
        </Typography>
        <AddConnectionForm onClose={handleClose} open={open} updateConnectionGroup={updateConnectionGroup} />
      </Fab>
    </Box>
  );
}

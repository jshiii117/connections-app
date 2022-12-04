import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DetailedCardView from "./DetailedCardView";

const cardDimensions = {
  height: "100%",
};

export default function ConnectionCard(props) {
  const { connection } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCardClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleButtonClick = (event) => {
    console.log("Reach Out button clicked");
  };

  return (
    <>
      <Card
        sx={{
          height: cardDimensions.height,
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.main",
        }}
      >
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={connection.profilePicture}
            alt="profile picture"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary.text"
            >
              {connection.fullName}
            </Typography>
            <Typography sx={{ color: "primary.text" }}>
              {connection.position}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="outlined" onClick={handleButtonClick}>
            <Typography color="primary.text">REACH OUT</Typography>
          </Button>
        </CardActions>
      </Card>
      <DetailedCardView
        open={open}
        setOpen={setOpen}
        anchorEl={anchorEl}
        connection={connection}
      />
    </>
  );
}

ConnectionCard.propTypes = {
  connection: PropTypes.object.isRequired,
};

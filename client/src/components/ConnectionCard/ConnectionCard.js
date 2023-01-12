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
import React, { useEffect, useState } from "react";
import DetailedCardView from "./DetailedCardView";

const cardDimensions = {
  height: "100%",
};

export default function ConnectionCard(props) {
  const { connection, updateConnectionGroup, currentRef } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (currentRef === connection.fullName) {
      handleReferenced();
    }
    //eslint-disable-next-line
  }, [currentRef]);

  const handleReferenced = () => {
    setSelected(true)
    setTimeout(() => {
      setSelected(false)
    }, 2000)
  }

  const handleCardClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };


  const handleReachoutButton = (event) => {
    console.log("Reach Out button clicked");
  };

  return (
    <>
      <Card
        sx={{
          height: cardDimensions.height,
          display: "flex",
          flexDirection: "column",
          bgcolor: selected ? "red" : "secondary.main"
          // bgcolor: "secondary.main",
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
          <Button size="small" variant="outlined" onClick={handleReachoutButton}>
            <Typography color="primary.text">REACH OUT</Typography>
          </Button>
        </CardActions>
      </Card>
      <DetailedCardView
        open={open}
        setOpen={setOpen}
        anchorEl={anchorEl}
        connection={connection}
        updateConnectionGroup={updateConnectionGroup}
      />
    </>
  );
}

ConnectionCard.propTypes = {
  connection: PropTypes.object.isRequired,
};

import { Card, CardActions, CardContent, CardMedia, Typography, Button, CardActionArea, Grid, Popover, Box, alpha } from '@mui/material';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const cardDimensions = {
    "height": "100%",

}

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        display="grid"
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

function DetailedConnectionCardView(props) {
    const { open, setOpen, anchorEl } = props;
    const handleClose = () => {
        console.log("closing")
        setOpen(false)
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
            vertical: 'center',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
        }}
        >
        <div style={{ width: 600, height: 300 }}>
        <Box
            sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, height: 1}}
        >
            <Item sx={{ width: 0.35 }}>
                 <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
                    <AddPhotoAlternateIcon align="center" justify='center' sx={{
                    color: 'black',
                    height: 80,
                    width: 80,
                    maxHeight: { xs: 60, md: 80 },
                    maxWidth: { xs: 60, md: 80 },
                    }}>
                    </AddPhotoAlternateIcon>
                    <Typography>
                        CONNECTION NAME
                    </Typography>
                    <Typography>
                        Connection Position
                    </Typography>
                    <Typography>
                        Placeholder Text
                    </Typography>
                 </Grid>
            </Item>
            <Item sx={{ width: 0.65  }}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="left">
                    <Typography>
                        Description:
                    </Typography>
                    <Typography display="block">
                        {"Insert description here."}
                    </Typography>
                    <Box sx={{height: 0.3}}/>
                    <Typography>
                        Last Contacted:
                    </Typography>
                    <Typography display="block">
                        {"Insert description here."}
                    </Typography>
                 </Grid>
            </Item>

        </Box>
        </div>
    </Popover>
    );
}

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
        {/* <DetailedConnectionCardView open={open} setOpen={setOpen}/> */}
        <Card sx={{ height: cardDimensions.height, display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main'}}>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia component="img" sx={{ height: 200 }} image={connection.profilePicture} alt="profile picture"/>
                <CardContent sx={{ flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary.text">{connection.fullName}</Typography>
                    <Typography sx={{color: 'primary.text'}}>{connection.position}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" variant="outlined" onClick={handleButtonClick}>
            <Typography color="primary.text">
               REACH OUT
            </Typography>
            </Button>
            </CardActions>
        </Card>
        <DetailedConnectionCardView open={open} setOpen={setOpen} anchorEl={anchorEl}/>
        </> 
    );
}

ConnectionCard.propTypes = {
    connection: PropTypes.object.isRequired
  };

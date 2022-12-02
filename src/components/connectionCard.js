import { Card, CardActions, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';
// import Popup from './popup';

// const hasContactInfo = true

export default function ConnectionCard(props) {
    const { connection } = props;
    
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main'}}>
            <CardActionArea onClick={() => {console.log("Entire card was clicked")}}>
                <CardMedia component="img" sx={{ height: 200 }} image={connection.profilePicture} alt="profile picture"/>
                <CardContent sx={{ flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary.text">{connection.fullName}</Typography>
                    <Typography sx={{color: 'primary.text'}}>{connection.position}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" variant="outlined"   onClick={() => {console.log("Action button was clicked")}}>
            {/* <Popup/> */}
            <Typography color="primary.text">
               REACH OUT
            </Typography>
            </Button>
            </CardActions>
        </Card>
    );
}

ConnectionCard.propTypes = {
    connection: PropTypes.object.isRequired
  };

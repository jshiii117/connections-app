import { Card, CardActions, CardContent, CardMedia, Typography, Button, Alert, Snackbar } from '@mui/material';

const hasContactInfo = true

function buttonFeedback() {
    return (
        hasContactInfo?
        <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
        </Alert>
        :
        <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
        </Alert>
    )
}


export default function ConnectionCard() {
    return (
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main'}}
    >
            <CardMedia
            component="img"
            sx={{
                // 16:9
                // pt: '56.25%',
            }}
            image="https://source.unsplash.com/random"
            alt="random"
            />
            <CardContent sx={{ flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2" color="primary.text">
                Connection Name
            </Typography>
            
            <Typography sx={{color: 'primary.text'}}>
                Position Title
            </Typography>
            </CardContent>
            <CardActions >
            {/* <Button size="small" variant="text">
            <Typography color="primary.text">
               EDIT
            </Typography>
            </Button> */}
            <Button size="small" variant="outlined"   onClick={() => {
                buttonFeedback();
                }}
                >
                    
            <Typography color="primary.text">
               REACH OUT
            </Typography>
            </Button>
            </CardActions>
        </Card>
    );
}


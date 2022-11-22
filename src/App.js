import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider, ListItemIcon, Fab } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavigationIcon from '@mui/icons-material/Navigation'
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#343434',
      text: '#FFFFFF'
    },
    secondary: {
      main: '#242424',
      text: '#FFFFFF'
    },
    background: {
      main: '#534b4b',
      text: '#FFFFFF'
    }
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FloatingNewButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 30, right: 45, }}>
      <Fab variant="extended" color="#FFFFFF" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        NEW
      </Fab>
    </Box>
  )
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const drawerWidth = 240;

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          bgcolor: 'background.main',
          color: 'background.main',
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ height: window.innerHeight,  bgcolor: 'primary.main', color: 'primary.text', overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem bgcolor='#53b4b4' color='#53b4b4' key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <main sx={{bgcolor: 'background.main', color: 'primary.main' /*Colors dont go here */}}>
        {/* Hero unit */}
        <Container sx={{bgcolor: 'background.main'}} />
        <Box
          sx={{
            bgcolor: 'background.main',
            color: 'background.main',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.main"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="primary.main" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8, bgcolor: 'background.main'}} maxWidth='md'>
          {/* End hero unit */}
          <Grid bgcolor='primary.main' color='primary.text' container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary.text">
                      Heading
                    </Typography>
                    <Typography sx={{color: 'primary.text'}}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        <FloatingNewButton/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.main', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
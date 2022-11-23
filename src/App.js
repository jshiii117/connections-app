import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider, ListItemIcon, Fab } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavigationIcon from '@mui/icons-material/Navigation'
import ConnectionCard from './components/connectionCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const drawerWidth = 240;

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
    <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 30, right: 45}}>
      <Fab variant="extended" color="secondary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        NEW
      </Fab>
    </Box>
  )
}

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
      <Drawer variant="permanent" sx={{bgcolor: 'background.main', color: 'background.main', width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }}}>
        <Toolbar />
        <Box sx={{ height: window.innerHeight,  bgcolor: 'primary.main', color: 'primary.text', overflow: 'auto' /* Side Drawer Settings */}}> 
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
      <main>
        <Box sx={{bgcolor: 'background.main', width: 1, pl: 30, my: 10}}/* Margin left*/ > 
          <Grid bgcolor='background.main' color='primary.text' container spacing={4} sm='auto' md='auto' xl={12}>
            {cards.map((card) => (
              <Grid item key={card} xs={2} sm={2} md={2} xl={2}>
                <ConnectionCard/>
              </Grid>
            ))}
          </Grid>
        <FloatingNewButton/>
        </Box>
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
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Box, Typography, Link } from "@mui/material";
import WorkspaceAppBar from "./components/AppBar";
import FloatingNewButton from "./components/AddNewComponent/NewFormButton";
import ConnectionCard from "./components/ConnectionCard/ConnectionCard";
import WorkspaceDrawer from "./components/WorkspaceDrawer/WorkspaceDrawer";
import ConnectionSearchBar from "./components/ConnectionSearchBar";

const connectionGroups = [
  {
    groupName: "Consulting",
    groupItems: [
      {
        profilePicture: "https://source.unsplash.com/random",
        fullName: "Bob Marley",
        position: "Software Engineer",
        lastContacted: "Today",
        contactMethod: "LinkedIn",
        description: "This person is super cool.",
      },
      {
        profilePicture: "https://source.unsplash.com/random",
        fullName: "Elon Musk",
        position: "CEO",
        lastContacted: "Today",
        contactMethod: "LinkedIn",
        description: "This person is super cool.",
      },
    ],
  },
  {
    groupName: "Software Engineering",
    groupItems: [
      {
        profilePicture: "https://source.unsplash.com/random",
        fullName: "Barack Obama",
        position: "President",
        lastContacted: "Today",
        contactMethod: "LinkedIn",
        description: "Ice cream is cool.",
      },
    ],
  },
  {
    groupName: "Product Management",
    groupItems: [
      {
        profilePicture: "https://source.unsplash.com/random",
        fullName: "Barack Obama",
        position: "President",
        lastContacted: "Today",
        contactMethod: "LinkedIn",
        description: "Ice cream is cool.",
      },
    ],
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#343434",
      text: "#FFFFFF",
    },
    secondary: {
      main: "#242424",
      text: "#FFFFFF",
    },
    background: {
      default: "#534b4b",
      main: "#534b4b",
      text: "#FFFFFF",
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WorkspaceAppBar />
      <WorkspaceDrawer connectionGroups={connectionGroups} />
      <main>
        <Box
          sx={{
            bgcolor: "background.main",
            width: 1,
            pl: 35,
            mt: 12,
          }} /* Margin left*/
        >
          <ConnectionSearchBar />
          {connectionGroups.map((connectionGroup) => (
            <React.Fragment key={connectionGroup.groupName}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {connectionGroup.groupName}
              </Typography>
              <Box sx={{ height: 15 }} />
              <Grid key={connectionGroup.groupName} container spacing={4}>
                {connectionGroup.groupItems.map((connection) => (
                  <Grid
                    item
                    key={connection.fullName}
                    xs={12}
                    sm={6}
                    md={3}
                    l={2}
                    xl={2}
                  >
                    <ConnectionCard connection={connection} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ height: 50 }} />
            </React.Fragment>
          ))}
          <FloatingNewButton />
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.main", p: 6 }} component="footer">
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
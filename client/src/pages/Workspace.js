import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Box, Typography, Link } from "@mui/material";
import FloatingNewButton from "../components/AddNewComponent/NewFormButton";
import ConnectionCard from "../components/ConnectionCard/ConnectionCard";
import WorkspaceAppBar from "../components/AppBar";
import WorkspaceDrawer from "../components/WorkspaceDrawer/WorkspaceDrawer";
import ConnectionSearchBar from "../components/ConnectionSearchBar";
import { useState, useEffect, useRef } from "react";
import { getConnectionGroup, getConnections } from "../api";

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

export default function Workspace() {
  const [connectionGroups, setConnectionGroups] = useState([]);
  useEffect(() => {
    console.log("running useEffect");
    populateConnectionGroups(-1);
    populateConnections(-1, -1);
  }, []);
  const populateConnectionGroups = async (idConnectionGroups) => {
    const response = await getConnectionGroup(idConnectionGroups);
    for (const connectionGroup of response) {
      console.log(
        `ConnectionGroup on line 55: ${connectionGroup["groupItems"]}`
      );
      connectionGroup["groupItems"] = await getConnections(
        -1,
        connectionGroup["idconnectionGroups"]
      );
    }
    setConnectionGroups(response);
  };

  const [allConnections, setAllConnections] = useState([]);
  const populateConnections = async (idConnections, idConnectionGroups) => {
    const response = await getConnections(idConnections, idConnectionGroups);
    setAllConnections(response);
  };

  const connectionRefs = useRef({});
  const [currentRef, setCurrentRef] = useState("");
  const handleScrollToConnection = async (fullName) => {
    connectionRefs.current[fullName].scrollIntoView({ behavior: "smooth" });
    connectionRefs.current[fullName].focus();
    //Trigger handleReferenced in ConnectionCard.js
    setCurrentRef(fullName);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WorkspaceAppBar />
      <WorkspaceDrawer
        connectionGroups={connectionGroups}
        handleScrollToConnection={handleScrollToConnection}
      />
      <main>
        <Box
          sx={{
            bgcolor: "background.main",
            width: 1,
            pl: 35,
            mt: 12,
          }} /* Margin left*/
        >
          <ConnectionSearchBar
            connectionGroups={connectionGroups}
            setConnectionGroups={setConnectionGroups}
            allConnections={allConnections}
          />
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
                    key={connection.idconnections}
                    xs={12}
                    sm={6}
                    md={3}
                    l={2}
                    xl={2}
                    ref={(ref) => {
                      connectionRefs.current[connection.fullName] = ref;
                    }}
                  >
                    <ConnectionCard
                      connection={connection}
                      updateConnectionGroup={populateConnectionGroups}
                      handleScrollToConnection={handleScrollToConnection}
                      currentRef={currentRef}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ height: 50 }} />
            </React.Fragment>
          ))}
          <FloatingNewButton updateConnectionGroup={populateConnectionGroups} />
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

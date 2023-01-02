import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Person4Icon from "@mui/icons-material/Person4";

const drawerWidth = 240;

export default function WorkspaceDrawer({ connectionGroups, handleScrollToConnection }) {
  const [expand, setExpand] = useState([0]);
  const handleExpand = (value) => {
    const currentIndex = expand.indexOf(value);
    const newExpand = [...expand];

    if (currentIndex === -1) {
      newExpand.push(value);
    } else {
      newExpand.splice(currentIndex, 1);
    }

    setExpand(newExpand);
    console.log(newExpand);
  };
  function checkExpanded(value) {
    // console.log(expand)
    if (expand.indexOf(value) === -1) {
      return false;
    }
    return true;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        bgcolor: "background.main",
        color: "background.main",
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          height: window.innerHeight,
          bgcolor: "primary.main",
          color: "primary.text",
          maxWidth: 360,
          overflow: "auto" /* Side Drawer Settings */,
        }}
      >
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={() => console.log(connectionGroups)}>
            Press to get connection
          </ListItemButton>
          {connectionGroups.map((connectionGroup) => (
            <div key={connectionGroup.groupName}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => { handleExpand(connectionGroup.groupName) }}
                >
                  {checkExpanded(connectionGroup.groupName) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                  <ListItemText primary={connectionGroup.groupName} />
                </ListItemButton>
              </ListItem>
              {connectionGroup.groupItems.map((connection) => (
                <Collapse
                  key={connection.fullName}
                  in={checkExpanded(connectionGroup.groupName)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => { handleScrollToConnection(connection.fullName) }}>
                      <ListItemIcon>
                        <Person4Icon />
                      </ListItemIcon>
                      <ListItemText primary={connection.fullName} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

WorkspaceDrawer.propTypes = {
  connectionGroups: PropTypes.array.isRequired,
};

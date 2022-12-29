import * as React from "react";
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
import { getConnectionGroup } from "../../api";

const drawerWidth = 240;

export default function WorkspaceDrawer({ connectionGroups }) {
  const [expand, setExpand] = React.useState([0]);
  var data = {};
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
    if (expand.indexOf(value) === -1) {
      return true;
    }
    return false;
  }

  const testGetData = async (connectionGroupId) => {
    console.log(data);
    data = await getConnectionGroup(connectionGroupId);
  };

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
          <ListItemButton onClick={() => testGetData(1)}>
            Press to get connection
          </ListItemButton>
          {connectionGroups.map((connectionGroup) => (
            <>
              <ListItem key={connectionGroup.groupName} disablePadding>
                <ListItemButton
                  onClick={() => handleExpand(connectionGroup.groupName)}
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
                  in={checkExpanded(connectionGroup.groupName)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Person4Icon />
                      </ListItemIcon>
                      <ListItemText primary={connection.fullName} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

WorkspaceDrawer.propTypes = {
  connectionGroups: PropTypes.array.isRequired,
};

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
  Divider,
  ListItemIcon,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

export default function WorkspaceDrawer(props) {
  const [propConnectionGroups] = props;
  const [expand, setExpand] = React.useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  const connectionGroups = propConnectionGroups;
  console.log(typeof connectionGroups);

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
          overflow: "auto" /* Side Drawer Settings */,
        }}
      >
        {/* <List>
          {connectionGroups.map((connection) => (
            <ListItem key={connection.groupName} disablePadding>
              <ListItemButton onClick={handleExpand}>
                {expand ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={connection.groupName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem
              bgcolor="#53b4b4"
              color="#53b4b4"
              key={text}
              disablePadding
            >
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
  );
}

WorkspaceDrawer.propTypes = {
  connectionGroups: PropTypes.array.isRequired,
};

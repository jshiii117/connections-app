import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function WorkspaceAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton>
          <ArrowBackIosNewRoundedIcon sx={{ mr: 2, color: "white" }} />
        </IconButton>
        <Box sx={{ flexGrow: 0.55 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Workspace Title
        </Typography>
        <Box sx={{ flexGrow: 0.45 }} />
        <Box sx={{ display: { xs: "none", md: "inline" } }}>
          <Typography variant="h10" color="inherit" noWrap>
            User Name
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            /* aria-controls={menuId} */ aria-haspopup="true"
            onClick={() => console.log("pressed")}
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <AccountCircle />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="settings"
            color="inherit"
          >
            <SettingsRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

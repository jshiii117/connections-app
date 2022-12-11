import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: "white",
  backgroundColor: "#242424",
  "&:hover": {
    backgroundColor: alpha("#242424", 0.8),
  },

  // [theme.breakpoints.up("sm")]: {
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: "20ch",
    },
  },
}));

export default function ConnectionSearchBar() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        maxWidth: 1,
        pr: 30, //Same as padding in App.js Box
        mb: 5,
      }}
    >
      <Search sx={{ minWidth: 300, width: 800 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          fullWidth
          placeholder="Search for people, groups, expertise..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}

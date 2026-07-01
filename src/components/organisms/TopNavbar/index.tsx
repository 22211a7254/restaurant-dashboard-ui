import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Paper,
  Toolbar,
  InputBase,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const TopNavbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#000",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: 530,
            height: 46,
            display: "flex",
            alignItems: "center",
            px: 2,
            borderRadius: 10,
          }}
        >
          <SearchIcon color="action" />

          <InputBase
            placeholder="Search"
            sx={{
              ml: 1,
              flex: 1,
            }}
          />
        </Paper>

        <Box display="flex" alignItems="center" gap={2}>
          <ExploreIcon />

          <AddIcon />

          <CameraAltIcon />

          <NotificationsNoneIcon />

          <Avatar
            src="https://i.pravatar.cc/100"
            sx={{
              width: 42,
              height: 42,
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
import {
  Box,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AddIcon from "@mui/icons-material/Add";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const menuItems = [
  {
    icon: <HomeOutlinedIcon />,
    label: "Dashboard",
    active: true,
  },
  {
    icon: <ExploreOutlinedIcon />,
    label: "Explore",
  },
  {
    icon: <AddIcon />,
    label: "Create post",
  },
  {
    icon: <CameraAltOutlinedIcon />,
    label: "Scan me",
  },
  {
    icon: <LocalOfferOutlinedIcon />,
    label: "Offers",
  },
  {
    icon: <ReviewsOutlinedIcon />,
    label: "My Reviews",
  },
  {
    icon: <BookmarkBorderOutlinedIcon />,
    label: "Saved",
  },
  {
    icon: <SettingsOutlinedIcon />,
    label: "Settings",
  },
];

const SideNavigation = () => {
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        bgcolor: "#FFD8A8",
        px: 3,
        py: 2,
      }}
    >
      {/* Header */}

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mb={5}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>

        <TextField
          size="small"
          placeholder="logo"
          sx={{
            width: 120,
            bgcolor: "#fff",
            borderRadius: 2,
            "& fieldset": {
              border: "none",
            },
          }}
        />
      </Box>

      {/* Menu */}

      {menuItems.map((item) => (
        <Box
          key={item.label}
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            py: 1.5,
            cursor: "pointer",
            color: item.active ? "#5B4DFF" : "#000",
            fontWeight: item.active ? 600 : 400,
          }}
        >
          {item.icon}

          <Typography>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SideNavigation;
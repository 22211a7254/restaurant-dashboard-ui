import { Box } from "@mui/material";

import SideNavigation from "../../organisms/SideNavigation";
import TopNavbar from "../../organisms/TopNavbar";
import RestaurantProfile from "../../organisms/RestaurantProfile";
import FoodMenu from "../../organisms/FoodMenu";
import OfferPanel from "../../organisms/OfferPanel";

const RestaurantDashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#fafafa",
      }}
    >
      {/* Sidebar */}

      <SideNavigation />

      {/* Main */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNavbar />

        {/* Body */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "320px 1fr 300px",
            gap: 5,
            px: 4,
            py: 4,
            alignItems: "start",
          }}
        >
          {/* Restaurant */}

          <RestaurantProfile />

          {/* Menu */}

          <FoodMenu />

          {/* Offers */}

          <OfferPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantDashboard;
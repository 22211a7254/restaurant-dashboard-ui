import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ProfileAvatar from "../../atoms/ProfileAvatar";
import Title from "../../atoms/Title";
import Description from "../../atoms/Description";
import PrimaryButton from "../../atoms/PrimaryButton";

const RestaurantProfile = () => {
  const starbucksLogo =
    "https://upload.wikimedia.org/wikipedia/sco/thumb/4/45/Starbucks_Coffee_Logo.svg/1024px-Starbucks_Coffee_Logo.svg.png";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      {/* Restaurant Logo */}
      <ProfileAvatar image={starbucksLogo} size={180} />

      {/* Restaurant Name */}
      <Box mt={3}>
        <Title text="Starbucks" variant="h4" />
      </Box>

      {/* Address */}
      <Box
        display="flex"
        alignItems="center"
        gap={0.5}
        mt={1}
      >
        <LocationOnIcon
          sx={{
            color: "gray",
            fontSize: 18,
          }}
        />

        <Description text="Gachibowli, Hyderabad" />
      </Box>

      {/* Description */}
      <Box mt={3}>
        <Description
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </Box>

      {/* Edit Button */}
      <Box mt={4}>
        <PrimaryButton title="Edit" />
      </Box>
    </Box>
  );
};

export default RestaurantProfile;
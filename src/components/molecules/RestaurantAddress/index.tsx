import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface RestaurantAddressProps {
  address: string;
}

const RestaurantAddress = ({
  address,
}: RestaurantAddressProps) => {
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      <LocationOnIcon
        sx={{
          fontSize: 16,
          color: "gray",
        }}
      />

      <Typography
        variant="body2"
        color="text.secondary"
      >
        {address}
      </Typography>
    </Box>
  );
};

export default RestaurantAddress;
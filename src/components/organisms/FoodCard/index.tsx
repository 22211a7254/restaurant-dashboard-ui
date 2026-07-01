import {
  Avatar,
  Box,
  Card,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

interface FoodCardProps {
  image: string;
  name: string;
  rating: number;
  price: number;
}

const FoodCard = ({
  image,
  name,
  rating,
  price,
}: FoodCardProps) => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        p: 2,
        mb: 3,
        width: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Avatar
            src={image}
            sx={{
              width: 60,
              height: 60,
            }}
          />

          <Box>
            <Typography
              fontWeight={600}
              fontSize={20}
            >
              {name}
            </Typography>

            <Rating
              value={rating}
              precision={0.5}
              readOnly
              size="small"
            />

            <Typography
              mt={0.5}
              fontWeight={500}
            >
              ₹{price}
            </Typography>
          </Box>
        </Box>

        {/* Edit */}

        <IconButton
          sx={{
            bgcolor: "#FFD59A",
            width: 42,
            height: 42,
            "&:hover": {
              bgcolor: "#FFC979",
            },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default FoodCard;
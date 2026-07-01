import { Box, Rating } from "@mui/material";
import ProfileAvatar from "../../atoms/ProfileAvatar";
import Title from "../../atoms/Title";
import Description from "../../atoms/Description";

interface FoodDetailsProps {
  image: string;
  name: string;
  rating: number;
  price: number;
}

const FoodDetails = ({
  image,
  name,
  rating,
  price,
}: FoodDetailsProps) => {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <ProfileAvatar
        image={image}
        size={60}
      />

      <Box>
        <Title
          text={name}
          variant="h6"
        />

        <Rating
          value={rating}
          precision={0.5}
          readOnly
          size="small"
        />

        <Description text={`₹${price}`} />
      </Box>
    </Box>
  );
};

export default FoodDetails;
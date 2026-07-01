import { Box } from "@mui/material";
import Title from "../../atoms/Title";

interface DiscountCardProps {
  discount: string;
}

const DiscountCard = ({
  discount,
}: DiscountCardProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#ddd",
        borderRadius: 3,
        height: 110,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Title
        text={discount}
        variant="h4"
      />
    </Box>
  );
};

export default DiscountCard;
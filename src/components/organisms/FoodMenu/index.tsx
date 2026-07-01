import { Box, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import FoodCard from "../FoodCard";
import menuData from "../../../data/menuData";

const FoodMenu = () => {
  return (
    <Box width="100%">
      <Typography
        variant="h3"
        mb={3}
      >
        Menu
      </Typography>

      <Paper
        elevation={2}
        sx={{
          height: 75,
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <AddIcon sx={{ fontSize: 40 }} />

        <Typography fontSize={20}>
          Add
        </Typography>
      </Paper>

      {menuData.map((food) => (
        <FoodCard
          key={food.id}
          image={food.image}
          name={food.name}
          rating={food.rating}
          price={food.price}
        />
      ))}
    </Box>
  );
};

export default FoodMenu;
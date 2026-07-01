import { Box, Button, Paper, Typography } from "@mui/material";

const offers = [
  {
    id: 1,
    title: "40% off",
  },
  {
    id: 2,
    title: "40% off",
  },
];

const OfferPanel = () => {
  return (
    <Box width="100%">
      {/* Heading */}

      <Typography
        variant="h3"
        mb={3}
      >
        Offers
      </Typography>

      {offers.map((offer) => (
        <Paper
          key={offer.id}
          elevation={3}
          sx={{
            height: 110,
            mb: 3,
            borderRadius: 3,
            bgcolor: "#ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={28}
            fontWeight={500}
          >
            {offer.title}
          </Typography>
        </Paper>
      ))}

      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFD59A",
            color: "#000",
            borderRadius: 5,
            px: 5,
            textTransform: "none",
            boxShadow: 2,
            "&:hover": {
              bgcolor: "#FFC979",
            },
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default OfferPanel;
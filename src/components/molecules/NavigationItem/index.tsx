import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface NavigationItemProps {
  icon: ReactNode;
  title: string;
  active?: boolean;
}

const NavigationItem = ({
  icon,
  title,
  active = false,
}: NavigationItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{
        cursor: "pointer",
        p: 1,
        borderRadius: 2,
        color: active ? "#4F46E5" : "#222",
        "&:hover": {
          bgcolor: "#fff3e0",
        },
      }}
    >
      {icon}

      <Typography fontSize={18}>
        {title}
      </Typography>
    </Box>
  );
};

export default NavigationItem;
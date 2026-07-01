import { IconButton } from "@mui/material";
import { ReactNode } from "react";

interface CustomIconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

const CustomIconButton = ({
  icon,
  onClick,
}: CustomIconButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        bgcolor: "#FFD59A",
        "&:hover": {
          bgcolor: "#ffc980",
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
  startIcon?: ReactNode;
}

const PrimaryButton = ({
  title,
  onClick,
  startIcon,
}: PrimaryButtonProps) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        bgcolor: "#FFC980",
        color: "#000",
        textTransform: "none",
        borderRadius: "12px",
        px: 4,
        py: 1,
        "&:hover": {
          bgcolor: "#ffbf66",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
import { Typography } from "@mui/material";

interface DescriptionProps {
  text: string;
}

const Description = ({ text }: DescriptionProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
    >
      {text}
    </Typography>
  );
};

export default Description;
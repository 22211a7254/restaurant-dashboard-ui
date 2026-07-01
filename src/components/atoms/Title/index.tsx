import { Typography } from "@mui/material";

interface TitleProps {
  text: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
}

const Title = ({ text, variant = "h5" }: TitleProps) => {
  return (
    <Typography
      variant={variant}
      fontWeight={600}
    >
      {text}
    </Typography>
  );
};

export default Title;
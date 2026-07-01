import { Typography } from "@mui/material";

interface AppLogoProps {
  text: string;
}

const AppLogo = ({ text }: AppLogoProps) => {
  return (
    <Typography
      variant="h5"
      fontWeight={700}
      color="primary"
    >
      {text}
    </Typography>
  );
};

export default AppLogo;
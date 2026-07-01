import { Box } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F5F5",
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
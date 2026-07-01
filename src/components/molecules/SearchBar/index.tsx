import { Box } from "@mui/material";
import CustomInput from "../../atoms/CustomInput";

const SearchBar = () => {
  return (
    <Box width="100%">
      <CustomInput placeholder="Search" />
    </Box>
  );
};

export default SearchBar;
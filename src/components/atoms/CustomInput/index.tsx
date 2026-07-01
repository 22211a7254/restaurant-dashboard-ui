import {
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface CustomInputProps {
  placeholder?: string;
}

const CustomInput = ({
  placeholder,
}: CustomInputProps) => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
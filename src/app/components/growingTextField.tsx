import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";


function GrowingTextField({ placeholder = "Search", ...props }: TextFieldProps) {
    return (
        <Box
            sx={{
                width: "120px",
                transition: "width 0.3s ease",
                "&:focus-within": {
                    width: "150px",
                },
                '@media (min-width:768px)': {
                    width: "300px",
                    transition: "width 0.3s ease",
                    "&:focus-within": {
                        width: "400px",
                    },
                }
            }}
        >
            <TextField
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
        </Box>
    );
}

export default GrowingTextField;
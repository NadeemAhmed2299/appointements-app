import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Tooltip,
  Typography,
} from '@mui/material';
import { ReactNode, forwardRef } from 'react';

type SelectBoxProps = {
  label: string;
  helperText?: string;
  title?: ReactNode;
  required?: boolean;
  options: { label: string; value: string }[];
  error?: boolean;
} & SelectProps;

// Using forwardRef to support react-hook-form's ref injection
const SelectBox = forwardRef<HTMLSelectElement, SelectBoxProps>(function SelectBox(
  { label, helperText, title, required, options, error, ...props },
  ref
) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        gutterBottom
        component="label"
        variant="body1"
        fontWeight="500"
        htmlFor={label}
      >
        {label}
        {required && (
          <Typography component="span" color="error">
            &nbsp;*
          </Typography>
        )}
        {title && (
          <Tooltip title={title} placement="right" arrow>
            <InfoOutlinedIcon
              sx={{
                fontSize: '14px',
                mx: 0.5,
                position: 'relative',
                bottom: '6px',
              }}
            />
          </Tooltip>
        )}
      </Typography>

      <FormControl fullWidth error={error}>
        <Select
          inputRef={ref}
          displayEmpty
          id={label}
          labelId={`${label}-select-label`}
          {...props}
          sx={{
            height: '100%',
            '.MuiSelect-select': {
              paddingTop: '10.5px',
              paddingBottom: '10.5px'
            },
          }}
        >
          <MenuItem value="" disabled>
            Select
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box
        component="div"
        sx={{
          color: 'error.main',
          fontSize: '0.875rem',
          mt: 0.5,
          maxHeight: helperText ? '20px' : '0px',
          opacity: helperText ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        }}
      >
        {helperText}
      </Box>
    </Box>
  );
});

export default SelectBox;

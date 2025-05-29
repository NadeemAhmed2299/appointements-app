import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, TextField, TextFieldProps, Tooltip, Typography } from '@mui/material';
import { ReactNode } from 'react';

type TextAreaBoxProps = {
  label: string;
  helperText?: string;
  title?: ReactNode;
  required?: boolean;
  minRows?: number;
  maxRows?: number;
} & TextFieldProps;

function TextAreaBox({
  label,
  helperText,
  title,
  required,
  minRows = 3,
  maxRows = 10,
  ...props
}: TextAreaBoxProps) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography
        component="label"
        variant="body1"
        fontWeight={500}
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
                bottom: '2px',
              }}
            />
          </Tooltip>
        )}
      </Typography>

      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          p: 1,
        }}
      >
        <TextField
          id={label}
          name={label}
          multiline
          fullWidth
          InputProps={{ disableUnderline: true }}          
          variant="standard"
          minRows={minRows}
          maxRows={maxRows}
          sx={{
            '& textarea': {
              fontSize: '0.95rem',
              fontFamily: 'inherit',
            },
          }}
          {...props}
        />
      </Box>

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
}

export default TextAreaBox;

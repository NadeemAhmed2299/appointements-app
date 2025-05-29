import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, TextField, TextFieldProps, Tooltip, Typography } from '@mui/material';
import { ReactNode } from 'react';

type TextBoxProps = {
  label?: string;
  helperText?: string;
  title?: ReactNode;
  required?: boolean;
} & TextFieldProps;

function TextBox({ label, helperText, title, required, ...props }: TextBoxProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography gutterBottom component={"label"} variant="body1" fontWeight="500" htmlFor={label}>
        {label}
        
        {required && <Typography component="span" color="error">&nbsp;*</Typography>}
        
        {title &&
          <Tooltip
            title={title}
            placement="right"
            arrow
          >
            <InfoOutlinedIcon sx={{ fontSize: '14px', mx: 0.5, position: 'relative', bottom: '6px' }} />
          </Tooltip>
        }
      </Typography>

      <TextField sx={{ m: 0 }} id={label} name={label} {...props} />
      
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

export default TextBox;
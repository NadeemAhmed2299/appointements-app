import { Checkbox, FormControlLabel, FormHelperText, Tooltip, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ReactNode } from 'react';

type CheckBoxProps = {
  label?: string;
  title?: ReactNode;
  required?: boolean;
  helperText?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

export default function CheckBox({
  label,
  title,
  required,
  helperText,
  checked,
  onChange,
  name,
}: CheckBoxProps) {
  return (
    <Box display="flex" flexDirection="column">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            name={name}
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <Typography component="span" fontWeight="500">
              {label}
              {required && <Typography component="span" color="error">&nbsp;*</Typography>}
            </Typography>
            {title && (
              <Tooltip title={title} placement="right" arrow>
                <InfoOutlinedIcon sx={{ fontSize: '16px', ml: 0.5 }} />
              </Tooltip>
            )}
          </Box>
        }
      />
      {helperText && (
        <FormHelperText error>{helperText}</FormHelperText>
      )}
    </Box>
  );
}

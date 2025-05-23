

import { Box, Typography } from '@mui/material';
import React from 'react';

interface PageTitleProps {
  pageName: React.ReactNode;
  actions?: React.ReactNode;
  isPageHeader?: boolean
}

const ComponentHeader: React.FC<PageTitleProps> = ({ pageName, actions, isPageHeader }) => {
  return (
    <Box
      display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          alignItems: {
            xs: 'flex-start',
            sm: 'center'
          },
          gap: 1.5
        }}
    >
      <Typography variant={isPageHeader ? "h1" : "h3"} component="div">
        {pageName}
      </Typography>
      {actions && <Box>{actions}</Box>}
    </Box>
  );
};

export default ComponentHeader;
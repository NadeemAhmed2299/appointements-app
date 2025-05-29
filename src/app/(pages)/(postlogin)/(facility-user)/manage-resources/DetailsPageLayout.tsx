import { Box, Typography, Paper, Chip, Button, Tabs, Tab } from '@mui/material';
import { ReactNode } from 'react';

type DetailsLayoutProps = {
  headerTitle: string;
  headerSubtitle: string;
  status: string;
  statusColor?: 'success' | 'error' | 'warning';
  extraInfo?: ReactNode;
  showTabs?: boolean;
  tabLabels?: string[];
  onTabChange?: (index: number) => void;
  activeTab?: number;
  children: ReactNode;
};

export default function DetailsLayout({
  headerTitle,
  headerSubtitle,
  status,
  statusColor = 'success',
  extraInfo,
  showTabs = false,
  tabLabels = [],
  onTabChange,
  activeTab = 0,
  children,
}: DetailsLayoutProps) {
  return (
    <Box>
      <Paper sx={{ mt: 2, p: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6">{headerTitle}</Typography>
          <Typography variant="body2">{headerSubtitle}</Typography>
        </Box>
        <Chip label={status} color={statusColor} />
      </Paper>

      {extraInfo && (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          {extraInfo}
        </Box>
      )}

      <Paper sx={{ mt: 3, p: 2 }}>
        {showTabs && (
          <Tabs value={activeTab} onChange={(_, i) => onTabChange?.(i)} sx={{ mb: 2 }}>
            {tabLabels.map((label, idx) => (
              <Tab key={idx} label={label} />
            ))}
          </Tabs>
        )}

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Scheduled Events</Typography>
          <Button variant="contained" color="secondary">Schedule Event</Button>
        </Box>

        <Box mt={2}>{children}</Box>
      </Paper>
    </Box>
  );
}

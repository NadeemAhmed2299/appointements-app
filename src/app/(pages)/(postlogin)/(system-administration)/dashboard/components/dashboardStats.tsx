import { people, calendar, facility, organization } from '@/app/svg'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const data = [
  { label: 'Total Organizations', value: 152, icon: organization, color: '#8280FF' },
  { label: 'Total Facilities', value: 156, icon: facility , color: '#FEC53D'},
  { label: 'Active Users', value: 2743, icon: people, color: '#4AD991' },
  { label: 'Appointments', value: 78492, icon: calendar, color: '#FF9871' },
];

export default function DashboardStats() {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.label}>
          <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h2" pt={2}>{item.value}</Typography>
            </CardContent>
            <Box sx={{ pr: 2, color: item.color }}>
              <Image src={item.icon} alt="image-icon" width={60} height={60} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
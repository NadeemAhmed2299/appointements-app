import { people, calendar, facility, organization, graph, cube } from '@/app/svg'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const data = [
  { label: 'Total Nurses', value: 152, icon: people, color: '#8280FF' },
  { label: 'Today’s Appointments', value: 156, icon: calendar , color: '#FEC53D'},
  { label: 'Current Utilization', value: 2743, icon: graph, color: '#4AD991' },
  { label: 'Department Health', value: "Needs Attention", icon: cube, color: '#FF9871' },
];

export default function DashboardStats() {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.label}>
          <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h3" pt={2}>{item.value}</Typography>
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
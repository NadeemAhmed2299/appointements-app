import { spikeErrorIcon, spikeIcon } from '@/app/svg';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const metrics = [
    { title: 'Total Appointments', value: '1,256', change: '+4.2%', up: true },
    { title: 'Automation Rate', value: '94.3%', change: '+7.5%', up: true },
    { title: 'Capacity Utilization', value: '83.7%', change: '+2.1%', up: true },
    { title: 'No show Rate', value: '7.3%', change: '-0.5%', up: false },
    { title: 'Staff Time Saved', value: '72.5 hrs', change: '+12.3%', up: true },
    { title: 'Patient Satisfaction', value: '4.7/5', change: '+0.3%', up: true },
];

export default function MetricCards() {
    return (
        <>
            {
                metrics.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 2, md: 6 }} key={index}>
                    <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">{item.title}</Typography>
                            <Typography variant="h2" pt={2}>{item.value}</Typography>
                                <Box display="flex" alignItems="center" mt={0.5}>
                                {item.up ? (
                                    <Image src={spikeIcon} alt="spike Icon" width={24} height={24} />
                                ) : (
                                    <Image src={spikeErrorIcon} alt="spike Icon" width={24} height={24} />
                                )}
                                <Typography
                                    variant="caption"
                                    color={item.up ? 'success.main' : 'error.main'}
                                    ml={0.5}
                                >
                                    {item.change}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    </Grid>
                ))
            }
        </>
    );
}
import { spikeIcon, spikeErrorIcon } from '@/app/svg'
import { Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import Image from 'next/image';
import { Fragment } from 'react';

interface MetricData {
    title: string;
    value: number;
    change: string;
    up: boolean;
}

const metricsData: MetricData[] = [
    { title: 'Overall Efficiency Score', value: 94.2, change: '2.5%', up: true },
    { title: 'Resource Utilization', value: 69.7, change: '1.6%', up: true },
    { title: 'Wait Time Reduction', value: 37.5, change: '4.2%', up: true },
    { title: 'Patient Satisfaction', value: 22.8, change: '3.1%', up: false }
];

export default function AiOptimizationMetrics() {
    return (
        <Fragment>
            {

                metricsData.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="subtitle2" color="text.secondary">{item.title}</Typography>
                                <Typography variant="h2" pt={1}>{item.value} %</Typography>
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
                                        {item.change} {item.up ? 'up' : 'down'} from last week
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={item.value}                                    
                                    sx={{ height: 8, borderRadius: 4, mt: 1, width: '100%', display: 'block', }}
                                    color={item.value> 75 ? 'primary' : item.value > 50 ? 'success' : item.value > 25 ? 'warning' : 'error'}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Fragment>
    )
}
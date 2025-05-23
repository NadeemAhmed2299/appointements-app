'use client';

import * as React from 'react';
import { Box, Typography, Stack, Grid, Card, CardContent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

interface AbsenceReasonProps {
    label: string;
    value: number;
    color: string;
    autoResolved: string;
}


const absenceReasons: AbsenceReasonProps[] = [
    {
        label: 'Personal conflicts',
        value: 98,
        color: '#8280FF',
        autoResolved: '93.9%',
    },
    {
        label: 'Transportation',
        value: 42,
        color: '#7F56D9',
        autoResolved: '90.5%',
    },
    {
        label: 'Treatment effects',
        value: 31,
        color: '#4AD991',
        autoResolved: '87.1%',
    },
    {
        label: 'Other',
        value: 16,
        color: '#FECB50',
        autoResolved: '56.3%',
    },
];

const valueFormatter = (item: { value: number }) => `${item.value}`;

export default function AbsenceReasonsChart() {
    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none', height: '100%' }} >
                <CardContent>
                    <Typography variant="h2" mb={3}>Patient-Initiated Changes</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                            flexWrap: 'wrap',
                            '@media (min-width:1600px)': {
                                flexWrap: 'nowrap',
                            },
                        }}
                    >
                        <PieChart
                            width={180}
                            height={180}
                            series={[
                                {
                                    data: absenceReasons.map((item) => ({
                                        ...item,
                                        id: item.label,
                                        color: item.color,
                                    })),
                                    innerRadius: 30,
                                    outerRadius: 80,
                                    arcLabelMinAngle: 10,
                                    valueFormatter,
                                },
                            ]}
                            hideLegend={true}
                        />
                        <Stack>
                            <Box>
                                {absenceReasons.map((item) => (
                                    <Stack
                                        key={item.label}
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                backgroundColor: item.color,
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="body1" fontWeight="bold">
                                                {item.label} ({item.value})
                                            </Typography>
                                            <Typography variant="body2">
                                                Auto-resolved: {item.autoResolved}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Box>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

// components/CaseBarChart.tsx
'use client';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Grid, Typography } from '@mui/material';

interface CaseData {
    category: string;
    cases: number;
    [key: string]: string | number;
}

const caseDataset: CaseData[] = [
    { category: 'Complex medical', cases: 26 },
    { category: 'Multi-provider', cases: 19 },
    { category: 'Insurance', cases: 15 },
    { category: 'Equipment', cases: 10 },
    { category: 'Other', cases: 2 },
];

export default function CaseBarChart() {
    return (
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
                <CardContent>
                    <Typography variant="h2" mb={3}>Manual Interventions (72 total)</Typography>

                    <BarChart
                        dataset={caseDataset}
                        borderRadius={20}
                        xAxis={[
                            {
                                dataKey: 'category',
                                scaleType: 'band',
                                tickLabelPlacement: 'middle',
                            },
                        ]}
                        series={[
                            {
                                dataKey: 'cases',
                                label: 'Cases',
                                color: '#7F56D9',
                                valueFormatter: (v) => `${v} cases`,
                            },
                        ]}
                        yAxis={[{ max: 30 }]}
                        height={300}
                        sx={{
                            '.MuiChartsBar-root': {
                                rx: 10,
                            },
                            '.MuiChartsLegend-root': {
                                display: 'none',
                            },
                        }}
                    />
                </CardContent>
            </Card>
        </Grid>
    );
}

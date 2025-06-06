"use client"

import DataTable from '@/app/components/dataTable';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

interface InfoCardProps {
    title: string;
    value: string;
}

interface waitListData {
    provider: string;
    load: string;
    status: string;
}

const providerSchedulingCards: InfoCardProps[] = [
    { title: 'Avg. Load', value: '12.3' },
    { title: 'Utilization', value: '91%' },
    { title: 'Issues', value: '3' }
];

const providersSchedulingData: waitListData[] = [
    { provider: 'Dr. Roberts', load: '95%', status: 'Overbooked' },
    { provider: 'Dr. Chen', load: '87%', status: 'Optimal' }
];


function ProviderScheduling() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const columns = [
        { field: 'provider', headerName: 'Provider', flex: 1 },
        { field: 'load', headerName: 'Load', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 }
    ]
    return (

        <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
                <CardContent>
                    <Typography variant="h2" mb={3}>Waitlist Management</Typography>
                    <Grid container spacing={2} sx={{ paddingBottom: '20px' }}>
                        {providerSchedulingCards.map((listVal, index) => {
                            return (
                                <Grid size={{ xs: 12, md: 12, lg: 4 }} key={index}>
                                    <Card
                                        sx={{
                                            border: `1px solid ${Number(listVal.value) < 5 ? '#FF0000' : ''}`,
                                            boxShadow: 'none',
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" color={Number(listVal.value) < 5 ? 'error.main' : ''} fontWeight="700" sx={{ textAlign: 'center' }}>{listVal.title}</Typography>
                                            <Typography variant="h2" color={Number(listVal.value) < 5 ? 'error.main' : ''} fontWeight="700" sx={{ textAlign: 'center' }}>{listVal.value}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                    {isMounted && <DataTable
                        tableRows={providersSchedulingData}
                        columns={columns}
                        getRowId={(row) => row.id}
                    />}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProviderScheduling;

"use client"

import { Box, Typography, Chip, Button } from '@mui/material';
import { Fragment } from 'react';
import Header from '@/app/components/header';
import GrowingTextField from '@/app/components/growingTextField';
import ComponentHeader from '@/app/components/componentHeader';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import DetailsLayout from '../../DetailsPageLayout';

export default function RoomDetailsPage() {
  const router = useRouter();
  return (
    <Fragment>
      <Header pillLabel="Facility" userRole="Facility">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <Button
        startIcon={<ArrowBack />}
        onClick={() => router.back()}
        sx={{ mb: 2 }}
        variant="outlined"
      >
        Back
      </Button>
      <ComponentHeader isPageHeader={true} pageName={"Room Details"} />
      <DetailsLayout
        headerTitle="Conference Room A"
        headerSubtitle="Main Building • 1st Floor • Capacity: 20 people"
        status="Available"
        statusColor="success"
      >
        <Box display="flex" alignItems="flex-start" gap={2}>
          <Box>
            <Typography fontWeight="bold">Weekly Management Meeting</Typography>
            <Typography variant="body2">Conference Room A</Typography>
            <Typography variant="body2">5/21/2025 09:00 AM - 10:30 AM</Typography>
            <Typography variant="caption">
              Organizer: Sarah Johnson | Attendees: 8
            </Typography>
            <Box mt={1} display="flex" gap={1}>
              <Chip label="Recurring" color="secondary" size="small" />
              <Chip label="Medium" color="warning" size="small" />
            </Box>
          </Box>
        </Box>
      </DetailsLayout>
    </Fragment>
  );
}

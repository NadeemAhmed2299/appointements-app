"use client"

import {
  Box,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Fragment, useState } from 'react';
import Header from '@/app/components/header';
import GrowingTextField from '@/app/components/growingTextField';
import ComponentHeader from '@/app/components/componentHeader';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import DetailsLayout from '../../DetailsPageLayout';

export default function EquipmentDetailsPage() {
  const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();

  const extraInfo = (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Typography variant="body2">Next Maintenance: 2025-06-15</Typography>
      <Typography variant="body2">Maintenance Frequency: 45 Days</Typography>
      <Typography variant="body2">Last Calibration: 2025-04-05</Typography>
    </Box>
  );

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
      <ComponentHeader isPageHeader={true} pageName={"Equipment Details"} />
      <DetailsLayout
        headerTitle="Linear Accelerator #1"
        headerSubtitle="Radiation Therapy • Radiation Wing - Room 103"
        status="Operational"
        statusColor="success"
        extraInfo={extraInfo}
        showTabs
        tabLabels={['Upcoming Events', 'Maintenance History']}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      >
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Technician</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Action(s)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Quarterly Calibration Maintenance</TableCell>
                <TableCell>
                  Start: 6/15/2025 08:00 AM<br />
                  End: 6/15/2025 12:00 PM
                </TableCell>
                <TableCell>Robert Chen</TableCell>
                <TableCell>
                  <Chip label="Medium" color="warning" size="small" />
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DetailsLayout>
    </Fragment>
  );
}

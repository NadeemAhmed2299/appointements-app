"use client"

import { Box, Chip, Grid, IconButton, Menu, MenuItem, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TimeSlot as TimeSlotType } from "../schedule";
import { ArrowDropDown, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { formatDate, formatWeekRange, getWeekRange, getWeeksInMonth, mockPhysicians } from "../mockPhysician";
import TimeSlot from "./TimeSlot";
import UtilizationBar from "./UtilizationBar";
import { CalendarLegend } from "./CalendarLegands";
import { useEffect, useState } from "react";

const PhysicianCalendar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setCurrentDate(new Date()); // This will use the current date
  }, []);

  // Return loading state while date is being initialized
  if (!currentDate) {
    return <div>Loading calendar...</div>;
  }

  // Get current week range
  const { start: weekStart, end: weekEnd } = getWeekRange(currentDate);
  const weekRangeLabel = formatWeekRange(weekStart, weekEnd);

  // Get all weeks in current month
  const weeksInMonth = getWeeksInMonth(currentDate);
  const currentMonth = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  // Generate dates for the current week
  const dates: any = [];
  const currentDay = new Date(weekStart);
  for (let i = 0; i < 5; i++) {
    dates.push(formatDate(new Date(currentDay)));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleWeekClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleWeekClose = () => {
    setAnchorEl(null);
  };

  const handleWeekSelect = (week: { start: Date; end: Date }) => {
    setCurrentDate(week.start);
    handleWeekClose();
  };

  const handleSlotClick = (physicianName: string, day: string, slot: TimeSlotType) => {
    console.log(`Clicked ${physicianName} - ${day} - ${slot.time}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', p: 2, borderRadius: "10px"}}>
      <Box>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 0.5,
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={handleWeekClick}
            >
              <Typography variant="h4">
                {weekRangeLabel}
              </Typography>
              <ArrowDropDown />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handlePrevMonth}>
              <ChevronLeft />
            </IconButton>
            <Typography variant="h3" sx={{ minWidth: 120, textAlign: 'center' }}>
              {currentMonth}
            </Typography>
            <IconButton onClick={handleNextMonth}>
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        {/* Week selection menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleWeekClose}
          PaperProps={{
            style: {
              maxHeight: 300,
              width: '40ch',
            },
          }}
        >
          {weeksInMonth.map((week, index) => (
            <MenuItem
              key={index}
              onClick={() => handleWeekSelect(week)}
              selected={
                week.start.getTime() === weekStart.getTime() &&
                week.end.getTime() === weekEnd.getTime()
              }
            >
              {week.label}
            </MenuItem>
          ))}
        </Menu>

        <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
          {/* Main Calendar */}
          <Box sx={{ flex: 1 }}>
            {/* Calendar Table */}
            <Paper sx={{ borderRadius: 1, border: 1, borderColor: 'divider' }}>
              {/* Header Row */}
              <Grid container sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Grid size={{ xs: 12, md: 2.5 }} sx={{ p: 1.5, borderRight: 1, borderColor: 'divider' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                    Physician
                  </Typography>
                </Grid>
                {days.map((day, index) => (
                  <Grid
                    key={day}
                    size={{ xs: 12, md: 1.5 }}
                    sx={{
                      p: 1.5,
                      borderRight: 1,
                      borderColor: 'divider',
                      textAlign: 'center',
                      '&:last-child': { borderRight: 0 }
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                      {day}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {dates[index]}
                    </Typography>
                  </Grid>
                ))}
                <Grid size={{ xs: 12, md: 2 }} sx={{ p: 1.5, textAlign: 'center' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                    Weekly Status
                  </Typography>
                </Grid>
              </Grid>

              {/* Physician Rows */}
              {mockPhysicians.map((physician, physicianIndex) => (
                <Grid  
                  key={physicianIndex}
                  container
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    '&:last-child': { borderBottom: 0 }
                  }}
                >
                  {/* Physician Info */}
                  <Grid size={{ xs: 12, md: 2.5 }} sx={{ p: 1.5, borderRight: 1, borderColor: 'divider' }}>
                    <Paper
                      sx={{
                        p: 1,
                        border: 1,
                        borderRadius: 1,
                        borderColor: '#7F56D9',
                        bgcolor: '#7f56d91a',
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {physician.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {physician.specialty}
                      </Typography>
                      <Chip
                        label={physician.statusLabel}
                        size="small"
                        sx={{
                          mt: 0.5,
                          bgcolor: physician.statusLabel === 'Mostly Booked' ? 'success.main' : 'error.main',
                          color: 'common.white',
                          fontSize: '0.625rem',
                          height: 20
                        }}
                      />
                    </Paper>
                  </Grid>

                  {/* Daily Schedule */}
                  {days.map((day) => (
                    <Grid
                      key={day}
                      size={{ xs: 12, md: 1.5 }}
                      sx={{
                        p: 1,
                        borderRight: 1,
                        borderColor: 'divider',
                        '&:last-child': { borderRight: 0 }
                      }}
                    >
                      <Box sx={{ minHeight: 64 }}>
                        {physician.schedule[day]?.map((slot, slotIndex) => (
                          <TimeSlot
                            key={slotIndex}
                            slot={slot}
                            onClick={() => handleSlotClick(physician.name, day, slot)}
                          />
                        ))}
                      </Box>
                      <UtilizationBar percentage={Math.floor(Math.random() * 40) + 60} />
                    </Grid>
                  ))}

                  {/* Weekly Status */}
                  <Grid size={{ xs: 12, md: 2 }} sx={{ p: 1.5, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                      {physician.weeklyStatus.percentage}% Booked
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
                      {physician.weeklyStatus.consultations} Consultations
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      {physician.weeklyStatus.reviews} Chemo Reviews
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Paper>
          </Box>

          {/* Calendar Legend Sidebar */}
          {!isMobile && (
            <Box sx={{ width: 240, flexShrink: 0 }}>
              <CalendarLegend />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PhysicianCalendar;
import { Physician, WeekRange } from "../(pages)/(postlogin)/(nurse-administration)/physician-assignments/schedule";

// utils/scheduleUtils.ts
export const processOutOfOfficeEvents = (physician: Physician, weekDates: WeekRange): Physician => {
  if (!physician.outOfOfficeEvents) return physician;

  const processedSchedule = { ...physician.schedule };
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const;

  physician.outOfOfficeEvents.forEach(event => {
    // Check if event overlaps with current week
    if (event.endDate < weekDates.start || event.startDate > weekDates.end) return;

    days.forEach(day => {
      const dayDate = new Date(weekDates.start);
      dayDate.setDate(weekDates.start.getDate() + 
        (day === 'monday' ? 0 : 
         day === 'tuesday' ? 1 :
         day === 'wednesday' ? 2 :
         day === 'thursday' ? 3 : 4));

      if (dayDate >= event.startDate && dayDate <= event.endDate) {
        processedSchedule[day] = [{
          time: 'All Day',
          status: 'out-of-office',
          label: event.label,
          eventId: event.startDate.toISOString()
        }];
      }
    });
  });

  return {
    ...physician,
    schedule: processedSchedule
  };
};
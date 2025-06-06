import { Physician } from "./schedule";


export const mockPhysicians: Physician[] = [
  {
    name: 'Dr. Martinez',
    specialty: 'Oncology',
    statusLabel: 'Mostly Booked',
    weeklyStatus: { percentage: 90, consultations: 18, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:30 AM', status: 'booked' }
      ],
      'TUE': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'WED': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:30 AM', status: 'booked' }
      ],
      'THU': [
        { time: '01:00 PM', status: 'booked' },
        { time: '03:00 PM', status: 'booked' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:00 AM', status: 'booked' }
      ]
    }
  },
  {
    name: 'Dr. Williams',
    specialty: 'Oncology',
    statusLabel: 'Mostly Booked',
    weeklyStatus: { percentage: 78, consultations: 16, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'TUE': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'WED': [
        { time: 'Out of Office', status: 'out-of-office', label: 'Out of Office' }
      ],
      'THU': [
        { time: 'Out of Office', status: 'out-of-office', label: 'Out of Office' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:00 AM', status: 'booked' }
      ]
    }
  },
  {
    name: 'Dr. Johnson',
    specialty: 'Oncology',
    statusLabel: 'Under Booked',
    weeklyStatus: { percentage: 35, consultations: 10, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'unbooked', label: 'Consultation' },
        { time: '10:30 AM', status: 'unbooked', label: 'Chemo Review' },
        { time: '12:00 PM', status: 'unbooked', label: 'Lunch-break'}
      ],
      'TUE': [
        { time: '09:00 AM', status: 'unbooked', label: 'Chemo Review' },
        { time: '11:00 AM', status: 'unbooked', label: 'Chemo Review' }
      ],
      'WED': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:30 AM', status: 'booked' }
      ],
      'THU': [
        { time: '01:00 PM', status: 'unbooked' },
        { time: '03:00 PM', status: 'unbooked' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'unbooked' },
        { time: '10:00 AM', status: 'unbooked' }
      ]
    }
  },
  {
    name: '142 × 92',
    specialty: 'Oncology',
    statusLabel: 'Mostly Booked',
    weeklyStatus: { percentage: 72, consultations: 18, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:30 AM', status: 'booked' }
      ],
      'TUE': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'WED': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:30 AM', status: 'booked' }
      ],
      'THU': [
        { time: '01:00 PM', status: 'booked' },
        { time: '03:00 PM', status: 'booked' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:00 AM', status: 'booked' }
      ]
    }
  },
  {
    name: 'Dr. Chen',
    specialty: 'Oncology',
    statusLabel: 'Mostly Booked',
    weeklyStatus: { percentage: 90, consultations: 18, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:30 AM', status: 'booked' }
      ],
      'TUE': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'WED': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:30 AM', status: 'booked' }
      ],
      'THU': [
        { time: '01:00 PM', status: 'booked' },
        { time: '03:00 PM', status: 'booked' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:00 AM', status: 'booked' }
      ]
    }
  },
  {
    name: 'Dr. Thompson',
    specialty: 'Oncology',
    statusLabel: 'Mostly Booked',
    weeklyStatus: { percentage: 90, consultations: 18, reviews: 12 },
    schedule: {
      'MON': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:30 AM', status: 'booked' }
      ],
      'TUE': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:00 AM', status: 'booked' }
      ],
      'WED': [
        { time: '09:00 AM', status: 'booked' },
        { time: '11:30 AM', status: 'booked' }
      ],
      'THU': [
        { time: '01:00 PM', status: 'booked' },
        { time: '03:00 PM', status: 'booked' }
      ],
      'FRI': [
        { time: '09:00 AM', status: 'booked' },
        { time: '10:00 AM', status: 'booked' }
      ]
    }
  }
];

export const getWeekRange = (date: Date) => {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay() + 1); // Start on Monday
  const end = new Date(start);
  end.setDate(start.getDate() + 4); // End on Friday (5-day week)

  return { start, end };
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const formatWeekRange = (start: Date, end: Date) => {
  return `Week of ${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}-${end.toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}`;
};

export const getWeeksInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  let currentWeekStart = new Date(firstDay);
  // Adjust to start on Monday
  if (currentWeekStart.getDay() !== 1) {
    currentWeekStart.setDate(currentWeekStart.getDate() - (currentWeekStart.getDay() - 1));
  }

  while (currentWeekStart <= lastDay) {
    const currentWeekEnd = new Date(currentWeekStart);
    currentWeekEnd.setDate(currentWeekStart.getDate() + 4); // 5-day week (Mon-Fri)

    if (currentWeekStart.getMonth() === month || currentWeekEnd.getMonth() === month) {
      weeks.push({
        start: new Date(currentWeekStart),
        end: new Date(currentWeekEnd),
        label: `Week of ${formatDate(currentWeekStart)}-${formatDate(currentWeekEnd)}`
      });
    }

    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return weeks;
};

export interface TimeSlot {
  time: string;
  status: 'booked' | 'unbooked' | 'out-of-office';
  label?: string;
}

export interface Physician {
  name: string;
  specialty: string;
  statusLabel: 'Mostly Booked' | 'Under Booked';
  weeklyStatus: {
    percentage: number;
    consultations: number;
    reviews: number;
  };
  schedule: {
    [day: string]: TimeSlot[];
  };
}
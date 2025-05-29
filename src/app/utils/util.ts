import USACities from './data/usCities';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//const usaPhoneRegex = /^(\+1\s?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
const usaPhoneRegexRelaxed = /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function isValidUSAPhoneNumber(number: string): boolean {
  return usaPhoneRegexRelaxed.test(number);
}

export function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // in seconds

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diff / unit.seconds);
    if (value >= 1) {
      return `${value} ${unit.name}${value > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

// TODO: Optimize below 3 functions to use a single function with parameters for status and color mapping
export function getStatusColor(status: string):
  ("secondary" | "error" | "info" | "success" | "warning" | "default") {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "error";
    case "Pending":
      return "warning";
    default:
      return "default";
  }
};

export function getRoomStatusColor(status: string):
  ("primary" | "error" | "success" | "warning" | "default") {
  switch (status) {
    case "Available":
      return "success";
    case "Booked":
      return "error";
    case "Maintenance":
      return "warning";
    default:
      return "default";
  }
};


export function getPriorityStatusColor(status: string):
  ("primary" | "error" | "success" | "warning" | "default") {
  switch (status) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      case 'recurring':
        return 'primary';
      default:
        return 'default';
    }
};


export function isValidUsaCity(city: string): boolean {
  return USACities.includes(city.trim());
}



export function formatDateToShortMonth(dateInput: string | Date): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
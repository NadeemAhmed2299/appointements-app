
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Schedule as ScheduleIcon,
    Settings as SettingsIcon
} from "@mui/icons-material";

export const routeList = [
    { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
    { label: "Facility", icon: <SettingsIcon />, href: "/facility" },
    { label: "Resources", icon: <PeopleIcon />, href: "/resources" },
    { label: "Schedule", icon: <ScheduleIcon />, href: "/schedule" },
];
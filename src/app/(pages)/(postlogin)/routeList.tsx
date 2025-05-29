
import { dashboardIcon, graphIcon, historyIcon, hospitalIcon, organizationIcon, powerIcon, profileIcon, setting2Icon, settingsIcon } from "@/app/svg";

export const routeList = [
    { label: 'Dashboard', icon: dashboardIcon, href: '/dashboard' },
    { label: 'Resources', icon: organizationIcon, href: '/resources' },
    { label: 'Schedules', icon: hospitalIcon, href: '/schedules' },
    { label: 'History', icon: historyIcon, href: '/history' },
    { label: 'Users', icon: profileIcon, href: '/users' },
    { label: 'Settings', icon: settingsIcon, href: '/settings' },
    { label: 'Stats', icon: graphIcon, href: '/stats' },
    { label: 'OtherSettings', icon: setting2Icon, href: '/other-settings' },
    { label: 'Logout', icon: powerIcon, href: '/' },
];
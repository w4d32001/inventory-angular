import { faChartBar, faBuilding, faCalendar, faCog, faShieldAlt, faQuestionCircle, faShapes } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from '../sidebar-item/sidebar-item.model';
export const dataGeneralSidebar: SidebarItem[] = [
    {
        icon: faChartBar, // Reemplaza PanelTopLeft
        label: "Dashboard",
        href: "/"
    },
    {
        icon: faShapes,
        label: "Categoria",
        href: "/categories"
    },
    {
        icon: faCalendar,
        label: "Calendar",
        href: "/calendar"
    }
];

export const dataToolSidebar = [
    {
        icon: faQuestionCircle,
        label: "Faqs",
        href: "/faqs"
    },
    {
        icon: faChartBar,
        label: "Analytics",
        href: "/analytics"
    }
];

export const dataSupportSidebar = [
    {
        icon: faCog,
        label: "Settings",
        href: "/settings"
    },
    {
        icon: faShieldAlt,
        label: "Security",
        href: "/security"
    }
];
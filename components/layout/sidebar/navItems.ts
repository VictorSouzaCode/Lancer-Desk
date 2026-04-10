import { 
    Home,
    Settings,
    Users,
    MonitorCog,
    CheckCheck
} from "lucide-react";
import type { navItemsType } from "@/lib/types/navItemsType";


export const mainNav: navItemsType = [
    {
        title: 'Overview', 
        href: '/dashboard', 
        icon: Home
    },
    {
        title: 'Clients', 
        href: '/clients', 
        icon: Users
    },
    {
        title: 'Projects', 
        href: '/projects', 
        icon: MonitorCog
    },
    {
        title: 'Tasks', 
        href: '/tasks', 
        icon: CheckCheck
    },
    { 
        title: 'Settings', 
        href: '/settings', 
        icon: Settings 
    },

] as const
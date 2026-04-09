import { 
    Home,
    Settings,
    LogOut
} from "lucide-react";
import type { navItemsType } from "@/lib/types/navItemsType";


export const mainNav: navItemsType = [
    {
        title: 'Overview', 
        href: '/dashboard', 
        icon: Home
    },
    { 
        title: 'Settings', 
        href: '/settings', 
        icon: Settings 
    },
    {
        title: 'LogOut',
        href: '#',
        icon: LogOut,
        function: "logout",
    }

] as const
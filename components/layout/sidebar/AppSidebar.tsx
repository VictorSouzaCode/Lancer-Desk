'use client'
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import SidebarNav from "./SidebarNav"
import SidebarLogo from "./SidebarLogo"
import { mainNav } from "./navItems"

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-3.5 h-16 flex justify-center">
        <SidebarLogo/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav items={mainNav}/>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
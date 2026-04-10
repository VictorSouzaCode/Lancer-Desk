'use client'
import { 
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"
import type { navItemsType } from "@/lib/types/navItemsType"

type SidebarNavProps = {
  items: navItemsType
}


const SidebarNav = ({ items }: SidebarNavProps) => {

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{label}</SidebarGroupLabel> */}

      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-1">
          {items.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="h-12"
                >
                  <Link href={item.href} className="flex items-center gap-4 px-3">
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)

          })}
        </SidebarMenu>
      </SidebarGroupContent>

    </SidebarGroup>
  )
}

export default SidebarNav
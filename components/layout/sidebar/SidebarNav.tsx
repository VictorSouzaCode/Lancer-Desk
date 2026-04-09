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
import { usePathname, useRouter } from "next/navigation"

type SidebarNavProps = {
  items: navItemsType
}


const SidebarNav = ({ items }: SidebarNavProps) => {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    
    router.push("/login")
  }

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{label}</SidebarGroupLabel> */}

      <SidebarGroupContent>
        <SidebarMenu className="flex flex-col gap-1">
          {items.map((item) => {
            const isLogout = item.function === "logout";

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={!isLogout && pathname === item.href}
                  onClick={isLogout ? handleLogout : undefined}
                  asChild
                  className="h-12"
                >
                  {isLogout ? (
                    <div className="flex items-center gap-4 px-3 cursor-pointer">
                      <item.icon/>
                      <span>{item.title}</span>
                    </div>
                  ) : (
                    <Link href={item.href} className="flex items-center gap-4 px-3">
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                  )}

                </SidebarMenuButton>
              </SidebarMenuItem>)

          })}
        </SidebarMenu>
      </SidebarGroupContent>

    </SidebarGroup>
  )
}

export default SidebarNav
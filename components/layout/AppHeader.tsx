'use client'
import { SidebarTrigger } from "../ui/sidebar"
import { User } from "lucide-react"
import { usePathname } from "next/navigation"


function getTitle(pathname: string)  {


  if(pathname === "/dashboard") return "Overview"

  if(pathname === "/customers") return "Customers"
  if(pathname === "/orders") return "Orders"
  if(pathname === "/settings") return "Settings"

  return "Info"

}

const AppHeader = () => {

  const pathname = usePathname()
  const title = getTitle(pathname)

  return (
    <header className="flex h-16 border-b items-center">

      <div className="flex w-full gap-1 items-center px-4 py-3 lg:gap-2 lg:px-6">

        <SidebarTrigger className="-ml-1" />

        <span>|</span>

        <h1 className="font-bold text-xl ml-2">{title}</h1>

      <div className="ml-auto flex items-center gap-2">
        <div className="ml-auto flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground"/>
          <span></span>
        </div>
      </div>
      </div>

    </header>
  )
}

export default AppHeader
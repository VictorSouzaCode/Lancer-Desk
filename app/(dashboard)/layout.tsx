import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import AppHeader from "@/components/layout/AppHeader"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"


type DashboardLayoutProps = {
    children: React.ReactNode
}


const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {

  return (
    <SidebarProvider>
    <div className="min-h-screen flex w-full">
        <AppSidebar/>

            <SidebarInset className="flex flex-1 flex-col">
            <AppHeader/>
            <main className="flex-1">
                {children}
            </main>
            </SidebarInset>
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
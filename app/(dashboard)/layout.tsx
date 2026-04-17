import AppSidebar from "@/components/layout/sidebar/AppSidebar"
import AppHeader from "@/components/layout/AppHeader"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"


type DashboardLayoutProps = {
    children: React.ReactNode
}


const DashboardLayout = async ({
    children,
}: DashboardLayoutProps) => {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        redirect("/login")
    }

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
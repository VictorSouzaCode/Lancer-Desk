'use client'
import { Button } from "./button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"


export const LogoutBtn = () => {
    const router = useRouter()
    const supabase = createClient()
    
    async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <Button 
    size="sm" 
    variant="ghost" 
    className="cursor-pointer"
    onClick={handleLogout}
    >
        <LogOut/>
    </Button>
  )
}
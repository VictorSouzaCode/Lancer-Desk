'use client'
import { Button } from "./button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"


export const LogoutBtn = () => {

    const router = useRouter()
    
    async function handleLogout() {
    
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
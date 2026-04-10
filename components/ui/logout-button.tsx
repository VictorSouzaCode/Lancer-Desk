import { Button } from "./button"
import { LogOut } from "lucide-react"


export const LogoutBtn = () => {
  return (
    <Button 
    size="sm" 
    variant="ghost" 
    className="cursor-pointer"
    >
        <LogOut/>
    </Button>
  )
}
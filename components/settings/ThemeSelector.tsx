'use client'
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeSelector = () => {
   const { resolvedTheme, setTheme } = useTheme();


  return (
    <div className="flex gap-2">
      <Button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md border cursor-pointer ${
          resolvedTheme === "light"
            ? "border-primary bg-primary/10 text-primary"
            : "opacity-30 hover:opacity-100"
        }`}
      >
        <Sun className="w-6 h-6 cursor-pointer" />
      </Button>

      <Button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md border cursor-pointer ${
          resolvedTheme === "dark"
            ? "border-primary bg-primary/10 text-primary"
            : "opacity-30 hover:opacity-100"
        }`}
      >
        <Moon className="w-5 h-5 cursor-pointer" />
      </Button>
    </div>
  );
}

export default ThemeSelector
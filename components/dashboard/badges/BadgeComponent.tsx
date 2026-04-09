import { Badge } from "@/components/ui/badge"

type Status = | "Pending" | "Processing" | "Completed" | "Active" | "Inactive" | "Blocked"

type BadgeProps = {
    status: string
}

const BadgeComponent = ({ status }:BadgeProps) => {
  
    const statusColor: Record<Status, string> = {
        Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",

        Processing: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",

        Completed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",

        Active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",

        Inactive: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",

        Blocked: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
    }

  return (
    <Badge className={statusColor[status as keyof typeof statusColor]}>{status}</Badge>
  )
}

export default BadgeComponent
import { Skeleton } from "@/components/ui/skeleton";

export function KpiSkeleton() {
    return (
        <div className="rounded-lg border p-4 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16" />
        </div>
    )
}
import KpiCards from "@/components/dashboard/cards/KpiCards"
import Chart from "@/components/dashboard/charts/Chart"
import TableComponent from "@/components/dashboard/tables/TableComponent"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const DashboardHome = () => {
  return (
    <div className="flex flex-col gap-6 p-4 h-full min-h-0 border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCards title="Total Customers" value='200' />
          <KpiCards title="Active Customers" value='164' />
          <KpiCards title="Total Orders" value='2.567' />
          <KpiCards title="Completed Orders" value='2.000' />
      </div>

      <section className="flex-1 min-h-0">
        <Chart/>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <TableComponent/>
        </CardContent>
      </Card>
      
    </div>
)
}

export default DashboardHome
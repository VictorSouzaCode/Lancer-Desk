import KpiCards from "@/components/dashboard/cards/KpiCards"
import Chart from "@/components/dashboard/charts/Chart"
import TableComponent from "@/components/dashboard/tables/TableComponent"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

const DashboardHome = async () => {
  const supabase = await createClient()

  const { data: clients } = await supabase
  .from('clients')
  .select('id')

  const { data: activeProjects } = await supabase
  .from('projects')
  .select('id')
  .eq('status', 'active')

  const { data: completedProjects } = await supabase
  .from('projects')
  .select('id')
  .eq('status', 'completed')

  const { data: totalProjects } = await supabase
  .from('projects')
  .select('id')

  return (
    <div className="flex flex-col gap-6 p-4 h-full min-h-0 border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCards title="Clients" value={clients?.length ?? 0} />
          <KpiCards title="Active Projects" value={activeProjects?.length ?? 0} />
          <KpiCards title="Completed Projects" value={completedProjects?.length ?? 0} />
          <KpiCards title="Total Projects" value={totalProjects?.length ?? 0} />
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
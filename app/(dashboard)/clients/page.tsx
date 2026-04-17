import ClientForm from "@/components/clients/ClientForm"
import ClientList from "@/components/clients/ClientList"
import { createClient } from "@/lib/supabase/server"

const ClientsPage = async () => {
  const supabase = await createClient()

  const { data: clients } = await supabase
  .from('clients')
  .select('*')
  .order('created_at', { ascending: false });

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Clients</h1>

      <ClientForm />

      <ClientList clients={clients ?? []} />
    </div>
  )
}

export default ClientsPage
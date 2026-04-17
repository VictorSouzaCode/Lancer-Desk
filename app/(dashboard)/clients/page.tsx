import ClientForm from "@/components/clients/ClientForm"

const ClientsPage = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Clients</h1>
      <ClientForm />
    </div>
  )
}

export default ClientsPage
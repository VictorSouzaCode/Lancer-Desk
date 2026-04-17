type Client = {
    id: string,
    name: string,
    email: string,
    company: string
}

type ClientListProps = {
    clients: Client[]
}

const ClientList = ({ clients }: ClientListProps) => {
    if (!clients.length) {
        return <p className="text-sm text-muted-foreground">No clients yet</p>
    }

  return (
    <div className="space-y-3">
      {clients.map((client) => (
        <div
          key={client.id}
          className="border rounded-lg p-4 flex flex-col gap-1"
        >
          <p className="font-medium">{client.name}</p>
          <p className="text-sm text-muted-foreground">{client.email}</p>
          <p className="text-sm text-muted-foreground">{client.company}</p>
        </div>
      ))}
    </div>
  )
}

export default ClientList
 'use client'

 import { useState } from "react"
 import { useRouter } from "next/navigation"
 import { createClient } from "@/lib/supabase/client"
 import { Input } from "../ui/input"
 import { Button } from "../ui/button"

 type Client = {
    id: string,
    name: string
 }

 type ProjectFormProps = {
    clients: Client[],
 }
 
 const ProjectForm = ({ clients }: ProjectFormProps) => {
    const supabase = createClient()
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState('')
    const [clientId, setClientId] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setLoading(true)

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        const { error } = await supabase
        .from('projects')
        .insert({
            user_id: user.id,
            client_id: clientId,
            title,
            budget: budget ? Number(budget) : null
        });

        if(error) {
          console.error(error.message);          
        } else {
          setTitle('')
          setBudget('')
          setClientId('')
          router.refresh()
        }

        setLoading(false)
    }

   return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <select
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        className="w-full border rounded-md h-10 px-3"
      >
        <option value="">Select client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>

      <Button type="submit">
        {loading ? "Saving..." : "Add Project"}
      </Button>
    </form>
   )
 }
 
 export default ProjectForm
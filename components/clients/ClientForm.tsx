'use client'
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const ClientForm = () => {
    const supabase = createClient()
    const router = useRouter()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ company, setCompany ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setLoading(true)

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if(!user) return;

        const { error } = await supabase
        .from("clients")
        .insert({
            user_id: user.id,
            name,
            email,
            company
        })

        if(error) {
            console.error(error.message)
        } else {
            setName("")
            setEmail("")
            setCompany("")
            router.refresh()
        }

        setLoading(false)
    }


  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        placeholder="Client name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <Button type="submit">
        {loading ? "Saving..." : "Add Client"}
      </Button>
    </form>
  )
}

export default ClientForm
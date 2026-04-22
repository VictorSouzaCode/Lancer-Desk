'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Project = {
  id: string,
  title: string
}

type TaskFormProps = {
  projects: Project[]
}

const TaskForm = ({ projects }: TaskFormProps) => {
  const supabase = createClient()
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [projectId, setProjectId] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if(!user) return

    const { error } = await supabase.from('tasks').insert({
      user_id: user.id,
      project_id: projectId,
      title
    })

    if(error) {
      console.error(error.message);

    } else {
      
      setTitle('')
      setProjectId('')
      router.refresh()
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 max-w-md'>
      <Input
      placeholder='Task title'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <select>
        <option value=''>Select project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>

      <Button type='submit'>
        {loading ? 'Saving...' : 'Add Task'}
      </Button>
    </form>
  )
}

export default TaskForm
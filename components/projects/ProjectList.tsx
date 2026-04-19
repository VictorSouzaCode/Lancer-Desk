export type Project = {
    id: string,
    title: string,
    budget: number,
    status: string,
    clients: {
        name: string
    },
}

type ProjectListProps = {
    projects: Project[]
}

// i need to solve the typescript error and the client name not showing on the client lists

const ProjectList = ({ projects }: ProjectListProps) => {
    if(!projects.length) {
        return <p className="text-sm text-muted-foreground">No projects yet</p>
    }

    console.log(projects)
    
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4">
          <p className="font-medium">{project.title}</p>
          <p className="text-sm text-muted-foreground">
            Client: {project.clients?.name}
          </p>
          <p className="text-sm text-muted-foreground">
            Budget: {project.budget}
          </p>
          <p className="text-sm text-muted-foreground">
            Status: {project.status}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
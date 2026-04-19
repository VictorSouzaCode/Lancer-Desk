type Project = {
    id: string,
    title: string,
    budget: number,
    status: string,
    clients: {
        name: string
    }[],
}

type ProjectListProps = {
    projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
    if(!projects.length) {
        return <p className="text-sm text-muted-foreground">No projects yet</p>
    }
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4">
          <p className="font-medium">{project.title}</p>
          <p className="text-sm text-muted-foreground">
            Client: {project.clients?.[0]?.name}
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
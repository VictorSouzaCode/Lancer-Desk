type Task = {
  id: string,
  title: string,
  completed: boolean,
  projects: {
    title: string,
  }
}

type TaskListProps = {
  tasks: Task[],
}

const TaskList = ({ tasks }: TaskListProps) => {
  if(!tasks.length) {
    return <p className="text-sm text-muted-foreground">No tasks yet</p>
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div key={task.id} className="border rounded-lg p-4">
          <p className="font-medium">{task.title}</p>
          <p className="text-sm text-muted-foreground">
            Project: {task.projects?.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {task.completed ? "Completed" : "Pending"}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
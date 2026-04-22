import { createClient } from "@/lib/supabase/server";
import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";


const TasksPage = async () => {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("id, title");

  const { data: tasks } = await supabase
    .from("tasks")
    .select(`
      id,
      title,
      completed,
      projects(title)
    `)
    .order("created_at", { ascending: false });

    console.log(tasks)

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Tasks</h1>

      <TaskForm projects={projects ?? []} />

      <TaskList tasks={tasks ?? []} />
    </div>
  );
};

export default TasksPage;
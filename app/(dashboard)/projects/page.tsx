import { createClient } from "@/lib/supabase/server"
import ProjectForm from "@/components/projects/ProjectForm"
import ProjectList from "@/components/projects/ProjectList"


const ProjectsPage = async () => {
  const supabase = await createClient();

  const { data: clients } = await supabase
    .from("clients")
    .select("id, name");

  const { data: projects } = await supabase
    .from("projects")
    .select(`
      id,
      title,
      budget,
      status,
      clients(name)
    `)
    .order("created_at", { ascending: false });

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <ProjectForm clients={clients ?? []} />

      <ProjectList projects={projects ?? []} />
    </div>
  );
};

export default ProjectsPage;
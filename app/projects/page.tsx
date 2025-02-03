import Layout from "@/components/layout";
import ProjectItem from "@/components/projects/project-item";
import { TOKEN, DATABASE_ID } from "@/config/index";
export default async function Projects() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28",
      },
      mode: "no-cors",
    }
  );
  const projects = await res.json();
  console.log(projects);

  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center justify-centermin-h-screen px-5 py-24 mb-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Total Projects: 
          <span className="text-blue-500 pl-6"></span>{projects.results.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:m-6 py-10 ">
          {projects.results.map((project: any) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

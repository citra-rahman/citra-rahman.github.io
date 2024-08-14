import { projectProp, workProp } from "@/libs/type";

export async function addExperiences(work: workProp) {
  try {
    const experienceCreation = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/experiences`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(work),
    });
    const experienceJSON = await experienceCreation.json();
    return experienceJSON;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getExperiences() {
  const experiences = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/experiences`);
  const experiencesJson = await experiences.json();
  return experiencesJson;
}

export async function updateExperience(work: workProp){
    const updateWork = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/experience`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(work),
          }
    );
   const updateWorkJson = await updateWork.json();
   return updateWorkJson;
}

export async function deleteExperience(id: string){
    const experience  = await fetch (`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/experience/${id}`,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }
    )
    const deleteExperienceJson = await experience.json();
    console.log(deleteExperienceJson);
    return null;
}

export async function addProjects(project: projectProp) {
  try {
    const ProjectCreation = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    const ProjectJSON = await ProjectCreation.json();
    return ProjectJSON;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getProjects() {
  const Projects = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/projects`);
  const ProjectsJson = await Projects.json();
  return ProjectsJson;
}

export async function updateProject(work: workProp){
    const updateProject = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/project`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(work),
          }
    );
   const updateProjectJson = await updateProject.json();
   return updateProjectJson;
}

export async function deleteProject(id: string){
    const project  = await fetch (`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/project/${id}`,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }
    )
    await project.json();
    return null;
}

import { projectProp, workProp } from "@/libs/type";

export async function addExperiences(work: workProp) {
  try {
    const experienceCreation = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/v1/experiences`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(work),
    });
    const experienceJSON = await experienceCreation.json();
    console.log(experienceJSON);
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
   return updateWorkJson.data;
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


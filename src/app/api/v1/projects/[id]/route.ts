import { open } from "sqlite";
import { type NextRequest } from "next/server";
import { projectsSchema } from "@/db/schema";
import { projectProp } from "@/libs/type";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const db = await open({
    filename: "./src/db/projects.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(projectsSchema);
  const project = await db.get("SELECT * FROM projects WHERE id = ?", id);
  if (!project) {
    return new Response(JSON.stringify({ error: "project not found" }), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      status: 404,
    });
  }
  return new Response(JSON.stringify(project), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const project = body as projectProp;
  const id = params.id;

  const db = await open({ 
    filename: "./src/db/projects.db",
    driver: require("sqlite3").Database,
  });

  const updateSql = `UPDATE projects SET name = ?, imgPath = ? , description = ? , link = ? WHERE id = ?`;

  const res = await db.run(
    updateSql,
    project.name,
    project.imgPath,
    project.description,
    project.link,
    id
  );

  return new Response(JSON.stringify(res), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const db = await open({
    filename: "./src/db/projects.db",
    driver: require("sqlite3").Database,
  });

  const updateSql = `DELETE FROM projects WHERE id = ?`;

  const res = await db.run(updateSql, id);

  return new Response(JSON.stringify(res), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

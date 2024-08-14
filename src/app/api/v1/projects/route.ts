import { type NextRequest } from "next/server";
import { projectsSchema } from "@/db/schema";
import { open } from "sqlite";
import { projectProp } from "@/libs/type";

export async function GET(request: NextRequest) {
  const db = await open({
    filename: "./src/db/projects.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(projectsSchema);
  const projects = await db.all("SELECT * FROM projects");

  return new Response(JSON.stringify(projects), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as projectProp;

  const db = await open({
    filename: "./src/db/projects.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(projectsSchema);
  const insertsql = `INSERT INTO projects (id, name, imgPath, description, link, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)`;
  const res = await db.run(
    insertsql,
    body.id,
    body.name,
    body.imgPath,
    body.description,
    body.link,
    body.createdAt,
    body.updatedAt
  );

  return new Response(JSON.stringify(res), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

import { open } from "sqlite";
import { type NextRequest } from "next/server";
import { experiencesSchema } from "@/db/schema";
import { workProp } from "@/libs/type";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const db = await open({
    filename: "./db/experiences.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(experiencesSchema);
  const experience = await db.get("SELECT * FROM experiences WHERE id = ?", id);
  if (!experience) {
    return new Response(JSON.stringify({ error: "experience not found" }), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      status: 404,
    });
  }
  return new Response(JSON.stringify(experience), {
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
  const experience = body as workProp;
  const id = params.id;

  const db = await open({ 
    filename: "./src/db/experiences.db",
    driver: require("sqlite3").Database,
  });

  const updateSql = `UPDATE experiences SET date = ?, title = ? , description = ? , tags = ? WHERE id = ?`;

  const res = await db.run(
    updateSql,
    experience.date,
    experience.title,
    experience.description,
    experience.tags,
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
    filename: "./src/db/experiences.db",
    driver: require("sqlite3").Database,
  });

  const updateSql = `DELETE FROM experiences WHERE id = ?`;

  const res = await db.run(updateSql, id);

  return new Response(JSON.stringify(res), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

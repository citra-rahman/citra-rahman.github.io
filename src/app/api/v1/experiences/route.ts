import { type NextRequest } from "next/server";
import { Database, OPEN_CREATE, OPEN_READWRITE } from "sqlite3";
import { experiencesSchema } from "@/db/schema";
import { open } from "sqlite";
import { workProp } from "@/libs/type";

export async function GET(request: NextRequest) {
  const db = await open({
    filename: "./src/db/experiences.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(experiencesSchema);
  const experiences = await db.all("SELECT * FROM experiences");

  return new Response(JSON.stringify(experiences), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as workProp;

  const db = await open({
    filename: "./src/db/experiences.db",
    driver: require("sqlite3").Database,
  });

  await db.exec(experiencesSchema);
  const insertsql = `INSERT INTO experiences (id, date, title, description, tags, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)`;
  const res = await db.run(
    insertsql,
    body.id,
    body.date,
    body.title,
    body.description,
    body.tags,
    body.createdAt,
    body.updatedAt
  );

  return new Response(JSON.stringify(res), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export const projectSchema = `CREATE TABLE IF NOT EXISTS projects(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    imgPath TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL
  );`
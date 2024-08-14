export const experiencesSchema = `CREATE TABLE IF NOT EXISTS experiences (
     id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
     date TEXT,
     title TEXT,
     description TEXT,
     tags TEXT,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

export const projectsSchema = `CREATE TABLE IF NOT EXISTS projects(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    imgPath TEXT,
    description TEXT,
    link TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

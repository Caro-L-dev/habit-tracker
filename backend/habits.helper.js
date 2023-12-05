import path from "path";
import fs from "fs/promises";

const databaseFile = path.join(process.cwd(), "database.json");

const readDatabase = async () => {
  const database = await fs.readFile(databaseFile, "utf8");
  const json = JSON.parse(database);
  return json;
};

export const getHabits = async () => {
  const database = await readDatabase();
  return database.habits;
};

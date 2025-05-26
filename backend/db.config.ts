import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

// kopplar till databasen och skapar tabeller om de saknas.
async function initializeDB(): Promise<Database> {
  const db = await open({
    filename: './database/database.db', 
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS applicants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    phone TEXT,
    city TEXT,
    experience TEXT,
    education TEXT,
    message TEXT,
    portfolio TEXT,
    cvPath TEXT,
    positionTitle TEXT,
    appliedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

  `);

  return db;
}

const dbPromise = initializeDB();
export default dbPromise;

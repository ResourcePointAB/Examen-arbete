import dbPromise from './db.config';

const createPositionsTable = async () => {
  try {
    const db = await dbPromise; 

    await db.run(`
      CREATE TABLE IF NOT EXISTS positions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        department TEXT,
        location TEXT,
        description TEXT,
        applicationDeadline DATE,
      )
    `);

    console.log('Positions table created or already exists.');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

const insertPositionData = async () => {
  try {
    const db = await dbPromise;
    
    await db.run('DELETE FROM positions'); // Clear existing data

    const stmt = await db.prepare(`
      INSERT INTO positions (title, department, location, description, applicationDeadline)
      VALUES (?, ?, ?, ?, ?)
    `);

    await stmt.run('Frontend Developer', 'IT', 'Gothenburg', 'Develop web interfaces', '2025-05-01');
    await stmt.run('Backend Developer', 'IT', 'Gothenburg', 'Develop server-side logic', '2025-06-01');
    await stmt.run('Software Tester', 'IT', 'Gothenburg', 'testing software quality', '2026-02-01');

    console.log('Sample position data inserted.');
  } catch (err) {
    console.error('Error inserting data:', err);
  }
};

const initDB = async () => {
  console.log('Initializing database...');
  await createPositionsTable();
  await insertPositionData();
};

initDB();

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
        salary INTEGER
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

    const stmt = await db.prepare(`
      INSERT INTO positions (title, department, location, description, applicationDeadline, salary)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    await stmt.run('Frontend Developer', 'IT', 'Gothenburg', 'Develop web interfaces', '2025-05-01', 40000);
    await stmt.run('Backend Developer', 'IT', 'Stockholm', 'Develop server-side logic', '2025-06-01', 45000);

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

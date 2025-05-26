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
        description TEXT
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
    
    await db.run('DELETE FROM positions'); 
    const stmt = await db.prepare(`
      INSERT INTO positions (title, department, location, description)
      VALUES (?, ?, ?, ?)
    `);

    await stmt.run('Frontend Developer', 'Teck', 'Gothenburg', 'Work with modern JavaScript frameworks to build user-friendly interfaces.');
    await stmt.run('Backend Developer', 'Teck', 'Gothenburg', 'Develop and maintain server-side solutions with focus on performance and security.');
    await stmt.run('Software Tester', 'QA', 'Gothenburg', 'Test and ensure software quality through automated testing.');

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

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dbPromise from './db.config'; 
import nodemailer from 'nodemailer';

const app = express();
app.use(bodyParser.json());

const createPositionsTable = async () => {
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
};

// API för att hämta alla positioner
app.get('/positions', async (req: Request, res: Response) => {
  try {
    const db = await dbPromise;
    const positions = await db.all('SELECT * FROM positions');
    res.status(200).json(positions);
  } catch (err) {
    console.error('Error fetching positions:', err);
    res.status(500).send({ message: 'Error fetching positions.' });
  }
});

// API för att skapa en ny position
app.post('/positions', async (req: Request, res: Response) => {
  const { title, department, location, description, applicationDeadline, salary } = req.body;

  try {
    const db = await dbPromise;
    const stmt = await db.prepare(`
      INSERT INTO positions (title, department, location, description, applicationDeadline, salary)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    await stmt.run(title, department, location, description, applicationDeadline, salary);

    console.log('Position created.');

    res.status(201).send({ message: 'Position created successfully!' });
  } catch (err) {
    console.error('Error creating position:', err);
    res.status(500).send({ message: 'Error creating position.' });
  }
});

// API för att skicka en jobbansökan
app.post('/submit-application', async (req: Request, res: Response) => {
  const { firstName, lastName, email, phone, cvPath } = req.body;

  try {
    const db = await dbPromise;

    const stmt = await db.prepare(
      'INSERT INTO applicants (firstName, lastName, email, phone, cvPath) VALUES (?, ?, ?, ?, ?)'
    );

    await stmt.run(firstName, lastName, email, phone, cvPath);

    console.log('Ansökan sparad i databasen.');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dinemail@gmail.com',
        pass: 'din-applösenord'
      }
    });

    const mailOptions = {
      from: 'dinemail@gmail.com',
      to: 'mottagare@gmail.com',
      subject: 'Ny jobbansökan',
      text: `En ny ansökan har inkommit:\n\nNamn: ${firstName} ${lastName}\nE-post: ${email}\nTelefon: ${phone}\nCV: ${cvPath}`
    };

    await transporter.sendMail(mailOptions);
    console.log('E-post skickad.');

    res.status(200).send({ message: 'Ansökan sparad och e-post skickad!' });
  } catch (err) {
    console.error('Fel vid sparande av ansökan eller e-postskickning:', err);
    res.status(500).send({ message: 'Fel vid sparande av ansökan.' });
  }
});

app.listen(5000, () => {
  console.log('Servern körs på http://localhost:5000');
});

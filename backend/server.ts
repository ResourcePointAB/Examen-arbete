import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dbPromise from './db.config';  

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------- Skapa 'database'-mappen om den inte finns --------
const dbDirectory = path.join(__dirname, 'database');

if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory);
}

// -------- Multer: för CV-uppladdningar --------
const uploadDir = path.join(__dirname, 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${file.originalname}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

// -------- Ansökningsdata-typ --------
interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: number;
  experiences?: string;
  education?: string;
  message?: string;
  cvPath: string;
}

// -------- Nodemailer-konfiguration --------
// Byt till din egen e-post och "App Password" från Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'din.email@gmail.com',
    pass: 'ditt-app-losenord',
  },
});

// -------- POST-endpoint för ansökningar --------
app.post('/api/apply', upload.single('cv'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, city, phone, experiences, education, message } = req.body;

    if (!req.file || !email) {
      res.status(400).json({ message: 'E-post och CV krävs.' });
      return;
    }

    const application: ApplicationData = {
      firstName,
      lastName,
      email,
      city,
      phone,
      experiences,
      education,
      message,
      cvPath: req.file.path,
    };

    // -------- Spara i JSON-fil --------
    const dataPath = path.join(__dirname, 'applications.json');
    const previousData = fs.existsSync(dataPath)
      ? JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
      : [];

    previousData.push(application);
    fs.writeFileSync(dataPath, JSON.stringify(previousData, null, 2));

    // -------- Skicka e-post till företaget --------
    const mailOptions = {
      from: '"Jobbansökan" <din.email@gmail.com>',
      to: 'foretaget@email.com',
      subject: `Ny ansökan från ${firstName} ${lastName}`,
      html: `
        <h3>Ny ansökan mottagen</h3>
        <p><strong>Namn:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Stad:</strong> ${city}</p>
        <p><strong>Erfarenheter:</strong> ${experiences || 'Ej angett'}</p>
        <p><strong>Utbildning:</strong> ${education || 'Ej angett'}</p>
        <p><strong>Meddelande:</strong> ${message || 'Ej angett'}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Ansökan mottagen och skickad via e-post.' });
  } catch (error) {
    console.error(' Fel vid hantering:', error);
    res.status(500).json({ message: 'Ett serverfel uppstod.' });
  }
});

// -------- GET-endpoint för att hämta alla jobbpositioner --------
app.get('/api/positions', async (req: Request, res: Response): Promise<void> => {
  try {
    const db = await dbPromise;
    const positions = await db.all('SELECT * FROM positions');

    res.status(200).json(positions);
  } catch (error) {
    console.error('Fel vid hämtning av positioner:', error);
    res.status(500).json({ message: 'Ett serverfel uppstod vid hämtning av positioner.' });
  }
});

app.get('/api/debug-positions', async (req: Request, res: Response) => {
  try {
    const db = await dbPromise;
    const positions = await db.all('SELECT * FROM positions');
    res.status(200).json(positions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    res.status(500).json({ message: 'Failed to fetch positions.' });
  }
});

// -------- Starta servern --------
app.listen(PORT, () => {
  console.log(`Servern är igång: http://localhost:${PORT}`);
});

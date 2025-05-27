import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dbPromise from './db.config'; 
import dotenv from 'dotenv';
import contactRoute from './contactRoute';
import authRoutes from './auth';
import linkedinRouter from './linkedinPosts';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    'https://www.resourcepoint.se',
    'https://resourcepoint.se',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', linkedinRouter);
app.use('/api/contact', contactRoute);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Välkommen till servern!');
});

app.post('/api/contact', (req, res) => {
  console.log('Meddelande mottaget:', req.body);
  res.status(200).send('Meddelande mottaget!');
});

// -------- 1.1 Multer: Spara CV i uploads mappen i backend--------
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

// -------- 1.2 Skydda servern från för stora filer och tillåt rätt filtyp --------
const upload = multer({
  storage, 
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error('Only PDF and DOC files are allowed.'));
    }
    cb(null, true);
  }
});

// -------- Ansökningsdata-typ --------
interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  experience?: string;
  education?: string;
  message?: string;
  portfolio?: string;
  cvPath: string;
}

// --------2. Nodemailer-konfiguration --------

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.REACT_APP_EMAIL_USER,
//     pass: process.env.REACT_APP_EMAIL_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  host: 'send.one.com',        
  port: 587,                    
  secure: false,            
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS 
  }
});


// --------3. POST-endpoint för ansökningar --------
app.post('/api/apply', upload.single('cv'), async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Form data received:', req.body);
    console.log('Uploaded file:', req.file);
    console.log(req.body.positionTitle); 
    const { firstName, lastName, email, city, phone, experience, education, message, portfolio } = req.body;

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
      experience: experience,
      education,
      message,
      portfolio,
      cvPath: req.file.path,
    };

    // --------4- Sparar användarens ansökningsdata i JSON-fil localt in backend-------

    const dataPath = path.join(__dirname, 'applications.json');

    let previousData: ApplicationData[] = [];
    try {
      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    
        if (fileContent) {
          try {
            previousData = JSON.parse(fileContent);
          } catch (err) {
            console.error('Error parsing JSON from file:', err);
          }
        }
      }

      previousData.push(application);
      fs.writeFileSync(dataPath, JSON.stringify(previousData, null, 2));
    } catch (err) {
      console.error('Error while reading/writing the file:', err);
    }

    // --------4- Spara ansökan i databasen --------
    // const db = await dbPromise;

    // await db.run(`
    //   INSERT INTO applicants 
    //   (firstName, lastName, email, city, phone, experience, education, message, portfolio, cvPath, positionTitle)
    //   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    // `, [
    //   application.firstName,
    //   application.lastName,
    //   application.email,
    //   application.city,
    //   application.phone,
    //   application.experience || null,
    //   application.education || null,
    //   application.message || null,
    //   application.portfolio || null,
    //   application.cvPath,
    //   req.body.positionTitle || null
    // ]);

    // --------5- Skicka e-post till företaget --------
    const positionTitle = req.body.positionTitle;
    const mailOptions = {
      from: `"Jobbansökan" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, 
      subject: `Ny ansökan från ${firstName} ${lastName}`,
      html: `
        <h3>Ny ansökan mottagen</h3>
        <p><strong>Namn:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Stad:</strong> ${city}</p>
        <p><strong>Jobbtitel:</strong> ${positionTitle || 'Ej angett'}</p>
        <p><strong>Erfarenheter:</strong> ${experience || 'Ej angett'}</p>
        <p><strong>Utbildning:</strong> ${education || 'Ej angett'}</p>
        <p><strong>Portfolio:</strong> ${portfolio || 'Ej angett'}</p>
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

// ---------------------------------databas-new positions -------------------------------
// -------- Skapa 'database'-mappen om den inte finns ------------
const dbDirectory = path.join(__dirname, 'database');

if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory);
}

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

// -------- POST-endpoint för att lägga till en ny jobbposition --------
app.post('/api/add-position', async (req: Request, res: Response) => {
  try {
    const { title, department, location, description} = req.body;
    const db = await dbPromise;
    await db.run(`
      INSERT INTO positions (title, department, location, description)
      VALUES (?, ?, ?, ?)
    `, [title, department, location, description]);
    
    res.status(201).json({ message: 'Position added successfully!' });
  } catch (error) {
    console.error('Error adding position:', error);
    res.status(500).json({ message: 'Failed to add position.' });
  }
});

// -------- Starta servern --------
app.listen(PORT, () => {
  console.log(`Servern är igång på port ${PORT}`);
});

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const router = express.Router();
const corsOptions = {
    origin: '*',
    methods: ['POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: [],
    credentials: true
};

router.use(cors(corsOptions));

router.post('/', async (req, res) => {
  console.log('Req.body:', req.body);
  const { name, email, phone, subject, message } = req.body;

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
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: `"Kontaktformulär" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Kontaktformulär: ${subject || 'Inget ämne'}`,
    text: `
        Namn: ${name}
        Email: ${email}
        Telefon: ${phone}
        Meddelande:
        ${message}
            `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Mejl skickat!' });
    } catch (error) {
        console.error('Fel vid mejl:', error);
        res.status(500).json({ success: false, message: 'Fel vid skickande.' });
    }
});

export default router;

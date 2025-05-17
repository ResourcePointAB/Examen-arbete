import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

// 1. Steg för att omdirigera till LinkedIn för inloggning
router.get('/auth/linkedin', (req: Request, res: Response) => {
  const scope = 'r_liteprofile r_organization_social rw_organization_admin';
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scope)}`;
  res.redirect(authUrl);
});

// 2. Callback från LinkedIn när användaren godkänt
router.get('/auth/linkedin/callback', async (req: Request, res: Response) => {
  const code = req.query.code;

  try {
    // 3. Byt kod mot access token
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const accessToken = tokenResponse.data.access_token;

    // 4. Hämta organisation via vanity name
    const orgResponse = await axios.get('https://api.linkedin.com/v2/organizations?q=vanityName&vanityName=resourcepointab', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const org = orgResponse.data.elements[0];
    const organizationId = org?.id;

    res.send(`
      <h2> Access Token:</h2>
      <code>${accessToken}</code>
      <h2> Organization ID:</h2>
      <code>${organizationId}</code>
      <br><br>
      <p>Kopiera detta och lägg i din .env:</p>
      <pre>
LINKEDIN_ACCESS_TOKEN=${accessToken}
ORGANIZATION_ID=${organizationId}
      </pre>
    `);
  } catch (error: any) {
    console.error('Error in LinkedIn OAuth callback:', error.response?.data || error.message);
    res.status(500).send('Något gick fel. Se terminalen.');
  }
});

export default router;

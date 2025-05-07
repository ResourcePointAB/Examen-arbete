import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

const CLIENT_ID = 'DIN_CLIENT_ID';
const CLIENT_SECRET = 'DINA_SECRET';
const ORGANIZATION_ID = '12345678'; 

let accessToken: string | null = null;

async function getAccessToken(): Promise<void> {
  const response = await axios.post(
    'https://www.linkedin.com/oauth/v2/accessToken',
    new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  accessToken = response.data.access_token;
}

router.get('/linkedinPosts', async (req: Request, res: Response) => {
  try {
    if (!accessToken) await getAccessToken();

    const response = await axios.get(`https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${ORGANIZATION_ID}&sharesPerOwner=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const posts = response.data.elements.map((post: any) => ({
      id: post.activity,
      content: post.text?.text || '',
      imageUrl: post.content?.contentEntities?.[0]?.thumbnails?.[0]?.image || '',
      link: `https://www.linkedin.com/feed/update/${post.activity.replace('urn:li:activity:', '')}`
    }));

    res.json(posts);
  } catch (error: any) {
    console.error('Error fetching LinkedIn posts:', error.response?.data || error.message);
    res.status(500).json({ error: 'Could not fetch posts' });
  }
});

export default router;

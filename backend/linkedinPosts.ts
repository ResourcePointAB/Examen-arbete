import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;
const ORGANIZATION_ID = process.env.ORGANIZATION_ID!;

router.get('/linkedinPosts', async (req: Request, res: Response) => {
  try {
    // 1. Hämta organisationens delningar (posts)
    const response = await axios.get(
      `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${ORGANIZATION_ID}&sharesPerOwner=10`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const posts = response.data.elements;

    // 2. Extrahera relevant data från varje post
    const formattedPosts = posts.map((post: any) => {
      const id = post.activity;
      const text = post.text?.text || '';
      const link = `https://www.linkedin.com/feed/update/${id}`;
      const imageUrl = post.content?.contentEntities?.[0]?.thumbnails?.[0]?.image || null;

      return {
        id,
        content: text,
        link,
        imageUrl,
      };
    });

    res.json(formattedPosts);
  } catch (error: any) {
    console.error('Error fetching LinkedIn posts:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch LinkedIn posts' });
  }
});

export default router;

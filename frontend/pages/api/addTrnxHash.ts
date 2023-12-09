import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  // @ts-ignore
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

type ResponseData = {
  message: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  try {
    // Extract data from the request body
    const { transactionHash } = req.body;

    // Insert a new row into the Supabase table
    const { error } = await supabase
      .from('transactionHashes')
      .insert({ transactionHash: transactionHash, verified: true });

    if (error) {
      console.error('Error inserting row:', error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Row inserted successfully' });
  } catch (e: any) {
    console.error('Error processing request:', e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

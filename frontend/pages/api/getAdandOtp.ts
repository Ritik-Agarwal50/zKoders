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
  const { frontEndAadharNumber } = req.body;
  const { otp } = req.body;
  console.log(frontEndAadharNumber);

  try {
    const { data, status } = await supabase
      .from('govdatabase')
      .select('aadharNumber,otp')
      .eq('aadharNumber', frontEndAadharNumber)
      .eq('otp', otp);

    if (status === 200) {
      if (data && data.length > 0) {
        // OTP matched, query successful
        console.log('Query was successful');
        res.status(200).json({ message: 'Query was successful' });
      } else {
        // OTP did not match, query not successful
        console.error('OTP did not match');
        res.status(400).json({ message: 'Invalid OTP' });
      }
    } else {
      console.error('Query failed with status:', status);
      res.status(status).json({ message: 'Query failed' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

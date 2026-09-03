// import type { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@supabase/supabase-js';

// // Create a single supabase client for interacting with your database
// const supabase = createClient(
//   //@ts-ignore
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_KEY
// );

// type ResponseData = {
//   message: any;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const { frontEndAadharNumber } = req.body;
//   console.log(frontEndAadharNumber);
//   const { data, error } = await supabase
//     .from('govdatabase')
//     .select('otp')
//     .eq('aadharNumber', frontEndAadharNumber);
//   res.status(200).send(data);
// }

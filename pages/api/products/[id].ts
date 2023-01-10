// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';

type Data = {
  products: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = createClient({
    projectId: 'amorxjz2',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
  });
  let products;
  try {
    products = await client.fetch(`*[_type == "product"]`);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ products });
}

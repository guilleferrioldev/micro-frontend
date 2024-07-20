import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, ResponseMessage } from '@/components/types';
import NextCors from 'nextjs-cors';
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | ResponseMessage>
) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

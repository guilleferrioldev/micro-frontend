import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, ResponseMessage } from '@/components/types';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | ResponseMessage>
) {
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

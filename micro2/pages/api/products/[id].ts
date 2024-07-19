import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { id } = req.query;
  const method = req.method;
 
  if (!id) {
    return res.status(400).json({ message: "Missing product ID" });
  }
 
  try {
    switch (method) {
      case "GET":
        return getProductByID(req, res)
 
      case "POST":
        await createProductByID(req, res) 
        break
 
      case "PATCH":
        await updateProductById(req, res)
        break
 
      case "DELETE":
        await deleteProductByID(req, res)
        break
 
      default:
        res.setHeader("Allow", ['GET', 'PATCH', 'POST', 'DELETE'])
        return res.status(405).json({ message: `Method ${method} not allowed`});
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const getProductByID = async (req: NextApiRequest, res: NextApiResponse) => {
  const product = await prisma.product.findUnique({
    where: { id: req.query.id as string},
    select: {
      name: true,
      description: true,
    },
  });
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json(product);
}

const createProductByID = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.id === "new") {
    const data = req.body;
    const newProduct = await prisma.product.create({
       data: {
         name: data.name,
         description: data.description,
       },
    });
    return res.status(201).json(newProduct);
  }
}

const updateProductById = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const updatedProduct = await prisma.product.update({
    where: { id: req.query.id as string },
    data: {
      name: data.name,
      description: data.description,
      updatedAt: new Date(),
    },
  });
  return res.status(200).json({updatedProduct, data});
}

const deleteProductByID = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.product.delete({
    where: { id: req.query.id as string },
  });
  return res.status(204).end();
}
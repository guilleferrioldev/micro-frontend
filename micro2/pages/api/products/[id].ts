import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const method = req.method;

  if (!id) {
    return res.status(400).json({ message: "Missing product ID" });
  }

  try {
    if (method === "GET") {
        const product = await prisma.product.findUnique({
          where: { id: id as string },
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

  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error"});
  }
}

    /* if (method === "PATCH") {
      const data = req.body;
      const updatedProduct = await prisma.product.update({
        where: { id: id as string },
        data,
      });
      return res.status(200).json(updatedProduct);
    }

    if (method === "POST" && req.query.id === "new") {
        const data = req.body;
        const newProduct = await prisma.product.create({
          data,
        });
        return res.status(201).json(newProduct); 
    }

    if (method === "DELETE") {
        await prisma.product.delete({
          where: { id: id as string },
        });
        return res.status(204).end(); 
      }*/

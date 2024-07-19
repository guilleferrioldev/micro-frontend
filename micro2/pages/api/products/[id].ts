import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
 
     case "POST":
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
       break; 
 
     case "PATCH":
       const data = req.body;
       const updatedProduct = await prisma.product.update({
         where: { id: id as string },
         data: {
           name: data.name,
           description: data.description,
           updatedAt: new Date(),
         },
       });
       return res.status(200).json({updatedProduct, data});
 
     case "DELETE":
       await prisma.product.delete({
         where: { id: id as string },
       });
       return res.status(204).end();
 
     default:
       return res.status(405).json({ message: "Method not allowed" });
   }
 } catch (error) {
   return res.status(500).json({ message: "Internal Server Error" });
 }
}

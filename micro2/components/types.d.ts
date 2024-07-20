export type Product =  {
    id: string;
    name: string;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export type ProductForForm = Partial<Pick<Product, 'name' | 'description'>>;
  
export type ResponseMessage = { message: string }
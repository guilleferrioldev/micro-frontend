export type Data =  {
    id: string;
    name: string;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export type DataForForm = Partial<Pick<Data, 'name' | 'description'>>;
  
export type ResponseMessage = { message: string }
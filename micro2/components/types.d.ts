export type Data =  {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ResponseData =  {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}
  
export type ResponseMessage = { message: string }
import { Product } from "@/components/types";
import { convertDateToString } from "@/components/utils";

export function fromDataToResponseData (data: Product[]) : Product[] {
    const response = data.map((item: Product)=> ({
        ...item,
        createdAt: convertDateToString(item.createdAt),
        updatedAt: convertDateToString(item.updatedAt),
    }));
    
      return response
}
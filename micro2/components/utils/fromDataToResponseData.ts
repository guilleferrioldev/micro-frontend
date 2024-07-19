import { Data, ResponseData } from "@/components/types";
import { convertDateToString } from "@/components/utils";

export function fromDataToResponseData (data: Data[]) : ResponseData[] {
    const response = data.map((item: Data)=> ({
        ...item,
        createdAt: convertDateToString(item.createdAt),
        updatedAt: convertDateToString(item.updatedAt),
    }));
    
      return response
}
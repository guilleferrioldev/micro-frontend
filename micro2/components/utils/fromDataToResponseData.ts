import { Data } from "@/components/types";
import { convertDateToString } from "@/components/utils";

export function fromDataToResponseData (data: Data[]) : Data[] {
    const response = data.map((item: Data)=> ({
        ...item,
        createdAt: convertDateToString(item.createdAt),
        updatedAt: convertDateToString(item.updatedAt),
    }));
    
      return response
}
import { useEffect, useState } from "react";
import { Data, ResponseData } from "@/components/types";
import { fromDataToResponseData } from "@/components/utils";

export default function useProducts () {
    const [data, setData] = useState<ResponseData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.API_URL}/api/products`);
          const data: Data[] = await response.json();
          setData(fromDataToResponseData(data));
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  };
import { useEffect, useState } from "react";
import { Data, ResponseData } from "@/components/types";
import { convertDateToString } from "@/components/utils";

export default function useProducts () {
    const [data, setData] = useState<ResponseData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.API_URL}/api/products`);
          const data = await response.json();
          const updatedData = data.map((item: Data)=> ({
            ...item,
            createdAt: convertDateToString(item.createdAt),
            updatedAt: convertDateToString(item.updatedAt),
          }));
          setData(updatedData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  };
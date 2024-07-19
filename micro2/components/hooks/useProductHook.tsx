import { useEffect, useState } from "react";
import { DataForForm, ResponseMessage } from "@/components/types";

export default function useProduct (id: string) {
    if (id === 'new') {
      return {name : "", description: ""}
    }

    const [product, setProduct] = useState<DataForForm | ResponseMessage>();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.API_URL}/api/products/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);
    
    if (product && 'name' in product) {
      return product
    }  
}
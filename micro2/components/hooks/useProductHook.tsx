import { useEffect, useState } from "react";
import { DataForForm } from "@/components/types";

export default function useProduct (id: string) {
    const [product, setProduct] = useState<DataForForm>();
  
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

    return product
}
import { useEffect, useState } from "react";
import { ProductForForm } from "@/components/types";
import { getProductByIdAction } from "@/components/actions";

export default function useProduct (id: string) {
    if (id === 'new') {
      return {name : "", description: ""}
    }

    const [product, setProduct] = useState<ProductForForm>();
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProductByIdAction(id)
        setProduct(data);
      };
  
      fetchData();
    }, []);
    
    return product
}
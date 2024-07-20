import { useEffect, useState } from "react";
import { ProductForForm } from "@/components/types";
import { getProductByIdAction } from "@/components/actions";

export default function useProduct (id: string) {
    if (id === 'new') {
      return {name : "", description: ""}
    }

    const [product, setProduct] = useState<ProductForForm>();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProductByIdAction(id)
        setProduct(data);
        setIsLoading(false)
      };
  
      fetchData();
    }, [id]);
    
    return {product, isLoading}
}
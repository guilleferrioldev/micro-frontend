import { useEffect, useState } from "react";
import { Product } from "@/components/types";
import { deleteAction, getProductsAction } from '@/components/actions';

export default function useProducts () {
    const [data, setData] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
          const data = await getProductsAction();
          setData(data ?? [])
        }
      fetchData();
    }, []);

    const deleteProduct = async (id: string) => {
        await deleteAction(id)
        setData(prevData => prevData.filter(product => product.id !== id));
    };
  
    return {data, deleteProduct};
  };
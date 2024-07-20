import { Product } from "@/components/types";
export default function useProducts(): {
    data: Product[];
    deleteProduct: (id: string) => Promise<void>;
};

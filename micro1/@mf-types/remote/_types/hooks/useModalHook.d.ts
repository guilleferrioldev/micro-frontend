import { Product } from "@/components/types";
export default function useModal(): {
    isOpen: boolean;
    toDelete: Product | null;
    changeOpenCloseState: () => void;
    setProductToDelete: (product: Product) => void;
};

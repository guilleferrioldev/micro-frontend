import { Product } from "@/components/types";
export default function useModal(): {
    isOpen: boolean;
    toDelete: Product | undefined;
    changeOpenCloseState: () => void;
    setProductToDelete: (product: Product) => void;
};

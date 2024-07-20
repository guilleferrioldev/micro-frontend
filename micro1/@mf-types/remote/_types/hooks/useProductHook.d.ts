export default function useProduct(id: string): {
    name: string;
    description: string;
    product?: undefined;
    isLoading?: undefined;
} | {
    product: Partial<Pick<import("@/components/types").Product, "name" | "description">> | undefined;
    isLoading: boolean;
    name?: undefined;
    description?: undefined;
};

export default function useProduct(id: string): Partial<Pick<import("@/components/types").Product, "name" | "description">> | undefined;

import { Product } from "@/components/types";
import { fromDataToResponseData } from "@/components/utils";

export async function getProductsAction () {
    try {
        const response = await fetch(`${process.env.API_URL}/api/products`);
        const data: Product[] = await response.json();
        return fromDataToResponseData(data);
    } catch (error) {
        console.error(error)
    }
}
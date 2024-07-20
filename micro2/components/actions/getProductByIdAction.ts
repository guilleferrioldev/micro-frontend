import { ProductForForm, ResponseMessage} from "@/components/types";

export async function getProductByIdAction (id: string) {
    try {
        const response = await fetch(`${process.env.API_URL}/api/products/${id}`);
        const product: ProductForForm | ResponseMessage = await response.json();
        if (product && 'name' in product) {
            return product
        } 
    } catch (error) {
        throw(error)
    }
}
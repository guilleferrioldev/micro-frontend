import { DataForForm } from "@/components/types";

export async function createOrUpdateAction (data: DataForForm, id: string) {
    const method = id === 'new' ? 'POST' : 'PATCH'

    try {
        const response = await fetch(`${process.env.API_URL}/api/products/${id}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const status = await response.json()
        return status
    } catch (error) {
        return error
    }
}
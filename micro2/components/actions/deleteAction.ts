export async function deleteAction (id: string) {
    try {
        await fetch(`${process.env.API_URL}/api/products/${id}`, {
            method: 'DELETE'
        });

    } catch (error) {
        console.error(error)
    }
}
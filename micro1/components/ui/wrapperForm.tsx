export default function WrapperForm ({children, id}: {children: React.ReactNode, id: string}) {
    return (
        <>
            <h1>{id === "new" ? "New Product" : "Update Product" }</h1>
            <section style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '2rem'}}>
                {children}
            </section>
        </>
    )
}
export default function WrapperForm ({children, id}: {children: React.ReactNode, id: string}) {
    return (
        <>
            <h1>{id === "nuevo" ? "Nuevo Producto" : "Editar Producto" }</h1>
            <section style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '2rem'}}>
                {children}
            </section>
        </>
    )
}
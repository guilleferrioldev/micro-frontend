export default function WrapperForm ({children, text}: {children: React.ReactNode, text: string}) {
    return (
        <>
            <h2>{text}</h2>
            <section style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '2rem'}}>
                {children}
            </section>
        </>
    )
}
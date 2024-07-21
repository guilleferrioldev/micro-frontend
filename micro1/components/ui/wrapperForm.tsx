export default function WrapperForm ({children, text}: {children: React.ReactNode, text: string}) {
    return (
        <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxShadow: '0 0 10px rgb(168, 19, 29, 0.3)', borderRadius: '20px'}}>
            <h3>{text}</h3>
            <div style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '2rem'}}>
                {children}
            </div>
        </div>
    )
}
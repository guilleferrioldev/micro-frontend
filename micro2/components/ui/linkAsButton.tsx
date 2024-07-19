import Link from "next/link"

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
    fontSize: '14px',
    height: '32px',
    padding: '4px 15px',
    borderRadius: '6px',
    outline: 'none',
    position: 'relative',
    display: 'inline-flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    textAlign: 'center',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)'
  } as React.CSSProperties

export default function LinkAsButton ({href, color, children}: {href: string, color: string, children: string}) {
    return (
        <Link href={href} style={{...linkStyle, background: color}}>{children}</Link>
    )
}
import Link from "next/link";
import styles from "@/styles/Home.module.css"
import { useRouter } from "next/router";

export default function Header () {
    const router = useRouter()
    const linkText = router.pathname === '/' ? 'New Product' : 'Go Home';
    const linkHref = router.pathname === '/' ? '/new' : '/';
    const linkColor = router.pathname === '/' ? '#1677ff' : 'red';

    return (
        <header className={styles.header}>
            <h1>Micro Frontends</h1>
            <Link href={linkHref} style={{background: linkColor}}>{linkText}</Link>
        </header>
    )
}
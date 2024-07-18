import NewButton from "./button";
import styles from "@/styles/Home.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <h1>Micro Frontend Test</h1>
            <NewButton/>
        </header>
    )
}
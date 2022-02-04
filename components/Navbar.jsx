import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <p>Logo</p>
                <h1>PokeProj</h1>
            </div>
            <ul className={styles.link_item}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </nav>
    )
}
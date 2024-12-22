import Link from "next/link";
import styles from "./header.module.css";
import { Nunito } from "next/font/google";

export const inter = Nunito({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Header(){
    return (
        <header className={`${styles.header} ${inter.className}`}>
            <ul className={styles.list}>
                <Link href={"/"} className={styles.link}>Home</Link>
                <Link href={"/about/ai-features"} className={styles.link}>where is AI feautures</Link>
            </ul>
        </header>
    )
}
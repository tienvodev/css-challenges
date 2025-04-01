import Link from "next/link";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <body className={styles.body}>
      <nav className={styles.nav}>
        <Link href="/challenges/challenge-01" className={styles.link}>
          Challenge 01: Responsive Grid of Squares | Style Siblings on Hover
        </Link>
      </nav>
    </body>
  );
}

import styles from "./Navbar.module.css";

const LINKS = ["Programs", "Transformations", "Pricing", "FAQS"];

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>Atomic Fitness</span>
        <nav className={styles.links}>
          <a href="#" className={styles.homeActive}>
            Home
          </a>
          {LINKS.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>
        <a className={styles.cta} href="#">
          Login
        </a>
      </div>
    </header>
  );
}

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>Copyright @2026 / All rights reserved</p>
        <div className={styles.links}>
          <a href="#">Privacy &amp; Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

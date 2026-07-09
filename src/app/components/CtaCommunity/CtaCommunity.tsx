import styles from "./CtaCommunity.module.css";

const LINKS = ["Home", "Services", "About", "Contact"];

export function CtaCommunity() {
  return (
    <section className={styles.section} id="cta-community">
      <div className="container">
        <nav className={styles.navRow}>
          {LINKS.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className={styles.stage}>
          <img
            className={styles.runnerImg}
            src="/figma/cta-community.png"
            alt="Runner sprinting"
          />
          <h2 className={styles.heading}>Join Our Community</h2>
        </div>

        <div className={styles.divider} />
      </div>
    </section>
  );
}

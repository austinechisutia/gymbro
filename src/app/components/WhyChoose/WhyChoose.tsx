import styles from "./WhyChoose.module.css";

const FEATURE_TITLE = "Modern Equipment";
const FEATURE_TEXT =
  "Train with confidence using our state-of-the-art fitness equipment, designed for maximum results.";

export function WhyChoose() {
  return (
    <section className={styles.section} id="why-choose">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 className={styles.heading}>Why Choose Our Gym</h2>
          <ul className={styles.list}>
            {[0, 1, 2, 3].map((i) => (
              <li className={styles.item} key={i}>
                <img
                  className={styles.itemIcon}
                  src="/figma/check-lime.svg"
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.itemTitle}>{FEATURE_TITLE}</p>
                  <p className={styles.itemText}>{FEATURE_TEXT}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <img
            src="/figma/why-choose.png"
            alt="Member training with battle ropes"
          />
        </div>
      </div>
    </section>
  );
}

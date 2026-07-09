import { Button } from "../Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img
        className={styles.glowTopLeft}
        src="/figma/glow-top-left.svg"
        alt=""
        aria-hidden="true"
      />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={styles.accent}>Transform</span> Your Body
            <br />
            Elevate Your Life
          </h1>

          <p className={styles.lede}>
            Train your body. Strengthen mind. Become the version of you that
            you&rsquo;ve always imagined
          </p>

          <Button href="#">Join Now</Button>

          <div className={styles.ratingBlock}>
            <div className={styles.avatarStack}>
              <img src="/figma/avatar-stack.png" alt="" />
              <img src="/figma/avatar-right.png" alt="" />
              <img src="/figma/avatar-rockerfeller.png" alt="" />
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.ratingInfo}>
              <div className={styles.ratingTop}>
                <span>4.5/5</span>
                <img src="/figma/stars-rating.svg" alt="4.5 out of 5 stars" />
              </div>
              <span className={styles.ratingCount}>Based on 1K+ Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.mediaWrap}>
          <img
            className={styles.glowBehind}
            src="/figma/glow-top-right.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className={styles.heroImage}
            src="/figma/hero-person.png"
            alt="Man doing dumbbell squats with headphones on"
          />
          <img
            className={styles.sparkleLarge}
            src="/figma/sparkle-large.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className={styles.sparkleSmall}
            src="/figma/sparkle-small.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

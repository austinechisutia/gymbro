import type { Metadata } from "next";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Reveal } from "../components/Reveal/Reveal";
import { Testimonials } from "../components/Testimonials/Testimonials";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transformations — Fitness",
  description:
    "Real results from real Fitness members — strength gained, habits built, lives changed.",
};

const STATS = [
  { value: "1,200+", label: "Members transformed" },
  { value: "150K lbs", label: "Lost collectively" },
  { value: "4.9/5", label: "Average member rating" },
];

const GALLERY = [
  "/figma/why-choose.png",
  "/figma/habits-main.png",
  "/figma/testimonial-left.png",
  "/figma/testimonial-right.png",
  "/figma/cta-community.png",
  "/figma/habits-runner.png",
];

export default function TransformationsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Transformations"
        title="Real Results From Real Members"
        subtitle="Every transformation starts with a single session. Here's what consistency looks like."
      />

      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {STATS.map((stat, i) => (
            <Reveal className={styles.stat} key={stat.label} delay={i * 120}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className={styles.gallerySection}>
        <div className="container">
          <Reveal>
            <h2 className={styles.galleryHeading}>Snapshots From The Floor</h2>
          </Reveal>
          <div className={styles.gallery}>
            {GALLERY.map((src, i) => (
              <Reveal
                className={styles.galleryItem}
                key={src + i}
                delay={(i % 3) * 100}
              >
                <img src={src} alt="" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaCommunity />
    </main>
  );
}

import type { Metadata } from "next";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Testimonials } from "../components/Testimonials/Testimonials";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transformations — Atomic Fitness",
  description:
    "Real results from real Atomic Fitness members — strength gained, habits built, lives changed.",
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
          {STATS.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className={styles.galleryHeading}>Snapshots From The Floor</h2>
          <div className={styles.gallery}>
            {GALLERY.map((src, i) => (
              <div className={styles.galleryItem} key={src + i}>
                <img src={src} alt="" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaCommunity />
    </main>
  );
}

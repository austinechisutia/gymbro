import type { Metadata } from "next";
import { Button } from "../components/Button/Button";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Reveal } from "../components/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Programs — Atomic Fitness",
  description:
    "Strength, conditioning, mobility, and coaching programs built around your goals.",
};

const PROGRAMS = [
  {
    title: "Strength Training",
    text: "Progressive lifting blocks that build raw strength, one measurable rep at a time.",
    image: "/figma/why-choose.png",
  },
  {
    title: "HIIT & Conditioning",
    text: "High-intensity circuits engineered to torch fat and build lasting endurance.",
    image: "/figma/habits-main.png",
  },
  {
    title: "Yoga & Mobility",
    text: "Guided mobility and breathwork sessions that keep you moving pain-free.",
    image: "/figma/testimonial-left.png",
  },
  {
    title: "One-on-One Coaching",
    text: "A dedicated coach who adapts your plan week to week as you progress.",
    image: "/figma/testimonial-right.png",
  },
  {
    title: "Nutrition Coaching",
    text: "Realistic meal guidance that fits your schedule instead of fighting it.",
    image: "/figma/cta-community.png",
  },
  {
    title: "Group Classes",
    text: "High-energy group sessions that keep you accountable and motivated.",
    image: "/figma/habits-runner.png",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Programs"
        title="Programs Built Around Your Goals"
        subtitle="Whatever you're training for, there's a program designed to get you there."
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          {PROGRAMS.map((program, i) => (
            <Reveal
              as="article"
              className={styles.card}
              key={program.title}
              delay={(i % 3) * 120}
            >
              <div className={styles.media}>
                <img src={program.image} alt="" aria-hidden="true" />
              </div>
              <h2 className={styles.cardTitle}>{program.title}</h2>
              <p className={styles.cardText}>{program.text}</p>
              <Button href="#" className={styles.cardBtn}>
                Learn More
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaCommunity />
    </main>
  );
}

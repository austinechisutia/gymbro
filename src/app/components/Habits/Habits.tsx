"use client";

import { useState } from "react";
import { Button } from "../Button/Button";
import { Reveal } from "../Reveal/Reveal";
import styles from "./Habits.module.css";

const SLIDES = [
  {
    heading: "Build Daily Habits For Better Health",
    text: "Infuse energy into your life move with purpose, stay insspired, keep your body in motion, and thrive in a heathir, move vibrant version of yourself",
    primary: {
      src: "/figma/habits-main.png",
      alt: "Man training in gym apparel",
      mirror: true,
    },
    caption: ["Stop Thinking", "Start Lifting"],
    small: { src: "/figma/habits-runner.png", alt: "Man running" },
  },
  {
    heading: "Fuel Your Body The Right Way",
    text: "Simple, sustainable nutrition guidance that fits your schedule, so eating well becomes second nature instead of one more thing to manage.",
    primary: {
      src: "/figma/why-choose.png",
      alt: "Man training with battle ropes",
      mirror: false,
    },
    caption: ["Eat With", "Intention"],
    small: { src: "/figma/cta-community.png", alt: "Man running" },
  },
  {
    heading: "Recover Smarter, Train Harder",
    text: "Mobility work, sleep tracking, and guided rest days built into every plan, because real progress happens between sessions too.",
    primary: {
      src: "/figma/testimonial-left.png",
      alt: "Man doing a dumbbell squat with headphones on",
      mirror: false,
    },
    caption: ["Rest Is", "Progress"],
    small: { src: "/figma/habits-runner.png", alt: "Man running" },
  },
  {
    heading: "Track Progress, Stay Motivated",
    text: "Watch your numbers move week over week with simple check-ins that keep you accountable without the guesswork.",
    primary: {
      src: "/figma/testimonial-right.png",
      alt: "Man in a black cap and quarter-zip top",
      mirror: false,
    },
    caption: ["Stay", "Consistent"],
    small: { src: "/figma/cta-community.png", alt: "Man running" },
  },
];

export function Habits() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function goTo(next: number) {
    if (next === index) return;
    setDirection(next > index ? "next" : "prev");
    setIndex(next);
  }

  const slide = SLIDES[index];
  const animClass = direction === "next" ? styles.fromRight : styles.fromLeft;

  return (
    <section className={styles.section} id="habits">
      <Reveal className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.slideWrap}>
            <div key={index} className={`${styles.slideContent} ${animClass}`}>
              <h2 className={styles.heading}>{slide.heading}</h2>
              <p className={styles.text}>{slide.text}</p>
            </div>
          </div>

          <Button href="#">Join Now</Button>

          <div
            className={styles.progress}
            role="tablist"
            aria-label="Habit slides"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
                className={`${styles.dash} ${i === index ? styles.active : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.mediaClip}>
          <div key={index} className={`${styles.mediaRow} ${animClass}`}>
            <div className={styles.primaryImage}>
              <img
                src={slide.primary.src}
                alt={slide.primary.alt}
                className={slide.primary.mirror ? styles.mirrored : undefined}
              />
            </div>
            <div className={styles.sideStack}>
              <div className={styles.stopCard}>
                {slide.caption[0]}
                <br />
                {slide.caption[1]}
              </div>
              <div className={styles.runnerImage}>
                <img src={slide.small.src} alt={slide.small.alt} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

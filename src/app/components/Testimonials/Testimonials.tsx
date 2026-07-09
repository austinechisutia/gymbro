"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    quote:
      "This program changed the way I approach fitness. I used to dread workouts, but now they're something I genuinely enjoy. The structure, the support, and the results have been incredible. I feel stronger, healthier, and way more confident in my body, and the coaches actually check in to make sure I'm progressing the right way, not just pushing me harder for the sake of it.",
    name: "Rockerfeller",
    role: "Litrature Enthusiast",
  },
  {
    quote:
      "I've tried a handful of gyms and online programs before, and none of them stuck the way this one has. The daily habit tracking keeps me honest, the meal suggestions are actually realistic for a busy schedule, and six months in I've hit strength numbers I didn't think were possible. It genuinely feels like a community, not just a subscription.",
    name: "Marcus Webb",
    role: "Software Engineer",
  },
  {
    quote:
      "What sold me was how personalized everything felt from week one. My trainer adjusted my plan around an old knee injury without me even having to ask twice, and the progress monitoring made it easy to see real change instead of just guessing. Three months in, I'm sleeping better, lifting heavier, and I actually look forward to leg day now.",
    name: "Priya Chandran",
    role: "Nurse Practitioner",
  },
];

function PhotoProfile() {
  return (
    <div className={styles.photoProfile}>
      <img src="/figma/avatar-rockerfeller.png" alt="" aria-hidden="true" />
      <div>
        <p className={styles.name}>Rockerfeller</p>
        <p className={styles.role}>Litrature Enthusiast</p>
      </div>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function goTo(next: number) {
    setDirection(next > index ? "next" : "prev");
    setIndex((next + REVIEWS.length) % REVIEWS.length);
  }

  const review = REVIEWS[index];
  const animClass = direction === "next" ? styles.fromRight : styles.fromLeft;

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <h2 className={styles.heading}>What Our Members Are Saying</h2>

        <div className={styles.row}>
          <button
            type="button"
            className={`${styles.dot} ${styles.dotLeft}`}
            aria-label="Previous review"
            onClick={() => goTo(index - 1)}
          >
            <ArrowIcon direction="left" />
          </button>

          <div className={`${styles.photoCard} ${styles.faded}`}>
            <img src="/figma/testimonial-left.png" alt="" />
            <PhotoProfile />
          </div>

          <div className={styles.center}>
            <div key={index} className={`${styles.quoteWrap} ${animClass}`}>
              <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
              <div className={styles.profileRow}>
                <img
                  src="/figma/avatar-rockerfeller.png"
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.role}>{review.role}</p>
                </div>
                <img
                  className={styles.stars}
                  src="/figma/rating-stars-small.svg"
                  alt="5 out of 5 stars"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.dot} ${styles.dotRight}`}
            aria-label="Next review"
            onClick={() => goTo(index + 1)}
          >
            <ArrowIcon direction="right" />
          </button>

          <div className={styles.photoCard}>
            <img src="/figma/testimonial-right.png" alt="" />
            <PhotoProfile />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollDots.module.css";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "habits", label: "Daily Habits" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
  { id: "cta-community", label: "Join Community" },
];

export function ScrollDots() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.dots} aria-label="Page sections">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          aria-current={activeId === section.id ? "true" : undefined}
          className={`${styles.dot} ${
            activeId === section.id ? styles.active : ""
          }`}
        />
      ))}
    </nav>
  );
}

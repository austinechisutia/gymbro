"use client";

import { useState } from "react";
import { Reveal } from "../Reveal/Reveal";
import styles from "./Accordion.module.css";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal className={styles.item} key={item.question} delay={i * 80}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
                +
              </span>
            </button>
            {isOpen && <p className={styles.answer}>{item.answer}</p>}
          </Reveal>
        );
      })}
    </div>
  );
}

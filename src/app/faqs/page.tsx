import type { Metadata } from "next";
import { Accordion } from "../components/Accordion/Accordion";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQs — Atomic Fitness",
  description: "Answers to the most common questions about Atomic Fitness.",
};

const FAQS = [
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. All memberships are month-to-month, and you can upgrade, downgrade, or cancel at any time from your account.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes — you can switch between Basic, Pro, and Elite at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is coaching included in every plan?",
    answer:
      "Personal coaching is included with the Pro and Elite plans. Basic members get a tailored plan plus email support.",
  },
  {
    question: "What if I've never trained before?",
    answer:
      "Every plan starts with an assessment so your program matches your current fitness level, no matter where you're starting from.",
  },
  {
    question: "How do I cancel my membership?",
    answer:
      "Cancel anytime from your account settings — there are no cancellation fees and no minimum commitment period.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, new members get a 7-day trial on any plan so you can experience the programs before committing.",
  },
];

export default function FaqsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Can't find the answer you're looking for? Reach out to our support team."
      />

      <section className={styles.section}>
        <div className={`container ${styles.wrap}`}>
          <Accordion items={FAQS} />
        </div>
      </section>

      <CtaCommunity />
    </main>
  );
}

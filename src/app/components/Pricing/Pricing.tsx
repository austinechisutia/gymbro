import { Button } from "../Button/Button";
import { Reveal } from "../Reveal/Reveal";
import styles from "./Pricing.module.css";

const CHECK_LIME = "/figma/check-icon-1.svg";
const CHECK_DARK = "/figma/check-icon-pro.svg";

const PLANS = [
  {
    name: "BASIC PLAN",
    price: 29.99,
    features: [
      "Single personalized plan",
      "Tailored to fitness goals",
      "Basic workouts",
      "Meal suggestions",
      "Email support",
    ],
    icon: CHECK_LIME,
    variant: "primary" as const,
  },
  {
    name: "PRO PLAN",
    price: 39.99,
    features: [
      "Personal training and meal plans",
      "Weight tracking",
      "Progress monitoring",
      "Exclusive content",
      "Customizable routines",
      "Email chat support",
      "Personal training and meal plans",
    ],
    icon: CHECK_DARK,
    variant: "dark" as const,
    featured: true,
  },
  {
    name: "ELITE PLAN",
    price: 69.99,
    features: [
      "All pro plan features",
      "One-on-one coaching",
      "Weekly check-ins",
      "Priority support",
      "Expert guidance",
    ],
    icon: CHECK_LIME,
    variant: "primary" as const,
  },
];

export function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>Perfect Plan For Your Fitness Goals</h2>
        </Reveal>
        <div className={styles.grid}>
          {PLANS.map((plan, i) => (
            <Reveal
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              key={plan.name}
              delay={i * 120}
            >
              <p className={styles.planName}>{plan.name}</p>
              <p className={styles.price}>
                ${plan.price}
                <span>/month</span>
              </p>
              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={`${feature}-${i}`}>
                    <img src={plan.icon} alt="" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                variant={plan.variant}
                className={styles.fullBtn}
              >
                Join Now
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Button } from "../components/Button/Button";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Reveal } from "../components/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Products — Fitness",
  description:
    "Shop Fitness apparel and gear — tees, pullovers, gloves, and everyday training essentials.",
};

function BandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="4.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 8c-1.5 1.2-1.5 6.8 0 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 8c1.5 1.2 1.5 6.8 0 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.5 3h5v2.5l1.5 2V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7.5l1.5-2V3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 3h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DuffelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 9V6a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type Product =
  | { name: string; price: number; image: string; icon?: undefined }
  | { name: string; price: number; icon: () => React.JSX.Element; image?: undefined };

function Icon({ icon: IconComponent }: { icon: () => React.JSX.Element }) {
  return <IconComponent />;
}

const PRODUCTS: Product[] = [
  {
    name: "Performance Training Tee",
    price: 34.99,
    image: "/figma/habits-main.png",
  },
  {
    name: "Quarter-Zip Pullover",
    price: 54.99,
    image: "/figma/testimonial-right.png",
  },
  {
    name: "Training Gloves",
    price: 29.99,
    image: "/figma/why-choose.png",
  },
  {
    name: "Resistance Band Set",
    price: 24.99,
    icon: BandIcon,
  },
  {
    name: "Insulated Water Bottle",
    price: 19.99,
    icon: BottleIcon,
  },
  {
    name: "Signature Gym Duffel",
    price: 59.99,
    icon: DuffelIcon,
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Shop"
        title="Gear Built For The Grind"
        subtitle="Everyday essentials designed to keep you training, recovering, and repping harder."
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          {PRODUCTS.map((product, i) => (
            <Reveal
              as="article"
              className={styles.card}
              key={product.name}
              delay={(i % 3) * 120}
            >
              <div className={styles.media}>
                {product.icon ? (
                  <div className={styles.iconTile}>
                    <Icon icon={product.icon} />
                  </div>
                ) : (
                  <img src={product.image} alt="" aria-hidden="true" />
                )}
              </div>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.price}>${product.price}</p>
              <Button href="#" className={styles.cardBtn}>
                Add to Cart
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaCommunity />
    </main>
  );
}

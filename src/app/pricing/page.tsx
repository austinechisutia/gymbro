import type { Metadata } from "next";
import { CtaCommunity } from "../components/CtaCommunity/CtaCommunity";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Pricing } from "../components/Pricing/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Fitness",
  description:
    "Simple, transparent membership plans for every fitness goal. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Pricing"
        title="Membership Plans For Every Goal"
        subtitle="No hidden fees, no long-term contracts. Upgrade, downgrade, or cancel whenever you need to."
      />

      <Pricing />

      <CtaCommunity />
    </main>
  );
}

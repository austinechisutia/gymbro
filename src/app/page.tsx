import { CtaCommunity } from "./components/CtaCommunity/CtaCommunity";
import { Habits } from "./components/Habits/Habits";
import { Hero } from "./components/Hero/Hero";
import { Pricing } from "./components/Pricing/Pricing";
import { ScrollDots } from "./components/ScrollDots/ScrollDots";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <ScrollDots />
      <main>
        <Hero />
        <Habits />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <CtaCommunity />
      </main>
    </>
  );
}

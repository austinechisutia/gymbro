import { CtaCommunity } from "./components/CtaCommunity/CtaCommunity";
import { Footer } from "./components/Footer/Footer";
import { Habits } from "./components/Habits/Habits";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Pricing } from "./components/Pricing/Pricing";
import { ScrollDots } from "./components/ScrollDots/ScrollDots";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollDots />
      <main>
        <Hero />
        <Habits />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <CtaCommunity />
      </main>
      <Footer />
    </>
  );
}

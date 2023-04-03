import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  useTitle("Your source for exciting and unexpected gifts that will delight anyone.");
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}

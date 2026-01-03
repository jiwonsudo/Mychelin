import { Features } from "./components/domain/landing-page/features";
import { Hero } from "./components/domain/landing-page/hero";

export default function Home() {
  return (
    <div>
      <div className="w-full"></div>
      <Hero></Hero>
      <Features></Features>
    </div>
  );
}

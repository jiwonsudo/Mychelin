import { Features } from "./components/domain/landing-page/Features";
import { Hero } from "./components/domain/landing-page/Hero";
import { CallToAction } from "./components/domain/landing-page/CallToAction";


export default function Home() {
  return (
    <div>
      <div className="w-full"></div>
      <Hero></Hero>
      <Features></Features>
      <CallToAction></CallToAction>
    </div>
  );
}

import { Features } from "@/app/components/domain/landing-page/Features";
import { Hero } from "@/app/components/domain/landing-page/Hero";
import { CallToAction } from "@/app/components/domain/landing-page/CallToAction";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <CallToAction></CallToAction>
    </div>
  );
}

import Hero from "./components/Hero";
import BriefProduct from "./components/Product/BriefProduct";
import BriefProductShowcase from "./components/Product/BriefProductShowcase";
import BriefAboutTeam from "./components/About/BriefAboutTeam";
import BriefAboutHistory from "./components/About/BriefAboutHistory";
import BriefAboutCulture from "./components/About/BriefAboutCulture";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <BriefAboutTeam />
      <BriefAboutHistory />
      <BriefAboutCulture />
      <BriefProduct />
      <BriefProductShowcase />
      <Testimonial />
    </>
  );
}

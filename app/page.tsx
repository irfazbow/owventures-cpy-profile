import Hero from "./components/Hero";
import BriefAbout from "./components/BriefAbout";
import BriefProduct from "./components/BriefProduct";
import BriefProductShowcase from "./components/BriefProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <BriefAbout />
      <BriefProduct />
      <BriefProductShowcase />
    </>
  );
}

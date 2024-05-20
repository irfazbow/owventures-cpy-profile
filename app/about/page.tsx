import Culture from "./components/Culture";
import FounderShowcase from "./components/FounderShowcase";
import Hero from "./components/Hero";
import MainAbout from "./components/MainAbout";
import SubAbout from "./components/SubAbout";
import TimelineShowcase from "./components/TimelineShowcase";

export default function About() {
  return (
    <>
      <Hero />
      <MainAbout />
      <FounderShowcase />
      <TimelineShowcase />
      <SubAbout />
      <Culture />
    </>
  );
}

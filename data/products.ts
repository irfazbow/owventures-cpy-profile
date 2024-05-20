import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Scout Launcher",
    description1:
      "The scout launcher, also known as the Little Scout, is a surveyor probe with the latest edition being Mk. IV. The Little Scout is a launchable camera designed to help safely explore hazardous environments.",
    description2:
      "It has several abilities for exploring the Solar System: forward and rear-facing cameras for taking black-and-white images and detecting Ghost Matter, a distance indicator, a seismic stability indicator (useful on Brittle Hollow and The Stranger's dam), floodlights, a hazard indicator, and a warp core for recall to the player.",
    price: 729,
    image: "/imgs/product-scoutlauncher.webp",
  },
  {
    id: 2,
    name: "Signalscope",
    description1:
      "The Signalscope is an essential tool for any Hearthian explorer, allowing users to detect and track various signals throughout the Solar System.",
    description2:
      "It can tune into different frequencies to locate distant sound sources such as other travelers' instruments, distress beacons, and mysterious signals from ancient technologies. The Signalscope also provides visual aids to help pinpoint the origin of signals.",
    price: 159,
    image: "/imgs/product-signalscope.webp",
  },
  {
    id: 3,
    name: "RC Mini Ship",
    description1:
      "The RC Mini Ship is a scaled-down, remote-controlled replica of the standard Hearthian spacecraft, perfect for training and educational purposes.",
    description2:
      "Equipped with real-time telemetry feedback, the RC Mini Ship allows users to practice piloting skills, maneuver through obstacles, and simulate landings on various terrains. It's an excellent tool for aspiring astronauts and hobbyists alike.",
    price: 4799,
    image: "/imgs/product-rcminiship.webp",
  },
  {
    id: 4,
    name: "Spacesuit Mk VI",
    description1:
      "The Spacesuit Mk VI is the latest iteration of the Hearthian spacesuit, designed for durability and versatility in space exploration.",
    description2:
      "Featuring an advanced life support system, reinforced hull for protection against environmental hazards, and an integrated Heads-Up Display (HUD) for vital statistics. The suit also includes thrusters for zero-gravity maneuvering and specialized boots for various planetary surfaces.",
    price: 133,
    image: "/imgs/product-spacesuitvi.webp",
  },
];

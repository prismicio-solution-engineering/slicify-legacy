import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Hero as HeroDefault } from "./HeroDefault";
import HeroTitleOnly from "./HeroTitleOnly";
import HeroWithBlueBackground from "./HeroBlueBackground";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <HeroDefault slice={slice} />;
    case "heroTitleOnly":
      return <HeroTitleOnly slice={slice} />;
    case "heroBlueBackground":
      return <HeroWithBlueBackground slice={slice} />;
  }
};

export default Hero;

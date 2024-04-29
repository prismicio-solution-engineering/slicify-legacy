import dynamic from "next/dynamic";

export const components = {
  featured_websites: dynamic(() => import("./FeaturedWebsitesList/FeaturedWebsitesList")),
  hero: dynamic(() => import("./Hero/Hero")),
  hero_blue_background: dynamic(() => import("./Hero/HeroBlueBackground")),
  hero_title_only: dynamic(() => import("./Hero/HeroTitleOnly")),
  text: dynamic(() => import("./Text/Text")),
};

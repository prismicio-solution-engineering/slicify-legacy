import dynamic from "next/dynamic";

export const legacyComponents = {
  featured_websites: dynamic(() => import("./FeaturedWebsitesList/FeaturedWebsitesList")),
  text: dynamic(() => import("./Text/Text")),
};

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FeaturedWebsitesList from "../FeaturedWebsitesList/FeaturedWebsitesList";

/**
 * Props for `FeaturedWebsites`.
 */
export type FeaturedWebsitesProps =
  SliceComponentProps<Content.FeaturedWebsitesSlice>;

/**
 * Component for "FeaturedWebsites" Slices.
 */
const FeaturedWebsites = ({ slice }: FeaturedWebsitesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FeaturedWebsitesList slice={slice} />
    </section>
  );
};

export default FeaturedWebsites;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TextHome from "./TextHome";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TextHome slice={slice} />
    </section>
  );
};

export default Text;

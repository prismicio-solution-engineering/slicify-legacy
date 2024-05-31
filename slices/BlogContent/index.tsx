import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Text from "../Text/Text";

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = SliceComponentProps<Content.BlogContentSlice>;

/**
 * Component for "BlogContent" Slices.
 */
const BlogContent = ({ slice }: BlogContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Text slice={slice}/>
    </section>
  );
};

export default BlogContent;

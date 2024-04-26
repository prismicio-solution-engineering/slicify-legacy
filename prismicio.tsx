import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";
import Link, { LinkProps } from "next/link";

export const repositoryName = "slicify-legacy"

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "home_page",
    path: "/:lang/",
  }
];

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });
  prismicNext.enableAutoPreviews({ client });
  return client;
};

interface AnchorLinkProps extends LinkProps {
  anchor?: KeyTextField;
}

export const AnchorLink = ({ ...props }: AnchorLinkProps) => {
  const resolvedHref = props.href + (props.anchor ? `#${props.anchor}` : "");
  return <Link {...props} href={resolvedHref} />;
};

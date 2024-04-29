import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { components } from "@/slices/";
import { blogArticleGraphQuery } from "@/utils/graphQueries";
import { getLanguages } from "@/utils/getLanguages";
import BlogLayout from "@/components/BlogLayout";
import { notFound } from "next/navigation";
import { getLocales } from "@/utils/getLocales";
import { Metadata } from "next";

type PageParams = { articleSlug: string[]; lang: string };

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID(
      "blog_article",
      params.articleSlug[params.articleSlug.length - 1],
      {
        lang: params.lang,
      }
    )
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function BlogArticle({ params }: { params: PageParams }) {
  const locales = await getLocales();

  const client = createClient();

  const page = await client
    .getByUID<prismic.Content.BlogArticleDocument>(
      "blog_article",
      params.articleSlug[params.articleSlug.length - 1],
      {
        graphQuery: blogArticleGraphQuery,
        lang: params.lang,
      }
    )
    .catch(() => notFound());

    // console.log(page)
  const languages = await getLanguages(page, client, locales);

  return (
    <BlogLayout languages={languages} page={page}>
      <SliceZone slices={page.data.body} components={components} />
    </BlogLayout>
  );
}

// Paths
export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_article", { lang: "*" });

  function splitUrl(url: string) {
    const parts = url.split("/").filter((part) => part !== "");

    if (parts.length === 3) {
      return {
        lang: parts[0] || "",
        articleSlug: [parts[2]] || "",
      };
    }
    if (parts.length === 4) {
      return {
        lang: parts[0] || "",
        articleSlug: [parts[2] || "", parts[3] || ""],
      };
    }
    return null;
  }

  return pages
    .map((page) => {
      return splitUrl(page.url!);
    })
    .filter((page) => page !== null);
}

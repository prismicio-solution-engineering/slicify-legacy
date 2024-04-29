import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { getLanguages } from "@/utils/getLanguages";
import { getLocales } from "@/utils/getLocales";
import { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";

export const revalidate = 5;

type PageParams = { lang: string };

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_page", { lang: params.lang });

  return {
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
  };
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locales = await getLocales();

  const client = createClient();

  const page = await client.getSingle("home_page", { lang });

  const languages = await getLanguages(page, client, locales);

  return (
    <MarketingLayout languages={languages}>
      <SliceZone slices={page.data.body} components={components} />
    </MarketingLayout>
  );
}

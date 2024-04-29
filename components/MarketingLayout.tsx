import { FooterDocumentData, HeaderDocumentData } from "@/prismicio-types";
import { Header } from "./Header";
import { PropsWithChildren, Suspense } from "react";

type MarketingLayoutProps = {
  header?: HeaderDocumentData;
  languages: {
    url: string;
    lang_name: string;
  }[];
};

export default function MarketingLayout(
  props: PropsWithChildren<MarketingLayoutProps>
) {
  return (
    <>
      <Suspense>
        <Header languages={props.languages} />
      </Suspense>
      {props.children}
    </>
  );
}

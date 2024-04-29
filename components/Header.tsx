import Link from "next/link";
import { Container } from "@/components/Container";
import { HeaderDocumentData } from "@/prismicio-types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PrismicNextLink } from "@prismicio/next";

type HeaderProps = {
  header?: HeaderDocumentData;
  languages: {
    url: string;
    lang_name: string;
  }[];
};

export function Header({ header, languages }: HeaderProps) {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            {/* <Link href={`/${languages[0].lang_name}`} aria-label="Home">
              <PrismicNextImage
                field={header.logo}
                className="h-10 w-auto"
                fallbackAlt=""
              />
            </Link> */}
            <div className="hidden md:flex md:gap-x-6">
              <div className="hidden md:block">
                <Link
                  href={`/${languages[0].lang_name}`}
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Home
                </Link>
                <Link
                  href={`/${languages[0].lang_name}/blog/design/what-is-this-project`}
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  What is this project
                </Link>
                <Link
                  href={`/${languages[0].lang_name}/blog/design/the-slice-universe`}
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  The slice universe
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <LanguageSwitcher languages={languages} />
          </div>
        </nav>
      </Container>
    </header>
  );
}

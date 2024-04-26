import { PrismicRichText } from "@prismicio/react";
import { Container } from "@/components/Container";
import { UnderlineDoodle } from "@/components/UnderlineDoodle";
import { Content } from "@prismicio/client";

export default function HeroTitleOnly({slice} : {slice : Content.HeroSliceTitleOnly}) {
  return (
    <section id={slice.primary.anchor || undefined}>
      <Container className="pb-16 pt-20 text-center lg:pt-32">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                {children}
              </h1>
            ),
            strong: ({ children }) => {
              return (
                <>
                  <span className="relative whitespace-nowrap text-blue-600">
                    <UnderlineDoodle className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" />
                    <span className="relative">{children}</span>
                  </span>
                </>
              );
            },
          }}
        />
      </Container>
    </section>
  );
}

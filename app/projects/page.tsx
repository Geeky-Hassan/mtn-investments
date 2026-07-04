import type { Metadata } from "next";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { companies, projects } from "../data";
import { ButtonLink, CtaBand, Footer, Header, PageHero, SectionHeader, shell } from "../components/site";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects | MTN Investments",
  description: "MTN Investments project portfolio across settlement, markets, real estate, commodities and operations.",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#071327]">
      <Header />
      <PageHero
        eyebrow="Our Projects"
        title="Infrastructure projects across payments, markets and commodities."
        copy="A portfolio view of the operating tracks behind MTN Investments, from settlement rails to tokenized market infrastructure."
      />

      <section className={`${shell} py-16 lg:py-20`}>
        <ProjectsGrid projects={projects} />
      </section>

      <section className="bg-[#f4f8fd] py-16 lg:py-20">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Portfolio Structure"
            title="Operating entities behind the stack."
            copy="The project ecosystem is supported by dedicated companies across asset management, supply, real-world assets and technology."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companies.map((company, index) => (
              <article className="rounded-lg border border-[#dce5f3] bg-white p-5" key={company}>
                <BadgeCheck className="text-[#13845f]" size={20} aria-hidden />
                <p className="mt-5 text-xs font-bold text-[#5d6c87]">0{index + 1}</p>
                <h3 className="mt-2 text-base font-bold leading-6">{company}</h3>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact">
              Start a Project Conversation <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}

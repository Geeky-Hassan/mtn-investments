import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { companies, projects } from "../data";
import { ButtonLink, CtaBand, Footer, Header, PageHero, SectionHeader, shell } from "../components/site";

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
        copy="A focused portfolio view for the Figma project screens, separated from the landing page for cleaner navigation."
      />

      <section className={`${shell} py-16 lg:py-20`}>
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", "Settlement", "Markets", "Real estate", "Commodities", "Operations"].map((filter, index) => (
            <span
              className={
                index === 0
                  ? "rounded-full bg-[#003087] px-4 py-2 text-sm font-bold text-white"
                  : "rounded-full border border-[#dce5f3] bg-white px-4 py-2 text-sm font-bold text-[#5d6c87]"
              }
              key={filter}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group rounded-lg border border-[#dce5f3] bg-white p-6 shadow-[0_10px_28px_rgba(0,48,135,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,48,135,0.12)]"
              key={project.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-extrabold uppercase text-[#079db5]">{project.tag}</span>
                <span className="rounded-full bg-[#f4f8fd] px-3 py-1 text-xs font-bold text-[#5d6c87]">
                  {project.stage}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[#071327]">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5d6c87]">{project.focus}</p>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#003087]"
                href="/contact"
              >
                Discuss project <ArrowRight size={15} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
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

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import {
  capabilities,
  companies,
  marketRails,
  metrics,
  projects,
  regulatedActors,
  stackLayers,
  trustControls,
} from "./data";
import { ButtonLink, CtaBand, Footer, Header, SectionHeader, SectionLabel, VideoBackdrop, shell } from "./components/site";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#071327]">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#001d55] text-white" id="home">
        <VideoBackdrop />
        <div className={`${shell} relative py-16 sm:py-20 lg:py-24`}>
          <Image
            className="absolute right-[-120px] top-10 h-auto w-[270px] opacity-15 sm:right-[-42px] sm:w-[360px] lg:w-[420px]"
            src="/mtn-logo.png"
            alt=""
            width={420}
            height={420}
            priority
          />
          <div className="relative max-w-5xl">
            <SectionLabel light>Global Digital Asset Infrastructure</SectionLabel>
            <h1 className="font-serif text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">MTN Investments</h1>
            <p className="relative mt-4 inline-block max-w-4xl pb-5 font-serif text-2xl font-bold leading-tight text-white/95 sm:text-3xl lg:text-4xl">
              Building the Future Rails of Global Digital Investments.
              <span className="pointer-events-none absolute -bottom-1 left-0 h-5 w-full" aria-hidden="true">
                <svg className="h-full w-full" viewBox="0 0 760 42" preserveAspectRatio="none" fill="none">
                  <path
                    d="M10 20C116 35 259 35 383 28C526 20 636 6 750 16"
                    stroke="#c8a24a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 27C162 39 314 38 450 30C574 23 671 12 742 19"
                    stroke="#9bdff0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity=".75"
                  />
                </svg>
              </span>
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
              Tokenization, wallet-based settlement, exchange operations and EVM-powered infrastructure for
              institutions, governments and asset owners.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#ecosystem" tone="light">
                Explore Ecosystem <ArrowRight size={16} aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" tone="outline">
                Request Demo
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-lg border border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div className="border-b border-white/10 bg-[#001d4a]/75 p-5 last:border-b-0 sm:border-r lg:border-b-0" key={metric.label}>
                <strong className="font-serif text-3xl text-white">{metric.value}</strong>
                <p className="mt-2 text-sm font-bold text-white/85">{metric.label}</p>
                <p className="mt-1 text-xs text-white/42">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} py-20 lg:py-24`} id="ecosystem">
        <SectionHeader
          centered
          eyebrow="Digital Asset Infrastructure Stack"
          title="One Parent. Three Integrated Layers."
          copy="A focused operating model that connects blockchain rails, wallets, settlement and capital markets."
        />
        <div className="mx-auto mt-10 grid w-full max-w-sm gap-2 rounded-lg border border-[#003087]/15 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,48,135,0.11)]">
          <span className="text-xs font-bold text-[#5d6c87]">Parent Holding Company</span>
          <strong className="font-serif text-2xl uppercase text-[#003087]">MTN Investments</strong>
        </div>
        <div className="mx-auto h-16 w-px bg-[#dce5f3]" />
        <div className="grid gap-5 lg:grid-cols-3">
          {stackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <article className="rounded-lg border border-[#dce5f3] bg-white p-6 shadow-[0_10px_28px_rgba(0,48,135,0.06)]" key={layer.title}>
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#003087]">
                  <Icon size={18} aria-hidden />
                  {layer.eyebrow}
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-[#071327]">{layer.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {layer.items.map((item) => (
                    <li className="flex items-center gap-3 text-sm text-[#5d6c87]" key={item}>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#079db5]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f4f8fd] py-20 lg:py-24" id="solutions">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="What We Enable"
            title="Clean modules for live financial markets."
            copy="A compact set of infrastructure capabilities designed for regulated digital asset programs."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="rounded-lg border border-[#dce5f3] bg-white p-6 shadow-[0_10px_28px_rgba(0,48,135,0.06)]" key={capability.title}>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#eaf2ff] text-[#003087]">
                    <Icon size={21} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#071327]">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5d6c87]">{capability.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#001d55] py-20 text-white lg:py-24">
        <div className={`${shell} grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center`}>
          <div>
            <SectionHeader
              light
              eyebrow="Regulated Infrastructure"
              title="Built for serious financial actors."
              copy="The stack combines wallet architecture, compliance operations and capital-market workflows in one deployable layer."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {regulatedActors.map((actor) => (
                <li className="flex items-center gap-3 text-sm text-white/82" key={actor}>
                  <BadgeCheck className="text-[#c8a24a]" size={18} aria-hidden />
                  {actor}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {trustControls.map((control) => {
              const Icon = control.icon;
              return (
                <article className="rounded-lg border border-white/12 bg-white/[0.055] p-5" key={control.title}>
                  <Icon className="text-[#9bdff0]" size={22} aria-hidden />
                  <h3 className="mt-4 font-bold">{control.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{control.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fd] py-20 lg:py-24">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Global Market Access"
            title="Connecting capital across markets."
            copy="A shared operating layer for onboarding, issuance, settlement and partner distribution."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {marketRails.map((rail) => (
              <article className="rounded-lg border border-[#dce5f3] bg-white p-5" key={rail.title}>
                <h3 className="font-bold text-[#003087]">{rail.title}</h3>
                <p className="mt-2 text-xs text-[#5d6c87]">{rail.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} py-20 lg:py-24`} id="projects">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Our Projects"
            title="Active infrastructure initiatives."
            copy="A preview of the platforms and operating tracks behind the MTN Investments ecosystem."
          />
          <ButtonLink href="/projects">
            View All Projects <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link className="rounded-lg border border-[#dce5f3] bg-white p-6 shadow-[0_10px_28px_rgba(0,48,135,0.06)] transition hover:-translate-y-1" href="/projects" key={project.title}>
              <span className="font-mono text-xs font-extrabold uppercase text-[#079db5]">{project.tag}</span>
              <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5d6c87]">{project.focus}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8fd] py-20 lg:py-24" id="company">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Portfolio Companies"
            title="Operating companies behind the stack."
            copy="Asset management, mining, supply, tokenization and technology development under one parent."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companies.map((company, index) => (
              <article className="rounded-lg border border-[#dce5f3] bg-white p-5" key={company}>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#eaf2ff] text-xs font-bold text-[#003087]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-base font-bold leading-6">{company}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}

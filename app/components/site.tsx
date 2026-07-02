import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Menu } from "lucide-react";
import { navItems } from "../data";

const shell = "mx-auto w-full max-w-[1190px] px-4 sm:px-6 lg:px-8";
const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5";

export function Logo({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label="MTN Investments home">
      <Image
        className="h-11 w-11 shrink-0 object-contain"
        src="/mtn-logo.png"
        alt=""
        width={52}
        height={52}
        priority
      />
      {!compact && (
        <span className="hidden min-w-0 uppercase sm:grid">
          <span className={dark ? "text-xs font-extrabold text-white" : "text-xs font-extrabold text-[#071327]"}>
            MTN Investments
          </span>
          <span className={dark ? "font-mono text-[9px] text-white/45" : "font-mono text-[9px] text-[#5d6c87]"}>
            Global Infrastructure
          </span>
        </span>
      )}
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "light" | "outline";
}) {
  const tones = {
    primary: "bg-[#003087] text-white shadow-[0_12px_26px_rgba(0,48,135,0.20)]",
    light: "bg-white text-[#003087] shadow-[0_12px_28px_rgba(0,29,85,0.18)]",
    outline: "border border-white/30 bg-white/10 text-white",
  };

  return (
    <Link href={href} className={`${buttonBase} ${tones[tone]}`}>
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#003087]/10 bg-white/95 shadow-[0_8px_26px_rgba(0,48,135,0.07)] backdrop-blur">
      <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm text-[#5d6c87] transition hover:bg-[#eaf2ff] hover:text-[#003087]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="inline-flex min-h-10 items-center rounded-lg border border-[#003087]/25 px-4 text-sm font-semibold text-[#003087]"
            href="/contact"
          >
            Request Demo
          </Link>
          <ButtonLink href="/contact">
            Partner With Us <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>
        <details className="relative ml-auto lg:hidden">
          <summary className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-[#dce5f3] text-[#003087]">
            <Menu size={22} aria-hidden />
          </summary>
          <div className="absolute right-0 top-14 grid w-[min(290px,calc(100vw-32px))] gap-1 rounded-lg border border-[#dce5f3] bg-white p-3 shadow-[0_18px_50px_rgba(0,48,135,0.11)]">
            {navItems.map((item) => (
              <Link className="rounded-lg px-3 py-3 text-sm text-[#5d6c87]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact">
              Partner With Us <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={
        light
          ? "mb-3 font-mono text-xs font-extrabold uppercase text-white/70"
          : "mb-3 font-mono text-xs font-extrabold uppercase text-[#0a55c7]"
      }
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <SectionLabel light={light}>{eyebrow}</SectionLabel>
      <h2
        className={
          light
            ? "font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            : "font-serif text-3xl font-bold leading-tight text-[#071327] sm:text-4xl lg:text-5xl"
        }
      >
        {title}
      </h2>
      {copy && (
        <p className={light ? "mt-4 text-base leading-7 text-white/68" : "mt-4 text-base leading-7 text-[#5d6c87]"}>
          {copy}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#001d55] text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-95"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,29,85,.98), rgba(0,48,135,.88)), url('/cta-rails.png')",
        }}
      />
      <div className={`${shell} py-20 sm:py-24`}>
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{copy}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#003087] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/cta-rails.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[#003087]/90" />
      <div className="mx-auto max-w-5xl">
        <SectionLabel light>Partner With MTN Investments</SectionLabel>
        <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Ready to Build on the Future Rails?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/70">
          Tokenize assets, launch settlement rails, deploy exchange infrastructure, or build a private EVM network.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" tone="light">
            Partner With MTN Investments <ArrowRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink href="/contact" tone="outline">
            Request an Institutional Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#001d55] text-white">
      <div className={`${shell} grid gap-12 py-14 lg:grid-cols-[1fr_1.35fr]`}>
        <div className="grid max-w-sm gap-4">
          <Logo compact dark />
          <p className="text-sm leading-7 text-white/45">
            Connecting tokenization, settlement and blockchain infrastructure across dynamic markets.
          </p>
          <span className="flex items-center gap-2 text-sm text-white/40">
            <MapPin size={15} aria-hidden /> Singapore Pte Ltd
          </span>
          <Link className="flex items-center gap-2 text-sm text-white/40 transition hover:text-white/75" href="/contact">
            <Mail size={15} aria-hidden /> mtninvestments.net
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Platforms",
              links: [
                { label: "FuzionOS", href: "/#ecosystem" },
                { label: "FuzionPay", href: "/#ecosystem" },
                { label: "MTN Capital", href: "/#ecosystem" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "Our Ecosystem", href: "/#ecosystem" },
                { label: "Solutions", href: "/#solutions" },
                { label: "Projects", href: "/projects" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "Partner With Us", href: "/contact" },
                { label: "Request Demo", href: "/contact" },
                { label: "Institutional Inquiry", href: "/contact" },
              ],
            },
          ].map((group) => (
            <div className="grid content-start gap-3" key={group.title}>
              <h3 className="font-mono text-xs font-bold uppercase text-[#93c5fd]">{group.title}</h3>
              {group.links.map((link) => (
                <Link className="text-sm text-white/45 transition hover:text-white/80" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { shell };

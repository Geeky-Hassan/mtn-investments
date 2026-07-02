import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactTracks } from "../data";
import { Footer, Header, PageHero, SectionLabel, shell } from "../components/site";

export const metadata: Metadata = {
  title: "Contact | MTN Investments",
  description: "Contact MTN Investments for partnerships, demos and institutional digital asset infrastructure inquiries.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#071327]">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Talk to MTN Investments."
        copy="For partnerships, demos and institutional infrastructure inquiries, send a short note and our team will route it to the right track."
      />

      <section className="bg-[#f4f8fd]">
        <div className={`${shell} grid gap-8 py-16 lg:grid-cols-[0.78fr_1fr] lg:py-20`}>
          <div className="rounded-lg bg-[#001d55] p-6 text-white shadow-[0_18px_50px_rgba(0,48,135,0.14)] sm:p-8">
            <SectionLabel light>Institutional Desk</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Start with one message.</h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Tell us what you want to build. Keep it simple: asset type, market, timeline and the kind of
              infrastructure you need.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <Mail className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">partners@mtninvestments.net</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <MapPin className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">Singapore Pte Ltd</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <Phone className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">Demo and partnership requests</span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-mono text-xs font-extrabold uppercase text-white/55">Common Tracks</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {contactTracks.map((track) => (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75" key={track}>
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form className="rounded-lg border border-[#dce5f3] bg-white p-5 shadow-[0_18px_50px_rgba(0,48,135,0.11)] sm:p-7">
            <SectionLabel>Contact Form</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#071327]">Request a conversation</h2>
            <p className="mt-3 text-sm leading-6 text-[#5d6c87]">
              The form is ready for backend integration when hosting is connected.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[#071327]">
                  Name
                  <input
                    className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#071327]">
                  Work email
                  <input
                    className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-[#071327]">
                Interest
                <select
                  className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
                  name="interest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a track
                  </option>
                  <option>Tokenization</option>
                  <option>Wallet and settlement</option>
                  <option>Exchange infrastructure</option>
                  <option>Sovereign EVM network</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#071327]">
                Message
                <textarea
                  className="min-h-32 resize-y rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
                  name="message"
                  placeholder="Tell us what you want to build"
                />
              </label>
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#003087] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                type="submit"
              >
                Send Inquiry <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

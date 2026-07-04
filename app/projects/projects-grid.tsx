"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { projects as projectSource } from "../data";

type Project = (typeof projectSource)[number];

const filters = ["All", "Settlement", "Markets", "Real estate", "Commodities", "Operations", "Financial rails"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              className={
                isActive
                  ? "shrink-0 whitespace-nowrap rounded-full bg-[#003087] px-4 py-2 text-sm font-bold text-white"
                  : "shrink-0 whitespace-nowrap rounded-full border border-[#dce5f3] bg-white px-4 py-2 text-sm font-bold text-[#5d6c87] transition hover:border-[#003087]/35 hover:text-[#003087]"
              }
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            className="group rounded-lg border border-[#dce5f3] bg-white p-6 shadow-[0_10px_28px_rgba(0,48,135,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,48,135,0.12)]"
            key={project.title}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-extrabold uppercase text-[#079db5]">{project.tag}</span>
              <span className="rounded-full bg-[#f4f8fd] px-3 py-1 text-xs font-bold text-[#5d6c87]">
                {project.stage}
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#071327]">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#5d6c87]">{project.focus}</p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#003087]" href="/contact">
              Discuss project <ArrowRight size={15} aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

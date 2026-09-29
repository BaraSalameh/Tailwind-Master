"use client";

import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useState } from "react";

const challenges = [
  { name: "Touch Type", path: "touch-type" },
  { name: "Expanding Cards", path: "expanding-cards" },
  { name: "Progress Steps", path: "progress-steps" },
  {
    name: "Rotating Navigation Animation",
    path: "rotating-navigation-animation",
  },
  { name: "Hidden Search Widget", path: "hidden-search-widget" },
  { name: "Blurry Loading", path: "blurry-loading" },
  { name: "Scroll Animation", path: "scroll-animation" },
  { name: "Split Landing Page", path: "split-landing-page" },
  { name: "Form Input Wave", path: "form-input-wave" },
  { name: "Sound Board", path: "sound-board" },
  { name: "Dad Jokes", path: "dad-jokes" },
  { name: "Event Keycodes", path: "event-keycodes" },
  { name: "FAQ Collapse", path: "faq-collapse" },
  { name: "Random Choice Picker", path: "random-choice-picker" },
  { name: "Animated Navigation", path: "animated-navigation" },
  { name: "Incrementing Counter", path: "incrementing-counter" },
  { name: "Drink Water", path: "drink-water" },
  { name: "Movie App", path: "movie-app" },
  { name: "Background Slider", path: "background-slider" },
  { name: "Theme Clock", path: "theme-clock" },
  { name: "Button Ripple Effect", path: "button-ripple-effect" },
  { name: "Drag N Drop", path: "drag-n-drop" },
] as const;

export default function Home() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredChallenges = normalizedQuery
    ? challenges.filter((challenge) =>
        challenge.name.toLocaleLowerCase().includes(normalizedQuery),
      )
    : challenges;

  return (
    <main className="home-shell min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pt-16">
        <header className="relative border-b border-white/10 pb-10 sm:pb-14">
          <nav
            className="mb-14 flex items-center justify-between sm:mb-20"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0d0c]"
              aria-label="Tailwind Master home"
            >
              <span className="grid size-9 place-items-center rounded-full border border-lime-300/40 bg-lime-300/10 font-mono text-xs font-semibold text-lime-300">
                TM
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">
                Tailwind Master
              </span>
            </Link>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-zinc-400">
              {challenges.length} experiments
            </span>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-lime-300">
                <span className="h-px w-8 bg-lime-300/70" aria-hidden="true" />
                Front-end practice lab
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]">
                Small builds.
                <span className="block text-zinc-500">Sharper instincts.</span>
              </h1>
            </div>

            <p className="max-w-xl text-pretty text-base leading-7 text-zinc-400 lg:pb-1">
              A growing collection of focused interface experiments built to
              explore motion, interaction, and the details that make the web
              feel alive.
            </p>
          </div>
        </header>

        <section
          className="pt-10 sm:pt-12"
          aria-labelledby="challenge-heading"
        >
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-zinc-500">
                Selected work
              </p>
              <h2
                id="challenge-heading"
                className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
              >
                Explore the challenges
              </h2>
            </div>

            <div className="w-full sm:max-w-sm">
              <label htmlFor="challenge-search" className="sr-only">
                Search challenges by title
              </label>
              <div className="group relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-lime-300"
                  aria-hidden="true"
                />
                <input
                  id="challenge-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search challenges"
                  className="h-12 w-full rounded-full border border-white/10 bg-white/[0.045] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-white/20 focus:border-lime-300/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-lime-300/10"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                    aria-label="Clear search"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between border-y border-white/[0.07] py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
            <span>Challenge index</span>
            <span aria-live="polite" aria-atomic="true">
              {filteredChallenges.length}{" "}
              {filteredChallenges.length === 1 ? "result" : "results"}
            </span>
          </div>

          {filteredChallenges.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredChallenges.map((challenge) => {
                const challengeNumber = challenges.indexOf(challenge) + 1;

                return (
                  <Link
                    key={challenge.path}
                    href={`/challenges/${challenge.path}`}
                    className="challenge-card group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.065] focus-visible:-translate-y-1 focus-visible:border-lime-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0d0c] sm:min-h-48 sm:p-6"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-lime-300 group-focus-visible:text-lime-300">
                        {String(challengeNumber).padStart(2, "0")}
                      </span>
                      <span className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-500 transition duration-300 group-hover:rotate-45 group-hover:border-lime-300/30 group-hover:bg-lime-300/10 group-hover:text-lime-300 group-focus-visible:rotate-45 group-focus-visible:text-lime-300">
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>

                    <div>
                      <h3 className="max-w-xs text-xl font-medium leading-snug tracking-[-0.025em] text-zinc-100 transition-colors group-hover:text-white">
                        {challenge.name}
                      </h3>
                      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600 transition-colors group-hover:text-zinc-400">
                        Open experiment
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="grid min-h-72 place-items-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
              <div>
                <p className="text-lg font-medium text-zinc-200">
                  No challenges found
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                  Try a different title or clear your search to see the full
                  collection.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-lime-300/30 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                >
                  Clear search
                </button>
              </div>
            </div>
          )}
        </section>

        <footer className="mt-14 flex flex-col gap-2 border-t border-white/[0.07] pt-6 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <span>Built one challenge at a time</span>
          <span>Tailwind Master / {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}

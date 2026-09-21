import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import heroImage from "@/assets/milo-hero.jpg";
import logo from "@/assets/milo-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milo's Learning World — Learn. Play. Create. Explore." },
      {
        name: "description",
        content:
          "A fun learning adventure where curious kids discover new ideas, solve challenges, create amazing things and build skills every day.",
      },
      { property: "og:title", content: "Milo's Learning World" },
      {
        property: "og:description",
        content:
          "Maths, Science, Coding, Reading, Stories, Brain Games and Creative Studio — a magical learning world for kids.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  "Home",
  "Learn",
  "Games",
  "Videos",
  "Coding",
  "Stories",
  "Creative Studio",
  "Challenges",
  "Achievements",
];

const floaties = [
  { label: "123", color: "text-sunshine", pos: "-left-12 top-[12%]", anim: "animate-float-slow" },
  { label: "ABC", color: "text-coral", pos: "-left-14 top-[58%]", anim: "animate-float-fast" },
  { label: "</>", color: "text-royal", pos: "right-2 top-[6%]", anim: "animate-float-slow" },
  { label: "★", color: "text-tangerine", pos: "right-6 bottom-[8%]", anim: "animate-float-fast" },
  { label: "+ ×", color: "text-lavender", pos: "-left-10 bottom-[4%]", anim: "animate-float-slow" },
];


function Index() {
  return (
    <div className="min-h-screen bg-cream bg-hero-sky">
      <header className="px-4 pt-5 sm:px-8">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 rounded-full bg-card px-4 py-3 shadow-soft sm:px-6">
          <a href="/" className="flex shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="Milo mascot logo"
              width={816}
              height={816}
              loading="lazy"
              className="size-11 rounded-full"
            />
            <span className="font-display text-lg leading-[1.05] font-extrabold text-royal">
              Milo&apos;s
              <br />
              Learning World
            </span>
          </a>

          <ul className="mx-auto hidden items-center gap-1 xl:flex">
            {navItems.map((item, i) => (
              <li key={item}>
                <a
                  href="#"
                  className={`relative rounded-full px-3 py-2 text-sm font-bold transition-colors hover:bg-secondary ${
                    i === 0 ? "text-teal-brand" : "text-royal"
                  }`}
                >
                  {item}
                  {i === 0 && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-teal-brand" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            <button
              aria-label="Search"
              className="grid size-10 place-items-center rounded-full bg-secondary text-royal transition-colors hover:bg-muted"
            >
              <Search className="size-5" />
            </button>
            <button className="rounded-full border-2 border-sky-bright bg-card px-5 py-2 text-sm font-extrabold text-royal transition-colors hover:bg-secondary">
              Login
            </button>
            <button className="rounded-full bg-teal-brand px-5 py-2 text-sm font-extrabold text-primary-foreground shadow-pill transition-transform hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div className="relative">
          {floaties.map((f) => (
            <span
              key={f.label}
              aria-hidden
              className={`pointer-events-none absolute hidden font-display text-3xl font-extrabold opacity-70 lg:block ${f.color} ${f.pos} ${f.anim}`}
            >
              {f.label}
            </span>
          ))}

          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-extrabold text-royal shadow-soft">
            <span className="size-2 rounded-full bg-coral" />
            Maths · Science · Coding · Reading · Creativity
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-royal">Learn. Play.</span>
            <br />
            <span className="text-teal-brand">Create.</span>{" "}
            <span className="text-coral">Explore.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed font-semibold text-ink/80">
            A fun learning adventure where curious kids discover new ideas, solve challenges,
            create amazing things and build skills every day.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-teal-brand px-8 py-4 font-display text-lg font-extrabold text-primary-foreground shadow-pill transition-transform hover:-translate-y-0.5">
              Start Learning →
            </button>
            <button className="rounded-full border-2 border-sky-bright bg-card px-8 py-4 font-display text-lg font-extrabold text-royal shadow-soft transition-colors hover:bg-secondary">
              Explore Activities
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { label: "Brain Games", bg: "bg-sunshine" },
              { label: "Story Time", bg: "bg-lavender" },
              { label: "Science Lab", bg: "bg-mint" },
              { label: "Code Studio", bg: "bg-tangerine" },
            ].map((chip) => (
              <span
                key={chip.label}
                className={`rounded-full px-4 py-2 text-sm font-extrabold text-ink ${chip.bg}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-sky-bright/25 blur-2xl" aria-hidden />
          <img
            src={heroImage}
            alt="Milo the explorer waving with his puppy in a magical learning world"
            width={1280}
            height={1152}
            className="relative w-full rounded-4xl shadow-card"
          />
          <div className="absolute -bottom-5 left-6 rounded-3xl bg-card px-5 py-3 shadow-card">
            <p className="font-display text-xl font-extrabold text-royal">2,500+</p>
            <p className="text-xs font-bold text-muted-foreground">fun lessons &amp; games</p>
          </div>
        </div>
      </main>
    </div>
  );
}

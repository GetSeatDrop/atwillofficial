"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05060A] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(214,179,106,0.12),transparent_20%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_72%_72%,rgba(98,78,255,0.10),transparent_22%),linear-gradient(180deg,#04050a_0%,#090b12_46%,#04050a_100%)]" />
        <div className="absolute left-[-4rem] top-20 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl md:left-[-7rem] md:h-72 md:w-72" />
        <div className="absolute right-[-5rem] top-36 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl md:right-[-8rem] md:h-80 md:w-80" />
        <div className="absolute bottom-[-6rem] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-3xl md:h-64 md:w-64" />
      </div>

      <header className="sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <a
            href="#top"
            className="luxury-panel glow-gold rounded-full px-3 py-2 text-[10px] tracking-[0.3em] text-white/85 md:px-4 md:text-[11px]"
          >
            AT WILL OFFICIAL
          </a>

          <a
            href="https://instagram.com/AtWillOfficial"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/65 transition hover:text-white"
          >
            Instagram
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[88svh] items-center px-4 pb-12 pt-6 md:min-h-[92vh] md:px-8"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12"
        >
          <div className="max-w-4xl">
            <motion.p
              variants={fadeUp}
              className="luxury-gold mb-4 text-[11px] uppercase tracking-[0.36em] md:mb-6"
            >
              AI • .NET • AWS
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-balance max-w-[10ch] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[6.25rem]"
            >
              AI systems,
              <br />
              built for the
              <br />
              real world.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="luxury-text mt-6 max-w-xl text-base leading-7 md:mt-8 md:text-lg md:leading-8"
            >
              I design and implement practical AI with .NET and AWS —
              connecting intelligent systems to real workflows, real decisions,
              and real people.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10"
            >
              <a
  href="#work"
  className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-white bg-gradient-to-r from-[#c6a55b] to-[#a88945] border border-[#c6a55b]/40 shadow-[0_0_30px_rgba(198,165,91,0.25)] transition hover:brightness-110 active:scale-[0.98]"
>
  View Systems
</a>
              <a
                href="#about"
                className="luxury-panel inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                My perspective
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="luxury-panel-strong rounded-[1.75rem] p-5 md:rounded-[2rem] md:p-7">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.34em] text-white/40">
                  Positioning
                </span>
                <span className="h-2 w-2 rounded-full bg-amber-200/80" />
              </div>

              <div className="space-y-6 md:space-y-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                    Core
                  </p>
                  <p className="mt-2 text-xl font-medium text-white/92 md:text-2xl">
                    AI implementation expert
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                    Technical edge
                  </p>
                  <p className="mt-2 text-xl font-medium text-white/92 md:text-2xl">
                    .NET systems + AWS architecture
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                    Human layer
                  </p>
                  <p className="mt-2 text-xl font-medium text-white/92 md:text-2xl">
                    Music, art, culture, intention
                  </p>
                </div>
              </div>
            </div>

            <div className="luxury-panel mt-4 rounded-2xl px-4 py-3 text-sm text-white/58 md:absolute md:-bottom-6 md:-left-6 md:mt-0">
              Ethical systems. Practical outcomes. Real people.
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="work" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <p className="luxury-gold text-[11px] uppercase tracking-[0.34em]">
              What I do
            </p>
            <h2 className="text-balance mt-3 max-w-[12ch] text-3xl font-semibold tracking-[-0.05em] md:mt-4 md:text-5xl">
              Building technology that connects intelligence to execution.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="luxury-panel rounded-[1.5rem] p-5 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                AI integration
              </p>
              <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                Real-world AI systems
              </h3>
              <p className="luxury-text mt-4 text-sm leading-7 md:text-base">
                I focus on applied AI: systems that fit inside real workflows,
                support real users, and solve actual operational problems.
              </p>
            </div>

            <div className="luxury-panel rounded-[1.5rem] p-5 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                Engineering
              </p>
              <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                .NET and AWS delivery
              </h3>
              <p className="luxury-text mt-4 text-sm leading-7 md:text-base">
                My foundation is software engineering: backend systems, APIs,
                cloud architecture, and the discipline required to ship reliable
                solutions.
              </p>
            </div>

            <div className="luxury-panel rounded-[1.5rem] p-5 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                Strategy
              </p>
              <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                Human-centered implementation
              </h3>
              <p className="luxury-text mt-4 text-sm leading-7 md:text-base">
                The goal is not to replace people. It is to remove friction,
                clarify intent, and make humans more capable.
              </p>
            </div>

            <div className="luxury-panel rounded-[1.5rem] p-5 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                Ethics
              </p>
              <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                Useful, not performative
              </h3>
              <p className="luxury-text mt-4 text-sm leading-7 md:text-base">
                I care about systems that are transparent, grounded, and
                beneficial — not AI for hype, novelty, or empty theater.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="luxury-panel-strong rounded-[1.75rem] p-5 md:p-8">
            <p className="luxury-gold text-[11px] uppercase tracking-[0.34em]">
              Perspective
            </p>
            <h2 className="text-balance mt-4 max-w-[10ch] text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              More than technical.
            </h2>
          </div>

          <div className="luxury-panel rounded-[1.75rem] p-5 md:p-8">
            <p className="luxury-text text-sm leading-7 md:text-base md:leading-8">
              Outside of development, I’m shaped by music, art, and immersive
              culture. I’m a burner, a festival enthusiast, and someone who
              values experiences that bring people together in meaningful ways.
            </p>

            <p className="luxury-text mt-5 text-sm leading-7 md:text-base md:leading-8">
              That part of my life informs how I approach technology. The best
              systems do more than function — they create clarity, reduce
              friction, and strengthen human experience.
            </p>

            <p className="luxury-text mt-5 text-sm leading-7 md:text-base md:leading-8">
              I want to help shape a future where AI is not cold or extractive,
              but beneficial, ethical, and aligned with what people actually
              need.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] md:rounded-[2rem] luxury-panel-strong p-6 md:p-10">
          <p className="luxury-gold text-[11px] uppercase tracking-[0.34em]">
            Positioning statement
          </p>

          <p className="text-balance mt-5 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.04em] text-white/94 md:text-4xl md:leading-tight">
            I build systems that connect AI to the real world — where people,
            data, and decisions actually meet.
          </p>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 pt-10 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] md:rounded-[2rem] luxury-panel p-6 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="luxury-gold text-[11px] uppercase tracking-[0.34em]">
                Connect
              </p>
              <h2 className="text-balance mt-4 max-w-[11ch] text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                Follow the build.
              </h2>
            </div>

            <a
              href="https://instagram.com/AtWillOfficial"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-8 text-center text-sm text-white/35 md:px-8">
        © {new Date().getFullYear()} At will Official
      </footer>
    </main>
  );
}
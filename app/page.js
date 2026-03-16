 "use client";

import { PROFILE } from "./lib/profile";
import { Badge } from "./components/Badge";
import { Section } from "./components/Section";
import { motion } from "framer-motion";

function IconLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
    >
      <span className="text-neutral-500">{children}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

function Dot() {
  return <span className="inline-block size-1.5 rounded-full bg-neutral-300" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const p = PROFILE;

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700"
          >
            {p.name}
          </a>
          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:flex">
            <a className="hover:text-slate-900" href="#about">
              About
            </a>
            <a className="hover:text-slate-900" href="#skills">
              Skills
            </a>
            <a className="hover:text-slate-900" href="#experience">
              Experience
            </a>
            <a className="hover:text-slate-900" href="#projects">
              Projects
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Contact
            </a>
          </nav>
          {/* <a
            href={p.links?.resume || "#contact"}
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm ring-1 ring-sky-500/80 transition hover:bg-sky-700"
            target={p.links?.resume?.startsWith("http") ? "_blank" : undefined}
            rel={p.links?.resume?.startsWith("http") ? "noreferrer" : undefined}
          >
            Resume
          </a> */}
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_60%)]" />
          <div className="pointer-events-none absolute -left-24 -top-24 size-[420px] rounded-full bg-sky-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-24 size-[520px] rounded-full bg-sky-200/50 blur-3xl" />
          <div className="container-page relative py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {p.availability ? (
                      <span className="pill-soft px-3 py-1 bg-sky-600/10 text-sky-700 border-sky-200">
                        {p.availability}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-2 text-slate-600">
                      <Dot />
                      <span>{p.location}</span>
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    {p.role}
                  </h1>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                    {p.headline}
                  </p>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                    >
                      View projects
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
                    >
                      Contact
                    </motion.a>
                  </div>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {p.highlights?.map((h, idx) => (
                      <motion.div
                        key={h.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.45,
                          delay: 0.06 * idx,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -3 }}
                        className="card-glass p-5"
                      >
                        <p className="text-2xl font-semibold tracking-tight text-slate-900">
                          {h.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {h.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.12}>
                  <div className="card-glass p-6 sm:p-8">
                  <p className="text-sm font-medium text-slate-900">
                    Quick links
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <IconLink href={p.links?.github} label="GitHub">
                      {"</>"}
                    </IconLink>
                    <IconLink href={p.links?.linkedin} label="LinkedIn">
                      {"in"}
                    </IconLink>
                    <IconLink href={p.links?.twitter} label="X">
                      {"x"}
                    </IconLink>
                    <IconLink
                      href={p.links?.email ? `mailto:${p.links.email}` : null}
                      label="Email"
                    >
                      {"@"}
                    </IconLink>
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <p className="text-sm font-medium text-slate-900">
                      About
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {p.about}
                    </p>
                  </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="Overview" title="About me">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="card-glass p-6 sm:p-8">
                  <p className="text-slate-600 leading-7">{p.about}</p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.06}>
                <div className="card-glass p-6 sm:p-8">
                  <p className="text-sm font-medium text-slate-900">
                    Details
                  </p>
                  <dl className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Name</dt>
                      <dd className="font-medium text-slate-900">{p.name}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Role</dt>
                      <dd className="font-medium text-slate-900">{p.role}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Location</dt>
                      <dd className="font-medium text-slate-900">
                        {p.location}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Toolbox" title="Skills">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {p.skills?.map((s, idx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.35,
                    delay: 0.02 * idx,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="experience" eyebrow="Journey" title="Experience">
          <div className="space-y-4">
            {p.experience?.map((e) => (
              <Reveal key={`${e.company}-${e.title}-${e.start}`}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="card-glass p-6 sm:p-8"
                >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {e.company} • {e.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">
                    {e.start} — {e.end}
                  </p>
                </div>

                {e.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {e.tech?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Projects">
          <div className="grid gap-4 lg:grid-cols-2">
            {p.projects?.map((proj) => (
              <Reveal key={proj.name}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group card-glass p-6 hover:shadow-xl sm:p-8"
                >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {proj.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {proj.link ? (
                      <a
                        className="text-sm font-medium text-sky-600 hover:underline"
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                    ) : null}
                    {proj.repo ? (
                      <a
                        className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline"
                        href={proj.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>

                {proj.highlights?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {proj.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-slate-400" />
                        <span className="leading-6">{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {proj.tech?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Let’s talk" title="Contact">
          <Reveal>
            <div className="card-glass p-6 sm:p-8">
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                If you want to collaborate, hire me, or just say hi, the fastest
                way is email. I usually respond within 24–48 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={p.links?.email ? `mailto:${p.links.email}` : "#"}
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Email me
                </motion.a>
                {p.links?.linkedin ? (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={p.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
                  >
                    LinkedIn
                  </motion.a>
                ) : null}
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-10 backdrop-blur">
        <div className="container-page flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {p.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {p.links?.github ? (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900"
              >
                GitHub
              </a>
            ) : null}
            {p.links?.linkedin ? (
              <a
                href={p.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900"
              >
                LinkedIn
              </a>
            ) : null}
            <a className="text-slate-500 hover:text-slate-900" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

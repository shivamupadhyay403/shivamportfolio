export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-medium tracking-wide text-additional-blue">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {title}
            </h2>
          ) : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}


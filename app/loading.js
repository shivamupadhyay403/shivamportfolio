import { PROFILE } from "./lib/profile";

function initials(name) {
  return String(name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function Loading() {
  const badge = initials(PROFILE?.name) || "⧗";

  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-neutral-50">
      <div className="w-full max-w-md px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(220px_140px_at_20%_10%,black,transparent)]">
            <div className="absolute -inset-40 animate-[shine_1.4s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(3,85,165,0.00),rgba(3,85,165,0.25),rgba(237,64,11,0.18),rgba(3,85,165,0.00))]" />
          </div>

          <div className="relative flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-neutral-900 text-sm font-semibold tracking-tight text-white">
              {badge}
            </div>
            <div className="flex-1">
             
              <p className="mt-1 text-sm text-neutral-600">
                New Dev In Town…
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 animate-[dot_1s_ease-in-out_infinite] rounded-full bg-neutral-400 [animation-delay:-0.2s]" />
              <span className="size-2 animate-[dot_1s_ease-in-out_infinite] rounded-full bg-neutral-400 [animation-delay:-0.1s]" />
              <span className="size-2 animate-[dot_1s_ease-in-out_infinite] rounded-full bg-neutral-400" />
            </div>
          </div>

          <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-neutral-100">
            <div className="absolute inset-y-0 left-0 w-1/3 animate-[bar_1.1s_ease-in-out_infinite] rounded-full bg-additional-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}


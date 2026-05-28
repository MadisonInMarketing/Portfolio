import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-[12rem] font-light text-ink/5 leading-none select-none">
        404
      </span>
      <h1 className="font-display text-4xl font-light text-ink mt-4 mb-3">
        Page not found
      </h1>
      <p className="font-sans text-sm font-light text-ink-muted mb-8">
        Looks like this page took a creative direction nobody planned for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-ink text-cream font-sans text-[0.7rem] font-medium tracking-widest uppercase px-6 py-3 hover:bg-accent transition-colors duration-300"
      >
        ← Back Home
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
      <p
        className="text-stone-300 mb-4"
        style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
      >
        404
      </p>
      <h1
        className="font-display font-light text-stone-900 mb-8 text-center"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        Page not found
      </h1>
      <Link
        href="/"
        className="text-stone-500 hover:text-stone-900 transition-colors"
        style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
      >
        Return home
      </Link>
    </div>
  );
}

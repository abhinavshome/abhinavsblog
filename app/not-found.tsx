import Link from "next/link";

export default function NotFound() {
  return (
    <section className="stack">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you tried to open does not exist in this static export.</p>
      <Link className="button" href="/">
        Back home
      </Link>
    </section>
  );
}


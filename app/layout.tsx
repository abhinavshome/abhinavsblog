import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav's Blog",
  description: "A static personal blog built with Next.js."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell site-header-inner">
            <Link className="brand" href="/">
              ABHINAV BLOG
            </Link>
            <nav className="nav">
              <Link href="/">About</Link>
              <Link href="/blog/">Blog</Link>
              <a href="#writing">Writing</a>
            </nav>
            <div className="header-actions">
              <a className="search-pill" href="/blog/" aria-label="Browse posts">
                Search
              </a>
              <a className="newsletter-pill" href="/blog/">
                Latest Posts
              </a>
            </div>
          </div>
        </header>
        <div className="shell page-shell">
          <main>{children}</main>
          <footer className="site-footer">
            <p>Built with Next.js static export and deployed as plain static files.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

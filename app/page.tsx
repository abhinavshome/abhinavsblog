import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <section className="editorial-home">
      <section className="feature-panel">
        <p className="eyebrow">Personal essays, notes, and experiments</p>
        <h1>Writing that feels like a sharp magazine feature, published as a simple static site.</h1>
        <p className="hero-copy">
          I write in Markdown, generate static pages with Next.js, and publish the output
          anywhere I want.
        </p>
        <div className="actions">
          <Link className="button" href="/blog/">
            Explore the blog
          </Link>
        </div>
      </section>

      {featuredPost ? (
        <section className="featured-story">
          <div className="author-strip">
            <div className="author-avatar" aria-hidden="true">
              A
            </div>
            <p className="author-line">
              <span className="author-by">by</span> <strong>Abhinav</strong>
            </p>
            <span className="divider" aria-hidden="true" />
            <p className="story-date">
              <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
            </p>
          </div>
          <h2>
            <Link href={`/blog/${featuredPost.slug}/`}>{featuredPost.title}</Link>
          </h2>
          <p className="feature-summary">{featuredPost.description}</p>
          <Link className="text-link" href={`/blog/${featuredPost.slug}/`}>
            Read the featured post
          </Link>
        </section>
      ) : null}

      <section className="home-columns" id="writing">
        <div className="home-main">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent writing</p>
              <h2>Latest posts</h2>
            </div>
            <Link className="text-link" href="/blog/">
              View all posts
            </Link>
          </div>
          <div className="story-list">
            {recentPosts.map((post) => (
              <article className="story-card" key={post.slug}>
                <p className="story-date">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h3>
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="home-sidebar">
          <div className="sidebar-card">
            <p className="eyebrow">About this site</p>
            <h3>Static by design</h3>
            <p>
              This blog uses SSG and exports to the `out/` folder, so it stays fast,
              simple, and easy to host for free.
            </p>
          </div>
          <div className="sidebar-card">
            <p className="eyebrow">Publishing flow</p>
            <p>
              Write a Markdown file, commit it, push to GitHub, and let Pages deploy the
              new version.
            </p>
          </div>
        </aside>
      </section>
    </section>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long"
  }).format(new Date(date));
}

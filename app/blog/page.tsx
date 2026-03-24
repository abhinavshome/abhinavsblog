import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="blog-index">
      <div className="index-hero">
        <p className="eyebrow">Archive</p>
        <h1>Essays, notes, and long-form posts.</h1>
        <p className="hero-copy">
          A clean static archive with large headlines and room for the writing to lead.
        </p>
      </div>

      <div className="story-list">
        {posts.map((post) => (
          <article className="story-card story-card-large" key={post.slug}>
            <p className="story-date">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            <h2>
              <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long"
  }).format(new Date(date));
}

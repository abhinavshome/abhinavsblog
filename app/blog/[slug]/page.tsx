import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export const dynamicParams = false;

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="author-strip">
          <div className="author-avatar" aria-hidden="true">
            A
          </div>
          <p className="author-line">
            <span className="author-by">by</span> <strong>Abhinav</strong>
          </p>
          <span className="divider" aria-hidden="true" />
          <p className="story-date">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <div className="share-dots" aria-hidden="true">
            <span>X</span>
            <span>f</span>
            <span>in</span>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
      </header>

      <div className="article-layout">
        <div
          className="markdown article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <aside className="article-sidebar">
          <div className="sidebar-card sticky-card">
            <p className="eyebrow">About this post</p>
            <h2>Editorial notes</h2>
            <p>
              This layout keeps the focus on typography first, with a quiet sidebar for
              supporting context.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long"
  }).format(new Date(date));
}

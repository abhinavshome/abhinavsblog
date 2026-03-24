import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
});

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  html: string;
};

type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
};

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is Post => Boolean(post))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<PostFrontmatter>;

  if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
    throw new Error(`Missing frontmatter in post "${slug}".`);
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    content,
    html: markdown.render(content)
  };
}


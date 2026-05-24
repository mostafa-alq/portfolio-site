import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(raw);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const raw = fs.readFileSync(
    path.join(postsDir, `${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { slug, ...data, content: processed.toString() };
}

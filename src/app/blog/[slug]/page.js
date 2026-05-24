import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  return { title: `${post.title} — Mostafa Alqadi` };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="siteContainer">
      <article className={styles.post}>
        <Link href="/blog" className={styles.back}>
          ← Blog
        </Link>
        <span className={styles.date}>{post.date}</span>
        <h1 className={styles.title}>{post.title}</h1>
        {post.description && (
          <p className={styles.description}>{post.description}</p>
        )}
        <hr className={styles.rule} />
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

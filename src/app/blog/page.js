import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog — Mostafa Alqadi",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="siteContainer">
      <section className={styles.blogIndex}>
        <div className={styles.sectionRibbon}>Blog</div>
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet.</p>
        ) : (
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <span className={styles.date}>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className={styles.postTitle}>
                  {post.title}
                </Link>
                {post.description && (
                  <p className={styles.description}>{post.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import styles from "./LatestPost.module.css";

function LatestPost() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;
  const latest = posts[0];

  return (
    <section className={styles.section}>
      <h2 className="sectionTitle">Latest Blog</h2>
      <hr className="ornRule" />
      <div className={styles.card}>
        <span className={styles.date}>{latest.date}</span>
        <Link href={`/blog/${latest.slug}`} className={styles.title}>
          {latest.title}
        </Link>
        {latest.description && (
          <p className={styles.description}>{latest.description}</p>
        )}
        <Link href="/blog" className={styles.allLink}>
          All blogs →
        </Link>
      </div>
    </section>
  );
}

export default LatestPost;

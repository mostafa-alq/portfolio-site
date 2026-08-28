import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import styles from "./LatestPost.module.css";

function LatestPost() {
  const posts = getAllPosts().slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className="sectionTitle">Latest Blog</h2>
      <hr className="ornRule" />
      <div className={styles.list}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.item}>
            <div className={styles.itemHead}>
              <Link href={`/blog/${post.slug}`} className={styles.title}>
                {post.title}
              </Link>
              <span className={styles.date}>{post.date}</span>
            </div>
            {post.description && (
              <p className={styles.description}>{post.description}</p>
            )}
          </div>
        ))}
      </div>
      <Link href="/blog" className={styles.allLink}>
        All blogs →
      </Link>
    </section>
  );
}

export default LatestPost;

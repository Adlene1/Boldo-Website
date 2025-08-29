import React from "react";
import Image from "next/image";

export default function BlogCard({ post }) {
  if (!post) return null; // safety check

  const styles = {
    article: {
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      width: "300px",
      borderRadius: "12px",
      overflow: "hidden",
    },
    imageContainer: {
      position: "relative",
      height: "209px",
      backgroundColor: "#fff",
    },
    content: { paddingTop: "24px", display: "flex", flexDirection: "column", gap: "20px" },
    meta: { display: "flex", gap: "1rem", fontSize: "16px", color: "#777" },
    category: { fontWeight: "700", fontStyle: "bold", fontSize: "16px", color: "#0a2640" },
    title: { height: "99px", fontSize: "20px", fontWeight: "400", fontStyle: "regular", lineHeight: "32px", color: "#000" },
    author: { display: "flex", alignItems: "center", gap: "0.75rem", color: "#000", fontSize: "16px" },
    avatar: { borderRadius: "9999px" },
  };

  return (
    <article style={styles.article}>
      {/* Post Image */}
      <div style={styles.imageContainer}>
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.meta}>
          <span style={styles.category}>{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h2 style={styles.title}>{post.title}</h2>

        {/* Author */}
        <div style={styles.author}>
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={40}
            height={40}
            style={styles.avatar}
          />
          <span>{post.author.name}</span>
        </div>
      </div>
    </article>
  );
}

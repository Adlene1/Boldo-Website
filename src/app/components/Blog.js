import React from "react";
import BlogCard from "./BlogCard";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "Category",
      date: "November 22, 2021",
      title: "Pitch termsheet backing validation focus release.",
      author: { name: "Chandler Bing", avatar: "/Ellipse 10.png" },
      image: "/Rectangle 1270 (4).png",
    },
    {
      id: 2,
      category: "Category",
      date: "November 22, 2021",
      title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      author: { name: "Rachel Green", avatar: "/Ellipse 10 (1).png" },
      image: "/Rectangle 1270 (5).png",
    },
    {
      id: 3,
      category: "Category",
      date: "November 22, 2021",
      title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
      author: { name: "Monica Geller", avatar: "/Ellipse 10 (2).png" },
      image: "/Rectangle 1270 (6).png",
    },
  ];

  const styles = {
    section: { padding: "4rem 1rem", backgroundColor: "#fff" },
    grid: {
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      flexWrap: "wrap",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

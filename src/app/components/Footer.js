import React from "react";

export default function Footer() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      marginTop: "124px",
    },

    // Hero Section
    hero: {
      position: "relative",
      backgroundColor: "#0a2640",
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    shape: (w, h, bg, opacity, transform, borderRadius = "50%") => ({
      position: "absolute",
      width: w,
      height: h,
      backgroundColor: bg,
      borderRadius,
      opacity,
      transform,
    }),
    heroContent: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "0 24px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    heroTitle: {
      color: "#ffffff",
      fontSize: "2.5rem",
      fontWeight: "400",
      marginBottom: "48px",
      lineHeight: "1.3",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "600px",
      margin: "0 auto",
    },
    formRow: {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      width: "100%",
    },
    input: {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: "none",
      borderRadius: "9999px",
      padding: "12px 24px",
      height: "56px",
      flex: 1,
      fontSize: "16px",
      outline: "none",
    },
    button: {
      backgroundColor: "#65e4a3",
      color: "#000000",
      border: "none",
      borderRadius: "9999px",
      padding: "12px 32px",
      height: "56px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },

    // Footer Section
    footer: {
      backgroundColor: "#ffffff",
      padding: "64px 24px",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "48px",
    },
    brand: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    brandTitle: {
      color: "#0a2640",
      fontSize: "24px",
      fontWeight: "700",
    },
    brandText: {
      color: "#777777",
      fontSize: "16px",
      lineHeight: "1.6",
    },
    brandRights: {
      color: "#777777",
      fontSize: "14px",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
    columnTitle: {
      color: "#000000",
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "24px",
    },
    linkList: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    link: {
      color: "#777777",
      fontSize: "16px",
      textDecoration: "none",
    },
    linkHover: {
      color: "#0a2640",
    },
    hiringBadge: {
      backgroundColor: "#65e4a3",
      color: "#000000",
      padding: "4px 12px",
      borderRadius: "9999px",
      fontSize: "14px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        {/* Background geometric shapes */}
        <div style={styles.shape("384px", "384px", "#1c3d5b", 0.2, "translate(128px, -128px)")}></div>
        <div style={styles.shape("320px", "320px", "#1c3d5b", 0.15, "translate(-96px, 96px)")}></div>
        <div style={styles.shape("256px", "256px", "#1c3d5b", 0.1, "rotate(45deg)", "0%")}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            An enterprise template to ramp up your company website
          </h1>

          <div style={styles.form}>
            <div style={styles.formRow}>
              <input
                type="email"
                placeholder="Your email address"
                style={styles.input}
              />
              <button style={styles.button}>Start now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Boldo Brand Column */}
          <div style={styles.brand}>
            <h2 style={styles.brandTitle}>Boldo</h2>
            <p style={styles.brandText}>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p style={styles.brandRights}>All rights reserved.</p>
          </div>

          {/* Landings Column */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Landings</h3>
            <div style={styles.linkList}>
              <a href="#" style={styles.link}>Home</a>
              <a href="#" style={styles.link}>Products</a>
              <a href="#" style={styles.link}>Services</a>
            </div>
          </div>

          {/* Company Column */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Company</h3>
            <div style={styles.linkList}>
              <a href="#" style={styles.link}>Home</a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <a href="#" style={styles.link}>Careers</a>
                <span style={styles.hiringBadge}>Hiring!</span>
              </div>
              <a href="#" style={styles.link}>Services</a>
            </div>
          </div>

          {/* Resources Column */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Resources</h3>
            <div style={styles.linkList}>
              <a href="#" style={styles.link}>Blog</a>
              <a href="#" style={styles.link}>Products</a>
              <a href="#" style={styles.link}>Services</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function FirstPage() {
  const buttonStyle = {
    backgroundColor: "white",
    color: "#0a2640",
    borderRadius: "9999px",
    padding: "0.75rem 1.5rem",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a2640", color: "white", fontFamily: "sans-serif" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/Logo Shape (1).png" alt="Logo" width={26} height={33} />
          <span style={{ fontSize: "2rem", fontWeight: "700" }}>Boldo</span>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Product</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
          <button style={buttonStyle}>Log In</button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: "2rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "normal", lineHeight: "1.2" }}>
              Save time by building <br /> fast with Boldo Template
            </h1>
            <p
              style={{
                color: "#f1f1f1",
                fontSize: "1rem",
                lineHeight: "1.5",
                maxWidth: "28rem",
                margin: "1.5rem 0",
              }}
            >
              Funding handshake buyer business-to-business metrics iPad partnership.
              <br />First mover advantage innovator success deployment non-disclosure.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                style={{
                  backgroundColor: "#65e4a3",
                  color: "#0a2640",
                  borderRadius: "9999px",
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Buy template
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "9999px",
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  border: "1px solid white",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image
              src="/Group 256.png"
              alt="Top"
              width={500}
              height={230}
              style={{ width: "100%", height: "auto", borderRadius: "0.5rem", marginBottom: "1rem" }}
            />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", width: "100%" }}>
              <Image
                src="/Rectangle 1289.png"
                alt="Bottom Left"
                width={192}
                height={165}
                style={{ flex: "1 1 45%", maxWidth: "48%", height: "auto", borderRadius: "0.5rem" }}
              />
              <Image
                src="/Group 264.png"
                alt="Bottom Right"
                width={262}
                height={165}
                style={{ flex: "1 1 45%", maxWidth: "48%", height: "auto", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <LogoTape />
      </main>

      {/* Small screen responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          main > div {
            grid-template-columns: 1fr !important;
          }
          header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

function LogoTape() {
  const styles = {
    tapeWrapper: {
      position: "relative",
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
      padding: "2rem 1rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    tape: {
      display: "inline-flex",
      alignItems: "center",
      animation: "scrollTape 20s linear infinite",
      width: "max-content",
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginRight: "2rem",
    },
  };

  const logos = ["/Logo Wall.png"];
  const tapeItems = Array(4).fill(logos).flat();

  return (
    <div style={styles.tapeWrapper}>
      <div style={styles.tape}>
        {tapeItems.map((logo, idx) => (
          <span key={idx} style={styles.item}>
            <Image src={logo} alt={`logo-${idx}`} width={1173} height={93} style={{ width: "100%", height: "auto", maxHeight: "70px", objectFit: "contain" }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scrollTape {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

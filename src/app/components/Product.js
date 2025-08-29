"use client";

import React from "react";
import Image from "next/image";

export default function Product() {
  const styles = {
    container: {
      width: "1137px",
      height: "610px",
      backgroundColor: "#ffffff",
      marginTop: "135px",
      marginLeft: "210px",
    },
    flexRow: {
      display: "flex",
      flexDirection: "column",
    },
    left: {
      width: "494px",
      height: "610px",
      position: "relative",
    },
    leftInner: {
      position: "relative",
      top: "-300px",
      right: "-186px",
      display: "flex",
      width: "251px",
      height: "388px",
    },
    right: {
      width: "493px",
      height: "479px",
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      position: "relative",
      top: "-550px",
      left: "600px",
    },
    rightInner: {
      maxWidth: "40rem",
    },
    heading: {
      fontSize: "2.25rem",
      fontWeight: "400",
      color: "#000000",
      lineHeight: "1.2",
      marginBottom: "3rem",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      marginBottom: "3rem",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    iconBox: {
      width: "2rem",
      height: "2rem",
      flexShrink: 0,
    },
    listText: {
      fontSize: "1.125rem",
      color: "#000000",
    },
    button: {
      backgroundColor: "#0a2640",
      color: "#ffffff",
      padding: "1rem 3rem",
      borderRadius: "9999px",
      fontSize: "1.125rem",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "opacity 0.2s ease",
    },
  };

  return (
    <div style={styles.container} className="responsive-container">
      <div style={styles.flexRow} className="responsive-flex">
        {/* Left side */}
        <div style={styles.left} className="responsive-left">
          <Image
            src="/Rectangle 1270 (3).png"
            alt="Left Image"
            width={494}
            height={506}
            className="responsive-image"
          />
          <div style={styles.leftInner} className="responsive-left-inner">
            <Image
              src="/Group 209.png"
              alt="Inner Image"
              width={251}
              height={388}
              className="responsive-image"
            />
          </div>
        </div>

        {/* Right side */}
        <div style={styles.right} className="responsive-right">
          <div style={styles.rightInner}>
            <h1 style={styles.heading}>
              We connect our customers with the best, and help them keep up—and stay open.
            </h1>

            <div style={styles.list}>
              <div style={styles.listItem}>
                <div style={styles.iconBox}>
                  <Image src="/Group 210.png" alt="Icon 1" width={36} height={36} />
                </div>
                <span style={styles.listText}>
                  We connect our customers with the best.
                </span>
              </div>

              <div style={styles.listItem}>
                <div style={styles.iconBox}>
                  <Image src="/Group 210.png" alt="Icon 2" width={36} height={36} />
                </div>
                <span style={styles.listText}>
                  Advisor success customer launch party.
                </span>
              </div>

              <div style={styles.listItem}>
                <div style={styles.iconBox}>
                  <Image src="/Group 210.png" alt="Icon 3" width={36} height={36} />
                </div>
                <span style={styles.listText}>
                  Business-to-consumer long tail.
                </span>
              </div>
            </div>

            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Start now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .responsive-container {
            width: 100% !important;
            margin: 2rem auto !important;
            height: auto !important;
            padding: 1rem;
          }
          .responsive-flex {
            flex-direction: column !important;
            align-items: center;
          }
          .responsive-left,
          .responsive-right {
            width: 100% !important;
            height: auto !important;
            top: 0 !important;
            left: 0 !important;
            position: relative !important;
          }
          .responsive-left-inner {
            position: relative !important;
            top: 0 !important;
            right: 0 !important;
            margin-top: 1rem;
            width: 60% !important;
          }
          .responsive-image {
            max-width: 100%;
            height: auto;
          }
          .responsive-right {
            padding: 1rem !important;
          }
          .responsive-right h1 {
            font-size: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

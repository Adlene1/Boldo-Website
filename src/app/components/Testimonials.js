"use client";
import React, { useState } from "react";

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState(1);

  const testimonials = [
    {
      quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
      author: "Albus Dumbledore",
      role: "Manager @ Howarts",
      avatar: "/Ellipse 4.png",
    },
    {
      quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      role: "Manager @ Slytherin",
      avatar: "/Ellipse 4 (1).png",
    },
    {
      quote: "Release facebook responsive web design business model canvas seed money monetization.",
      author: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      avatar: "/Ellipse 4 (2).png",
    },
  ];

  const handlePrevious = () => {
    setActiveCard((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Styles
  const sectionStyle = {
    backgroundColor: "#0a2640",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "120px",
    padding: "96px 156px",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "72px",
    flexWrap: "wrap",
  };

  const headingStyle = {
    color: "white",
    fontSize: "48px",
    fontWeight: "400",
    fontStyle: "regular",
    lineHeight: "72px",
    letterSpacing: "0",
    maxWidth: "40rem",
  };

  const buttonWrapperStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  };

  const navButtonStyle = {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    color: "#0a2640",
    transition: "background-color 0.2s ease",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  };

  const cardBaseStyle = {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    height: "358px",
    borderRadius: "12px",
    backgroundColor: "white",
    padding: "40px",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerRowStyle}>
          <h1 style={headingStyle}>
            An enterprise template to ramp up your company website
          </h1>

          <div style={buttonWrapperStyle}>
            <button
              style={navButtonStyle}
              onClick={handlePrevious}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f3f4f6")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              ‹
            </button>
            <button
              style={navButtonStyle}
              onClick={handleNext}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f3f4f6")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              ›
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div style={gridStyle}>
          {testimonials.map((testimonial, index) => {
            const isActive = activeCard === index;
            const cardStyle = {
              ...cardBaseStyle,
              height: isActive ? "394px" : "358px",
              transform: isActive ? "scale(1.05)" : "scale(1)",
              boxShadow: isActive
                ? "0 8px 25px rgba(0,0,0,0.2)"
                : "0 4px 10px rgba(0,0,0,0.1)",
              border: isActive ? "2px solid rgba(255,255,255,0.2)" : "none",
            };

            return (
              <div key={index} style={cardStyle}>
                <blockquote
                  style={{
                    width: "270px",
                    height: "144px",
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "400",
                    fontStyle: "regular",
                    lineHeight: "36px",
                    marginBottom: "40px",
                  }}
                >
                  {testimonial.quote}
                </blockquote>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      backgroundColor: "#e5e7eb",
                      border: "2px solid #d1d5db",
                    }}
                  >
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  </div>
                  <div>
                    <div style={{ fontWeight: "700", color: "#111827" }}>
                      {testimonial.author}
                    </div>
                    <div style={{ color: "#4b5563", fontSize: "0.875rem" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

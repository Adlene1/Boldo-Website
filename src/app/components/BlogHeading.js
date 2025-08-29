import React from "react";

export default function BlogHeading() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "124px",
    marginBottom: "79px",
    width: "auto",
    height: "auto",
    textAlign: "center",
  };

  const subTextStyle = {
    fontSize: "20px",
    lineHeight: "32px",
    color: "#777777",
  };

  const headingStyle = {
    fontWeight: "400",
    fontSize: "48px",
    lineHeight: "72px",
    color: "#000",
    maxWidth: "842px",
    margin: "0.5rem 0 50px 0",
  };

  return (
    <div style={containerStyle}>
      <p style={subTextStyle}>Our Blog</p>
      <h2 style={headingStyle}>Value proposition accelerator product management venture</h2>
    </div>
  );
}

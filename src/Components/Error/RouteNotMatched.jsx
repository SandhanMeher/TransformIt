import React from "react";

export default function RouteNotMatched() {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      backgroundColor: "#f8f9fa", // Added background color
      padding: "20px", // Added padding for better spacing
      borderRadius: "8px", // Added border radius for rounded corners
    },
    heading: {
      fontSize: "2em",
      color: "#ff0000",
    },
    paragraph: {
      fontSize: "1.2em",
      color: "#333",
    },
    link: {
      fontSize: "1em",
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={styles.link}>Go to Home</a>
    </div>
  );
}

import React, { useState, useEffect } from "react";

function App() {
  // Load saved theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme and save to localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        width: "100vw",           // full screen width
        height: "100vh",          // full screen height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
        color: theme === "light" ? "#222" : "#fff",
        transition: "all 0.3s ease",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "30px" }}>
        {theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </h1>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#333" : "#f1f1f1",
          color: theme === "light" ? "#fff" : "#000",
          padding: "15px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light 🌞"}
      </button>
    </div>
  );
}

export default App;

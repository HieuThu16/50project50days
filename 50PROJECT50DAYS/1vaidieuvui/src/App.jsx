// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import ProgressSteps from "./ProgressSteps";

function App() {
  const [theme, setTheme] = useState("light");

  // Kiểm tra chế độ màu mặc định của hệ thống
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (theme === "system") {
      document.body.className = prefersDark ? "dark-theme" : "light-theme";
    }

    // Lắng nghe sự thay đổi chế độ hệ thống
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (theme === "system") {
        document.body.className = e.matches ? "dark-theme" : "light-theme";
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Thay đổi theme
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.body.className = "dark-theme";
    } else if (newTheme === "light") {
      document.body.className = "light-theme";
    } else if (newTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.body.className = prefersDark ? "dark-theme" : "light-theme";
    }
  };

  return (
    <div className="App">
      <div className="theme-switcher">
        <button
          className={`theme-btn ${theme === "light" ? "active" : ""}`}
          onClick={() => changeTheme("light")}
        >
          Chế độ sáng
        </button>
        <button
          className={`theme-btn ${theme === "dark" ? "active" : ""}`}
          onClick={() => changeTheme("dark")}
        >
          Chế độ tối
        </button>
        <button
          className={`theme-btn ${theme === "system" ? "active" : ""}`}
          onClick={() => changeTheme("system")}
        >
          Theo hệ thống
        </button>
      </div>
      <h1>Progress Steps</h1>
      <ProgressSteps totalSteps={4} />
    </div>
  );
}

export default App;

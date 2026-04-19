import { useState } from "react";

export default function Navbar({ mode, setMode }) {
  const nextMode = () => {
    if (mode === "cyber") setMode("dark");
    else if (mode === "dark") setMode("light");
    else setMode("cyber");
  };

  const modeText =
    mode === "cyber"
      ? "Cyber Mode"
      : mode === "dark"
      ? "Dark Mode"
      : "Light Mode";

  return (
    <nav className="navbar">
      <div className="logo">AK</div>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#tech">Tech</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={nextMode}>
        {modeText}
      </button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 82%;
          z-index: 999;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 18px 26px;
          border-radius: 24px;

          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .logo {
          font-weight: 800;
          font-size: 1.4rem;
          color: white;
        }

        .links {
          display: flex;
          gap: 34px;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 15px;
        }

        button {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}
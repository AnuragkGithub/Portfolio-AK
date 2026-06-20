export default function Navbar({ mode, setMode }) {
  const modes = [
    { id: "cyber", label: "Cyber" },
    { id: "dark", label: "Dark" },
    { id: "light", label: "Light" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">AK</div>

      <div className="links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Credentials</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="right-section">
        {/* Theme Switcher Pill */}
        <div className="theme-toggle">
          {modes.map((m) => (
            <button
              key={m.id}
              className={`theme-btn ${mode === m.id ? "active" : ""}`}
              onClick={() => setMode(m.id)}
              aria-label={`Switch to ${m.label} theme`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resumeBtn"
        >
          Resume
        </a>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 1200px;
          z-index: 9999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: var(--nav-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          transition: border-color 0.4s, background-color 0.4s;
        }

        .logo {
          color: var(--text-primary);
          font-family: var(--font-plus-jakarta-sans), sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .links {
          display: flex;
          gap: 28px;
        }

        .links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .links a:hover {
          color: var(--text-primary);
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Theme Toggle Pill */
        .theme-toggle {
          display: flex;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          padding: 3px;
          border-radius: 99px;
        }

        .theme-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 99px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-btn.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .resumeBtn {
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 8px 18px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
        }

        .resumeBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--accent-glow);
        }

        @media (max-width: 900px) {
          .links {
            display: none;
          }
          
          .navbar {
            padding: 10px 16px;
            width: 95%;
          }

          .theme-btn {
            padding: 4px 8px;
            font-size: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
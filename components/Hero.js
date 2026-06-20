export default function Hero() {
  const name = "Anurag Karmakar";

  return (
    <>
      <section id="home" className="hero">
        {/* Sleek background glow effect */}
        <div className="glow-container">
          <div className="glow-sphere sphere-1" />
          <div className="glow-sphere sphere-2" />
        </div>

        <div className="heroContent">
          <div className="badge">
            <span className="badge-dot"></span>
            SOFTWARE ENGINEER • SERVICENOW • FULL STACK
          </div>

          <h1 className="name-container">
            {name.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span key={index} className="space">
                    &nbsp;
                  </span>
                );
              }
              return (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {char}
                </span>
              );
            })}
          </h1>

          <div className="recruiter-points">
            <div className="bullet-point">
              <span className="bullet-icon">🚀</span>
              <p><strong>ServiceNow Certified System Administrator (CSA)</strong> with hands-on enterprise workflow engineering and process optimization experience.</p>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">💡</span>
              <p><strong>Full-Stack & GenAI Architect:</strong> Designed FastAPI + Gemini AI SaaS engines and React + Django REST ingestion pipelines.</p>
            </div>
            <div className="bullet-point">
              <span className="bullet-icon">📈</span>
              <p><strong>Problem Solver:</strong> Solved 400+ Data Structures & Algorithms challenges on LeetCode; published 2 IoT & cloud research papers.</p>
            </div>
          </div>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 140px 8% 80px 8%;
          background-color: var(--bg-primary);
          transition: background-color 0.5s;
        }

        .glow-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }

        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: pulseGlow 8s infinite alternate ease-in-out;
        }

        .sphere-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-primary);
          top: 15%;
          left: 10%;
        }

        .sphere-2 {
          width: 350px;
          height: 350px;
          background: var(--accent-secondary, var(--accent-primary));
          bottom: 15%;
          right: 10%;
          animation-delay: -3s;
        }

        .heroContent {
          max-width: 950px;
          text-align: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--tag-bg);
          color: var(--tag-text);
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          border-radius: 99px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 28px;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-secondary, var(--accent-primary));
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-secondary, var(--accent-primary));
        }

        /* Single line name with shifting RGB gradient */
        .name-container {
          font-family: var(--font-plus-jakarta-sans), sans-serif;
          font-size: clamp(3rem, 7.5vw, 6.8rem);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 40px 0;
          letter-spacing: -3px;
          background: linear-gradient(
            45deg,
            #8b5cf6, /* Violet */
            #06b6d4, /* Cyan */
            #ec4899, /* Pink */
            #3b82f6, /* Blue */
            #8b5cf6
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rgbShift 8s linear infinite;
          display: inline-flex;
          flex-wrap: nowrap; /* keep name on a single line */
          white-space: nowrap; /* prevent wrapping */
          justify-content: center;
          cursor: default;
        }

        @keyframes rgbShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Jumping animation delay triggers */
        .letter {
          display: inline-block;
          animation: waveBounce 3.5s ease-in-out infinite;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .letter:hover {
          animation-play-state: paused;
          transform: translateY(-20px) scale(1.25) rotate(5deg) !important;
          text-shadow: 0 10px 20px var(--accent-glow);
        }

        .space {
          display: inline-block;
        }

        @keyframes waveBounce {
          0%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(0);
          }
        }

        /* Recruiter Bullet List Layout */
        .recruiter-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 720px;
          text-align: left;
          background: var(--bg-card);
          padding: 24px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          margin-bottom: 40px;
        }

        .bullet-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .bullet-icon {
          font-size: 1.2rem;
          line-height: 1.4;
        }

        .bullet-point p {
          font-size: 1.02rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        .bullet-point p strong {
          color: var(--text-primary);
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px var(--accent-glow);
          border: 1px solid transparent;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px var(--accent-glow);
        }

        .secondary-btn {
          background: transparent;
          color: var(--text-primary);
          padding: 16px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          border: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .secondary-btn:hover {
          transform: translateY(-3px);
          background: var(--bg-card);
          border-color: var(--border-hover);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 5% 60px 5%;
          }

          .name-container {
            font-size: 2.8rem;
            letter-spacing: -1.5px;
            margin-bottom: 24px;
          }

          .recruiter-points {
            padding: 18px;
            margin-bottom: 30px;
          }

          .bullet-point p {
            font-size: 0.92rem;
          }

          .primary-btn, .secondary-btn {
            padding: 14px 28px;
            font-size: 14px;
            width: 100%;
          }

          .buttons {
            gap: 12px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
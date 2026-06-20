import { useState } from "react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      {/* Background decoration glows */}
      <div className="glow-container">
        <div className="glow-sphere" />
      </div>

      <div className="container">
        <p className="tag">CONTACT</p>
        
        <h2>
          Let’s Build <br />
          <span className="gradient-text">Something Exceptional</span>
        </h2>

        <p className="description">
          Whether you need a ServiceNow workflow overhaul, a robust full-stack SaaS platform,
          or an automated validation architecture, let's connect and design the solution.
        </p>

        <div className="contact-actions">
          {/* Email CTA */}
          <div className="action-card glass-panel">
            <span className="label">EMAIL</span>
            <h3>anuragkar2503@gmail.com</h3>
            <div className="btn-row">
              <a href="mailto:anuragkar2503@gmail.com" className="action-btn">
                Send Email
              </a>
              <button 
                onClick={() => copyToClipboard("anuragkar2503@gmail.com", "email")}
                className="action-btn secondary"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Phone CTA */}
          <div className="action-card glass-panel">
            <span className="label">PHONE</span>
            <h3>+91 8073497325</h3>
            <div className="btn-row">
              <a href="tel:+918073497325" className="action-btn">
                Call Now
              </a>
              <button 
                onClick={() => copyToClipboard("+918073497325", "phone")}
                className="action-btn secondary"
              >
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer social links */}
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
            LinkedIn
          </a>
          <span className="separator">•</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
            GitHub
          </a>
          <span className="separator">•</span>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="social-link">
            Resume
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Anurag Karmakar. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .contact {
          background: var(--bg-primary);
          transition: background-color 0.5s;
          position: relative;
          overflow: hidden;
          text-align: center;
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
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: var(--accent-glow);
          filter: blur(140px);
          bottom: -200px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.5;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tag {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--tag-text);
          background: var(--tag-bg);
          border: 1px solid var(--border-color);
          width: fit-content;
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
        }

        h2 {
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 28px;
          font-weight: 800;
        }

        .description {
          font-size: 1.15rem;
          line-height: 1.7;
          max-width: 700px;
          color: var(--text-secondary);
          margin-bottom: 56px;
        }

        .contact-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          width: 100%;
          max-width: 800px;
          margin-bottom: 70px;
        }

        .action-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .action-card .label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-secondary, var(--text-secondary));
          margin-bottom: 12px;
        }

        .action-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-primary);
          word-break: break-all;
        }

        .btn-row {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .action-btn {
          flex: 1;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          background: var(--text-primary);
          color: var(--bg-primary);
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px var(--accent-glow);
        }

        .action-btn.secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .action-btn.secondary:hover {
          background: var(--bg-primary);
          border-color: var(--border-hover);
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .social-link {
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
        }

        .social-link:hover {
          color: var(--accent-primary);
        }

        .separator {
          color: var(--text-secondary);
          opacity: 0.5;
        }

        .copyright {
          font-size: 12px;
          color: var(--text-secondary);
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .contact-actions {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .action-card {
            padding: 24px;
          }

          .action-card h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
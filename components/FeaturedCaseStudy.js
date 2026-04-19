// components/FeaturedCaseStudy.js

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FeaturedCaseStudy() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="caseStudy" ref={sectionRef}>
      <div className="label">FLAGSHIP PROJECT</div>

      <div className="grid">
        {/* LEFT SIDE */}
        <div className="left" ref={contentRef}>
          <h2>PPAP Request Tracker</h2>

          <p className="subtitle">
            Enterprise workflow automation platform built on ServiceNow
          </p>

          <div className="points">
            <div className="point">
              <span>Problem</span>
              <p>
                Manual approval cycles, repeated follow-ups, and poor request
                visibility across teams created delays in business operations.
              </p>
            </div>

            <div className="point">
              <span>Solution</span>
              <p>
                Designed and implemented a complete PPAP Request Tracker system
                using ServiceNow with workflows, notifications, approvals, UI
                policies, and role-based access.
              </p>
            </div>

            <div className="point">
              <span>Impact</span>
              <p>
                Reduced manual work, improved approval transparency, automated
                reminders, and streamlined enterprise-level request handling.
              </p>
            </div>

            <div className="point">
              <span>Tech Stack</span>
              <p>
                ServiceNow, Flow Designer, Business Rules, UI Policies,
                Notifications, Client Scripts, Update Sets
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right" ref={imageRef}>
          <div className="imageCard">
            <div className="imageOverlay" />

            <div className="mockScreen">
              <div className="mockTop" />
              <div className="mockContent">
                <div className="line large" />
                <div className="line medium" />
                <div className="line small" />
                <div className="line medium" />
                <div className="line large" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .caseStudy {
          min-height: 100vh;
          background: #000;
          color: white;
          padding: 120px 80px;
          position: relative;
          overflow: hidden;
        }

        .label {
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .left h2 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 0.95;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.75;
          margin-bottom: 50px;
          max-width: 700px;
          line-height: 1.7;
        }

        .points {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .point span {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.6;
          margin-bottom: 10px;
        }

        .point p {
          font-size: 1rem;
          line-height: 1.8;
          opacity: 0.9;
        }

        .right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .imageCard {
          width: 100%;
          max-width: 650px;
          height: 700px;
          border-radius: 40px;
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          overflow: hidden;
          box-shadow:
            0 20px 80px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .imageOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at top right,
              rgba(255,255,255,0.08),
              transparent 40%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(255,255,255,0.04),
              transparent 40%
            );
        }

        .mockScreen {
          position: absolute;
          inset: 40px;
          border-radius: 28px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 30px;
        }

        .mockTop {
          height: 60px;
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 30px;
        }

        .mockContent {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .line {
          height: 18px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
        }

        .large {
          width: 90%;
        }

        .medium {
          width: 70%;
        }

        .small {
          width: 45%;
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .caseStudy {
            padding: 80px 30px;
          }

          .imageCard {
            height: 500px;
          }
        }
      `}</style>
    </section>
  );
}
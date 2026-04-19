// components/Experience.js

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".expCard");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section id="experience" className="experience" ref={sectionRef}>
        {/* LEFT SIDE */}
        <div className="leftPanel">
          <p className="tag">EXPERIENCE</p>

          <h2>
            Enterprise Systems.
            <br />
            Real Production
            <br />
            Impact.
          </h2>

          <p className="desc">
            Building scalable workflows, ServiceNow automation,
            CI/CD operations, and premium enterprise platforms
            at STMicroelectronics.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="rightPanel">
          <div className="expCard mainCard">
            <span>STMICROELECTRONICS</span>
            <h3>Project Trainee — DTIT</h3>
            <p>
              Digital Transformation & Information Technology
            </p>

            <div className="line" />

            <ul>
              <li>ServiceNow Development</li>
              <li>PPAP Request Tracker</li>
              <li>CI/CD Automation</li>
              <li>QA Update Set Deployment</li>
              <li>Workflow Engineering</li>
            </ul>
          </div>

          <div className="expCard miniCard">
            <span>SERVICENOW</span>
            <h4>Enterprise Workflow Automation</h4>
          </div>

          <div className="expCard miniCard">
            <span>CI/CD</span>
            <h4>Deployment & QA Migration</h4>
          </div>

          <div className="expCard miniCard">
            <span>SYSTEM DESIGN</span>
            <h4>Scalable Internal Platforms</h4>
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience {
          min-height: 100vh;
          background: #040404;
          color: white;
          padding: 140px 7%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        .tag {
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.6;
          margin-bottom: 24px;
        }

        .leftPanel h2 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 28px;
        }

        .desc {
          font-size: 1rem;
          line-height: 1.9;
          opacity: 0.75;
          max-width: 500px;
        }

        .rightPanel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .expCard {
          border-radius: 28px;
          padding: 36px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.015)
            );

          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(18px);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.4);
        }

        .mainCard {
          min-height: 420px;
        }

        .expCard span {
          font-size: 12px;
          letter-spacing: 3px;
          opacity: 0.6;
          display: block;
          margin-bottom: 18px;
        }

        .mainCard h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .mainCard p {
          opacity: 0.75;
          margin-bottom: 28px;
        }

        .line {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 24px;
        }

        ul {
          padding-left: 18px;
          line-height: 2;
          opacity: 0.85;
        }

        .miniCard h4 {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .miniCard:hover {
          transform: translateY(-6px);
          transition: 0.4s ease;
        }

        @media (max-width: 1000px) {
          .experience {
            grid-template-columns: 1fr;
          }

          .mainCard {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
}
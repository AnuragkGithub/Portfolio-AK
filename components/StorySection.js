// components/StorySection.js

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".previewCard");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="projects" className="storySection" ref={sectionRef}>
        {/* LEFT TEXT */}
        <div className="leftSide">
          <p className="tag">FEATURED WORK</p>

          <h2>
            Building premium
            <br />
            systems for real
            <br />
            business impact.
          </h2>

          <p className="desc">
            Premium workflow systems, enterprise automation,
            scalable full stack applications, and digital
            product engineering.
          </p>
        </div>

        {/* CENTER BIG CARD */}
        <div className="centerWrap">
          <div className="mainCard">
            <span className="label">STMICROELECTRONICS</span>

            <h3>Project Trainee</h3>

            <p>
              Digital Transformation & Information Technology
            </p>

            <div className="bottomLine">
              Enterprise Workflow • ServiceNow • Automation
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SMALL PREVIEW CARDS */}
        <div className="rightSide">
          <div className="previewCard">
            <span>SERVICENOW</span>
            <h4>PPAP Request Tracker</h4>
          </div>

          <div className="previewCard">
            <span>FULL STACK</span>
            <h4>MERN Product System</h4>
          </div>

          <div className="previewCard">
            <span>AI SYSTEMS</span>
            <h4>Cyber + Smart Automation</h4>
          </div>
        </div>
      </section>

      <style jsx>{`
        .storySection {
          min-height: 100vh;
          background: #050505;
          color: white;
          padding: 140px 6%;
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.9fr;
          gap: 50px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .leftSide {
          z-index: 2;
        }

        .tag {
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.6;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .leftSide h2 {
          font-size: clamp(2.5rem, 5vw, 5rem);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .desc {
          font-size: 1rem;
          line-height: 1.8;
          opacity: 0.72;
          max-width: 420px;
        }

        .centerWrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mainCard {
          width: 100%;
          max-width: 520px;
          min-height: 520px;
          border-radius: 30px;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.015)
            );

          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);

          box-shadow:
            0 30px 80px rgba(0,0,0,0.55);
        }

        .label {
          font-size: 12px;
          letter-spacing: 3px;
          opacity: 0.6;
          margin-bottom: 18px;
        }

        .mainCard h3 {
          font-size: 2.4rem;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .mainCard p {
          font-size: 1rem;
          opacity: 0.75;
          line-height: 1.7;
        }

        .bottomLine {
          margin-top: 40px;
          font-size: 14px;
          opacity: 0.55;
          letter-spacing: 1px;
        }

        .rightSide {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .previewCard {
          padding: 30px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(18px);
          transition: 0.4s ease;
          cursor: pointer;
        }

        .previewCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.18);
        }

        .previewCard span {
          font-size: 11px;
          letter-spacing: 3px;
          opacity: 0.6;
          display: block;
          margin-bottom: 14px;
        }

        .previewCard h4 {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.4;
        }

        @media (max-width: 1100px) {
          .storySection {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .rightSide {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .mainCard {
            min-height: 420px;
          }
        }
      `}</style>
    </>
  );
}
// components/About.js

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    tag: "SERVICENOW",
    title: "Workflow Automation",
    desc: "Building enterprise approval flows, PPAP request systems, notifications, UI policies, and scalable internal automation platforms.",
    video: "/videos/servicenow.mp4",
  },
  {
    tag: "STMICROELECTRONICS",
    title: "Digital Transformation",
    desc: "Working on real business systems, request lifecycle optimization, internal workflows, and premium process engineering.",
    video: "/videos/stmicro.mp4",
  },
  {
    tag: "FULL STACK",
    title: "MERN Architecture",
    desc: "Designing scalable products with React, Node.js, APIs, production-ready deployment, and premium user experiences.",
    video: "/videos/mern.mp4",
  },
  {
    tag: "AI + CYBER",
    title: "Smart Automation",
    desc: "Combining AI systems, automation workflows, and digital product intelligence for faster and smarter execution.",
    video: "/videos/ai.mp4",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();

    const sectionTop = window.scrollY + rect.top;
    const scrollY = window.scrollY;

    // when sticky section should start
    const start = sectionTop - window.innerHeight * 0.3;

    // when sticky section should end
    const end =
      sectionTop +
      section.offsetHeight -
      window.innerHeight;

    let progress = (scrollY - start) / (end - start);

    // clamp between 0 and 1
    progress = Math.max(0, Math.min(progress, 1));

    const newIndex = Math.floor(
      progress * cards.length
    );

    setActiveCard(
      Math.min(newIndex, cards.length - 1)
    );
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
      <section
        id="about"
        className="stickyAboutSection"
        ref={sectionRef}
      >
        <div className="stickyWrap">

          {/* LEFT TEXT */}
          <div className="leftText">
            <p>ABOUT</p>

            <h2>
              Premium Systems.
              <br />
              Real Business
              <br />
              Impact.
            </h2>
          </div>

          {/* RIGHT CARD WITH VIDEO */}
          <div className="mainCard">
            {/* VIDEO */}
            <div className="videoWrap">
              <video
                key={cards[activeCard].video}
                autoPlay
                muted
                loop
                playsInline
                className="cardVideo"
              >
                <source
                  src={cards[activeCard].video}
                  type="video/mp4"
                />
              </video>

              <div className="videoOverlay" />
            </div>

            {/* CONTENT */}
            <div className="cardContent">
              <span>{cards[activeCard].tag}</span>

              <h3>{cards[activeCard].title}</h3>

              <p>{cards[activeCard].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
     .stickyAboutSection {
  min-height: 260vh;
  background: #050505;
  position: relative;
  color: white;
  margin-top: 0;
  padding-top: 0;
}

        .stickyWrap {
          position: sticky;
  top: 100px;
  min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 60px;
          padding: 0 7%;
        }

        .leftText p {
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.6;
          margin-bottom: 20px;
        }

        .leftText h2 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .mainCard {
          min-height: 580px;
          border-radius: 32px;
          overflow: hidden;
          position: relative;

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

        .videoWrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .cardVideo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
        }

        .videoOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(0,0,0,0.85),
              rgba(0,0,0,0.25)
            );
        }

        .cardContent {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .cardContent span {
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.7;
          margin-bottom: 20px;
          display: block;
        }

        .cardContent h3 {
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1;
        }

        .cardContent p {
          font-size: 1rem;
          line-height: 1.9;
          opacity: 0.85;
          max-width: 600px;
        }

        @media (max-width: 900px) {
          .stickyWrap {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .mainCard {
            min-height: 460px;
          }

          .cardContent {
            padding: 40px;
          }
        }
      `}</style>
    </>
  );
}
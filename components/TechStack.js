import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function TechStack() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".tech-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const stack = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "ServiceNow",
    "SQL",
    "MongoDB",
    "AWS",
    "Git/GitHub",
    "REST APIs",
    "CI/CD",
  ];

  return (
    <section id="tech" className="tech-section" ref={sectionRef}>
      <div className="top">
        <p className="label">Tech Stack</p>
        <h2>I build systems with modern tools.</h2>
        <p className="sub">
          Engineering scalable products, enterprise workflows, and premium
          digital experiences.
        </p>
      </div>

      <div className="grid">
        {stack.map((item, index) => (
          <div className="tech-card" key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tech-section {
          min-height: 100vh;
          background: #0b1020;
          color: white;
          padding: 140px 80px;
        }

        .top {
          max-width: 900px;
          margin-bottom: 70px;
        }

        .label {
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-bottom: 16px;
        }

        h2 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1;
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .sub {
          font-size: 1.1rem;
          opacity: 0.75;
          max-width: 700px;
          line-height: 1.8;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .tech-card {
          min-height: 140px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .tech-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 0 30px rgba(0, 255, 255, 0.08),
            0 0 60px rgba(255, 0, 255, 0.05);
        }

        @media (max-width: 900px) {
          .tech-section {
            padding: 100px 30px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

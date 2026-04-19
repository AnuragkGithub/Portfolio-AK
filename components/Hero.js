import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();
  const fullNameRef = useRef();
  const leftNameRef = useRef();
  const rightNameRef = useRef();
  const subtitleRef = useRef();
  const akCursorRef = useRef();

  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // IMPORTANT:
    // remove this wrong line from your old file:
    // <section id="home" className="hero"></section>
    //
    // it is invalid and causing error
    // I saw it in your file already :contentReference[oaicite:0]{index=0}

    // LEFT SIDE NAME → move to center
    gsap.to(leftNameRef.current, {
      x: 280,
      scale: 0.35,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // RIGHT SIDE NAME → move to center
    gsap.to(rightNameRef.current, {
      x: -280,
      scale: 0.35,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.42) {
            setShowCursor(true);
          } else {
            setShowCursor(false);
          }
        },
      },
    });

    // Subtitle fade
    gsap.to(subtitleRef.current, {
      opacity: 0,
      y: -40,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    });

    // Mouse follow for AK cursor
    const moveCursor = (e) => {
      if (!akCursorRef.current || !showCursor) return;

      gsap.to(akCursorRef.current, {
        x: e.clientX - 35,
        y: e.clientY - 35,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [showCursor]);

  return (
    <>
      <section id="home" className="hero" ref={heroRef}>
        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bgVideo"
        >
          <source
            src="/videos/medium.mp4"
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="overlay" />
        <div className="bottomGlow" />

        {/* CONTENT */}
        <div className="content" ref={fullNameRef}>
          <div className="name-slider" ref={fullNameRef}>
  <h1
    ref={leftNameRef}
    className="hero-name">
    {"SOFTWARE ENGINEER".split("").map((char, index) => (
      <span
        key={index}
        className={char === " " ? "space" : "letter"}
      >
        {char}
      </span>
    ))}
</h1>
  <h1
    ref={rightNameRef}
    className="hero-name">
    {"ANURAG KARMAKAR".split("").map((char, index) => (
      <span
        key={index}
        className={char === " " ? "space" : "letter"}
      >
        {char}
      </span>
    ))}
</h1>
</div>

          <p ref={subtitleRef} className="subtitle">
            Software Engineer • Full Stack • ServiceNow • AI Systems
          </p>
          <div className="showcaseCards">
  <div className="featureCard card1">
    <p className="cardTag">FULL STACK</p>
    <h3>Premium Web Systems</h3>
    <span>React • Next.js • Node.js</span>
  </div>

  <div className="featureCard card2">
    <p className="cardTag">SERVICENOW</p>
    <h3>Workflow Automation</h3>
    <span>PPAP • CI/CD • Enterprise Flow</span>
  </div>

  <div className="featureCard card3">
    <p className="cardTag">CYBER + AI</p>
    <h3>Secure Digital Experiences</h3>
    <span>Security • AI Systems • Premium UX</span>
  </div>
</div>
        </div>
      </section>

      {/* ONLY ONE AK CURSOR */}
      {showCursor && (
        <div ref={akCursorRef} className="akCursor">
          AK
        </div>
      )}

      <style jsx>{`
        .hero {
          min-height: 100vh;
  margin: 0;
  padding: 0;

          background: black;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .bgVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter:
            brightness(1.1)
            contrast(1.15)
            saturate(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.15),
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.55)
            );
        }

        .bottomGlow {
          position: absolute;
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 1200px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(0, 120, 255, 0.10),
            transparent 70%
          );
          filter: blur(80px);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
        }

        .name-slider {
  display: flex;
  gap: 100px;
  width: max-content;
  animation: marquee 18s linear infinite;
}

.hero-name {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  color: white;
}

.letter {
  display: inline-block;
  cursor: pointer;
  transition: all 0.35s ease;

  text-shadow:
    0 8px 20px rgba(0,0,0,0.25),
    0 0 10px rgba(255,255,255,0.04);
}

.letter:hover {
  transform: translateY(-18px) scale(1.08);

  text-shadow:
    0 0 10px rgba(0,255,255,0.6),
    0 0 20px rgba(255,0,255,0.5),
    0 0 40px rgba(0,128,255,0.4);

  filter: drop-shadow(0 0 14px cyan);

  animation: letterGlow 0.8s ease infinite alternate;
}

.space {
  width: 30px;
}

@keyframes letterGlow {
  from {
    filter: drop-shadow(0 0 8px cyan);
  }

  to {
    filter: drop-shadow(0 0 18px magenta);
  }
}
/* HOVER EFFECT */
.hero-name:hover {
  transform: translateY(-10px) scale(1.02);

  text-shadow:
    0 0 10px rgba(0,255,255,0.5),
    0 0 20px rgba(255,0,255,0.4),
    0 0 40px rgba(0,128,255,0.35);

  animation: rgbPulse 1.2s infinite alternate;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes rgbPulse {
  from {
    filter: drop-shadow(0 0 8px cyan);
  }

  to {
    filter: drop-shadow(0 0 18px magenta);
  }
}

        h1 {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          margin: 0;
          color: white;

          text-shadow:
            0 8px 20px rgba(0,0,0,0.25),
            0 0 10px rgba(255,255,255,0.04);
        }

        .subtitle {
          margin-top: 32px;
          font-size: 1.2rem;
          font-weight: 500;
          opacity: 0.9;
          letter-spacing: 1px;
        }

        .akCursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.15);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 20px;
          font-weight: 700;
          color: white;

          pointer-events: none;
          z-index: 9999;

          box-shadow:
            0 0 20px rgba(0,255,255,0.25),
            0 0 40px rgba(255,0,255,0.18),
            0 0 60px rgba(0,128,255,0.15);

          animation: rgbGlow 4s infinite linear;
        }

        @keyframes rgbGlow {
          0% {
            box-shadow:
              0 0 20px rgba(0,255,255,0.25),
              0 0 40px rgba(255,0,255,0.18);
          }

          50% {
            box-shadow:
              0 0 30px rgba(255,0,255,0.35),
              0 0 60px rgba(0,128,255,0.25);
          }

          100% {
            box-shadow:
              0 0 20px rgba(0,255,255,0.25),
              0 0 40px rgba(255,0,255,0.18);
          }
        }
          .showcaseCards {
  margin-top: 70px;
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;
}

.featureCard {
  width: 320px;
  min-height: 220px;
  padding: 32px;
  border-radius: 28px;

  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);

  box-shadow:
    0 20px 60px rgba(0,0,0,0.25),
    0 0 30px rgba(0,255,255,0.04);

  transition: all 0.45s ease;
  cursor: pointer;
}

.featureCard:hover {
  transform: translateY(-12px) scale(1.03);

  box-shadow:
    0 0 30px rgba(0,255,255,0.08),
    0 0 60px rgba(255,0,255,0.05);

  border: 1px solid rgba(255,255,255,0.14);
}

.cardTag {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 18px;
}

.featureCard h3 {
  font-size: 2rem;
  margin-bottom: 18px;
  line-height: 1.1;
  font-weight: 700;
}

.featureCard span {
  font-size: 15px;
  opacity: 0.75;
  line-height: 1.7;
}

.card1 {
  transform: translateY(0px);
}

.card2 {
  transform: translateY(40px);
}

.card3 {
  transform: translateY(10px);
}

        @media (max-width: 900px) {
          .splitName {
            gap: 16px;
            flex-direction: column;
          }

          h1 {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }

          .subtitle {
            font-size: 1rem;
            padding: 0 20px;
          }

          .akCursor {
            width: 55px;
            height: 55px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
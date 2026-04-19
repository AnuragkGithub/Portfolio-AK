import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
<section id="projects"></section>
export default function ProjectShowcase() {
  const [active, setActive] = useState(null);

  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const projects = [
    {
      title: "LSTM Stock Predictor",
      desc: "AI-based stock prediction using deep learning models.",
      img: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c",
    },
    {
      title: "MERN App",
      desc: "Full stack application with authentication and APIs.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "ServiceNow",
      desc: "Enterprise automation workflows and integrations.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "System Design",
      desc: "Scalable architecture & distributed systems.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  useEffect(() => {
    // Apple-style floating animation
    gsap.to(".image", {
      scale: 1.04,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleProjectChange = (index) => {
    if (index === active) return;

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.35,
      onComplete: () => {
        setActive(index);

        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.08,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      },
    });

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  };

  return (
    <section id="projects" className="wrapper">
      {/* LEFT SIDE */}
      <div className="left">
        {projects.map((item, i) => (
          <div
            key={i}
            className={`item ${active === i ? "active" : ""}`}
            onClick={() => handleProjectChange(i)}
          >
            <div className="title">{item.title}</div>

            <div className={`desc ${active === i ? "open" : ""}`}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        {/* DEFAULT STATE → Your intro/profile */}
        {active === null ? (
          <div className="defaultView">
            <div
              className="image profileImage"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e)",
              }}
            />

            <div className="content defaultContent">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="heroVideo"
  >
    <source src="/videos/serra.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="videoOverlay"></div>

  {/* Text Content */}
  <div className="heroText">
    <h2>Hello, I'm Anurag</h2>

    <p>
      Software Engineer • ServiceNow • Full Stack • System Design
    </p>
  </div>

</div>
          </div>
        ) : (
          <div className="projectDisplay">
            {/* CLOSE BUTTON */}
            <button
              className="closeBtn"
              onClick={() => handleProjectChange(null)}
            >
              ✕
            </button>

            <div
              ref={imageRef}
              className="image"
              style={{
                backgroundImage: `url(${projects[active].img})`,
              }}
            />

            <div ref={contentRef} className="content">
              <h2>{projects[active].title}</h2>
              <p>{projects[active].desc}</p>
            </div>
          </div>
        )}
      </div>

    <style jsx>{`
/* =========================
   MAIN WRAPPER
========================= */

.wrapper {
  display: flex;
  min-height: 100vh;
  background: #071018;
  color: white;
  overflow: hidden;
}

/* =========================
   LEFT SIDE
========================= */

.left {
  width: 38%;
  padding: 100px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background: #071018;
}

/* CARD ITEM */

.item {
  position: relative;
  padding: 28px 30px;
  border-radius: 28px;
  cursor: pointer;
  transition: all 0.4s ease;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255,255,255,0.05);
}

.item:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.item.active {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
}

.title {
  font-size: 1.1rem;
  font-weight: 500;
}

.desc {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.4s ease;
  font-size: 0.95rem;
  margin-top: 10px;
  line-height: 1.6;
}

.desc.open {
  max-height: 140px;
  opacity: 1;
}

/* =========================
   RIGHT SIDE
========================= */

.right {
  width: 62%;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
  background: #000;
}

/* REMOVE OLD IMAGE LAYER */

.image,
.profileImage {
  display: none !important;
}

/* MAIN VIEW */

.defaultView,
.projectDisplay {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  background: #000;
}

/* =========================
   VIDEO HERO SECTION
========================= */

.defaultContent {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  border-radius: 30px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;
}

/* FULL BACKGROUND VIDEO */

.heroVideo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* DARK PREMIUM OVERLAY */

.videoOverlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
}

/* CENTER TEXT */

.heroText {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 40px;
  max-width: 900px;
}

/* BIG TITLE */

.heroText h2 {
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

/* SUBTITLE */

.heroText p {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.95;
  letter-spacing: 0.5px;
  max-width: 700px;
  margin: auto;
}

/* =========================
   PROJECT CONTENT
========================= */

.content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  max-width: 700px;
}

.content h2 {
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -3px;
  margin-bottom: 24px;
}

.content p {
  font-size: 1.1rem;
  opacity: 0.85;
  line-height: 1.6;
  max-width: 500px;
}

/* =========================
   CLOSE BUTTON
========================= */

.closeBtn {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 5;

  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;

  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.closeBtn:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: scale(1.05);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {
  .wrapper {
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%;
  }

  .left {
    padding: 60px 30px;
  }

  .content {
    padding: 40px;
  }

  .heroText h2 {
    font-size: clamp(2.5rem, 8vw, 5rem);
  }
}
`}</style>
    </section>
  );
}
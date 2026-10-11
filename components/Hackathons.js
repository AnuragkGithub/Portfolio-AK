
import { useMemo, useState } from "react";

const events = [
  {
    id: "dataops",
    number: "01",
    name: "DataOps Innovation Hackathon",
    organizer: "Hack The Core",
    category: "Cybersecurity",
    icon: "◈",
    accent: "#43d9ff",
    dates: "02–07 NOV 2026",
    team: "1–4 members",
    status: "Registered",
    progress: "Work in progress",
    description:
      "An AI-driven cybersecurity challenge focused on intelligent security assessment, risk prioritization, automation, and actionable security reporting.",
    focus: [
      "AI agents",
      "Security automation",
      "Risk prioritization",
      "Intelligent reporting",
    ],
    reward: "₹30,000 prize pool",
    links: [
      {
        label: "Organizer updates",
        url: "https://www.linkedin.com/company/hackthecorein",
      },
    ],
  },
  {
    id: "hackaaroh",
    number: "02",
    name: "HackAaroh — Open Source Sprint",
    organizer: "IIIT Kottayam",
    category: "Open Source",
    icon: "</>",
    accent: "#a78bfa",
    dates: "Schedule to be confirmed",
    team: "Individual participation",
    status: "Registered",
    progress: "Contributions in progress",
    description:
      "An open-source developer sprint where meaningful pull requests, code quality, technical complexity, testing, and real-world impact matter.",
    focus: [
      "Open-source contributions",
      "Code quality",
      "Testing & reliability",
      "Real-world impact",
    ],
    reward: "Top 20: Zomato gift cards",
    links: [
      {
        label: "HackAaroh website",
        url: "https://hackaaroh-main.vercel.app/",
      },
    ],
  },
  {
    id: "codex48",
    number: "03",
    name: "Codex 48",
    organizer: "WeCodeCoders",
    category: "Full Stack & AI",
    icon: "{ }",
    accent: "#ffb86b",
    dates: "24 OCT – 07 NOV 2026",
    team: "1–4 members",
    status: "Registered",
    progress: "Work in progress",
    description:
      "A national-level, online hackathon spanning agentic AI, full-stack product engineering, and open innovation.",
    focus: [
      "Agentic AI",
      "Full-stack engineering",
      "Product development",
      "Open innovation",
    ],
    reward: "PPO and incubation opportunities",
    links: [
      {
        label: "Official information group",
        url: "https://chat.whatsapp.com/LxO4gbDRH1KKjM5KRVPVLw",
      },
    ],
  },
  {
    id: "codeverse",
    number: "04",
    name: "CodeVerse India",
    organizer: "WeCodeCoders",
    category: "Agentic AI",
    icon: "⌘",
    accent: "#ed8cff",
    dates: "30 OCT – 11 NOV 2026",
    team: "1–4 members",
    status: "Registered",
    progress: "Work in progress",
    description:
      "A national-level challenge combining agentic AI, software engineering, and full-stack product development.",
    focus: [
      "Agentic AI engineering",
      "Full-stack development",
      "Intelligent workflows",
      "Product innovation",
    ],
    reward: "$100 Inkloom AI credits per participant",
    links: [
      {
        label: "Official information group",
        url: "https://chat.whatsapp.com/FPwpl6nyaqOJtP2HTXQjXe",
      },
    ],
  },
  {
    id: "codefrontier",
    number: "05",
    name: "CodeFrontier Hackathon",
    organizer: "HackWithPune",
    category: "Full Stack & AI",
    icon: "⌬",
    accent: "#71f0bb",
    dates: "05–06 NOV 2026",
    team: "1–4 members",
    status: "Registered",
    progress: "Work in progress",
    description:
      "An online hackathon focused on agentic AI, full-stack product engineering, and open innovation.",
    focus: [
      "AI-enabled applications",
      "Full-stack products",
      "Open innovation",
      "Rapid prototyping",
    ],
    reward: "₹30,000 prize pool",
    links: [
      {
        label: "Official information group",
        url: "https://chat.whatsapp.com/IdQJEKGLGSrB5FGpdCAcVQ",
      },
    ],
  },
  {
    id: "codehack",
    number: "06",
    name: "CodeHack India",
    organizer: "WeCodeCoders",
    category: "Software Development",
    icon: "01",
    accent: "#ff7b91",
    dates: "28 OCT – 10 NOV 2026",
    team: "1–4 members",
    status: "Registered",
    progress: "Work in progress",
    description:
      "A national-level online hackathon covering agentic AI, full-stack engineering, and open-ended software innovation.",
    focus: [
      "Software development",
      "Agentic AI",
      "Full-stack engineering",
      "Product development",
    ],
    reward: "$100 AI credits per participant",
    links: [
      {
        label: "Official information group",
        url: "https://chat.whatsapp.com/EvW0hCKaLjQJOvU5x7IzDQ",
      },
    ],
  },
];

const filters = [
  "All",
  "Cybersecurity",
  "Open Source",
  "Full Stack & AI",
  "Agentic AI",
  "Software Development",
];

export default function Hackathons() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedEvent, setExpandedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return events;

    return events.filter((event) => event.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="hackathonsPage">
      <div className="ambient ambientOne" aria-hidden="true" />
      <div className="ambient ambientTwo" aria-hidden="true" />
      <div className="pageGrid" aria-hidden="true" />

     <section className="hackHero">
  <a href="/" className="backToPortfolio">
    <span>←</span> Back to Portfolio
  </a>

        <div className="heroEyebrow">
          <span className="liveDot" />
          MY INNOVATION JOURNEY
          <span className="eyebrowDivider" />
          2026
        </div>

        <h1>
          HACKATHONS
          <span className="heroAccent"> &amp; INNOVATION.</span>
        </h1>

        <p className="heroDescription">
          Exploring ideas, building intelligent solutions, and contributing
          to meaningful technology through cybersecurity, AI, full-stack
          engineering, and open source.
        </p>

        <div className="heroStats">
          <div className="statCard">
            <span className="statNumber">{String(events.length).padStart(2, "0")}</span>
            <span className="statLabel">REGISTERED EVENTS</span>
          </div>

          <div className="statCard">
            <span className="statNumber">06</span>
            <span className="statLabel">BUILDING JOURNEY</span>
          </div>

          <div className="statCard">
            <span className="statNumber">∞</span>
            <span className="statLabel">IDEAS TO EXPLORE</span>
          </div>
        </div>

        <a href="#eventExplorer" className="exploreButton">
          EXPLORE MY EVENTS <span>↓</span>
        </a>

        <div className="heroOrb" aria-hidden="true">
          <div className="orbRing ringOne" />
          <div className="orbRing ringTwo" />
          <div className="orbRing ringThree" />
          <div className="orbCore">
            <span>AI</span>
            <span className="orbSlash">/</span>
            <span>DEV</span>
          </div>
          <span className="orbNode nodeOne" />
          <span className="orbNode nodeTwo" />
          <span className="orbNode nodeThree" />
          <span className="orbNode nodeFour" />
        </div>

        <div className="heroBottomLine">
          <span>IDEATE</span>
          <span>BUILD</span>
          <span>TEST</span>
          <span>CONTRIBUTE</span>
          <span>REPEAT ↗</span>
        </div>
      </section>

      <section className="eventExplorer" id="eventExplorer">
        <div className="sectionHeading">
          <div>
            <span className="sectionEyebrow">THE EVENT ARCHIVE</span>
            <h2>
              Where ideas
              <br />
              become <span>reality.</span>
            </h2>
          </div>

          <p>
            Six events. Multiple technology domains. A work-in-progress
            journey with project showcases coming soon.
          </p>
        </div>

        <div className="filterBar" aria-label="Filter hackathons">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "filterActive" : ""}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="resultsLine">
          <span>
            DISPLAYING <strong>{String(filteredEvents.length).padStart(2, "0")}</strong> EVENTS
          </span>
          <span>
            <span className="liveDot" /> ALL PROJECTS IN PROGRESS
          </span>
        </div>

        <div className="eventGrid">
          {filteredEvents.map((event, index) => {
            const isExpanded = expandedEvent === event.id;

            return (
              <article
                key={event.id}
                className={`eventCard ${isExpanded ? "eventExpanded" : ""}`}
                style={{
                  "--cardAccent": event.accent,
                  "--cardDelay": `${index * 70}ms`,
                }}
              >
                <div className="cardTop">
                  <span className="eventNumber">{event.number} / 06</span>
                  <span className="registeredBadge">
                    <span /> {event.status}
                  </span>
                </div>

                <div className="eventVisual">
                  <div className="visualGrid" />
                  <div className="visualRing visualRingOne" />
                  <div className="visualRing visualRingTwo" />
                  <div className="visualCore">{event.icon}</div>
                  <span className="visualIndex">{event.number}</span>
                  <span className="visualDomain">{event.category}</span>
                </div>

                <div className="eventContent">
                  <p className="organizer">{event.organizer}</p>
                  <h3>{event.name}</h3>
                  <p className="eventDescription">{event.description}</p>

                  <div className="eventMeta">
                    <div>
                      <span className="metaLabel">EVENT DATES</span>
                      <span>{event.dates}</span>
                    </div>
                    <div>
                      <span className="metaLabel">TEAM FORMAT</span>
                      <span>{event.team}</span>
                    </div>
                  </div>

                  <div className="progressPanel">
                    <div className="progressHeader">
                      <span className="progressDot" />
                      <span>{event.progress}</span>
                      <span className="progressPulse">ACTIVE</span>
                    </div>
                    <p>Project showcase coming soon.</p>
                  </div>

                  {isExpanded && (
                    <div className="expandedDetails">
                      <span className="metaLabel">FOCUS AREAS</span>
                      <div className="focusTags">
                        {event.focus.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <div className="rewardLine">
                        <span>REWARDS / OPPORTUNITIES</span>
                        <strong>{event.reward}</strong>
                      </div>

                      <p className="disclaimer">
                        Rewards describe the event offering, not a personal
                        award or result.
                      </p>
                    </div>
                  )}

                  <div className="cardActions">
                    <button
                      type="button"
                      className="detailsButton"
                      onClick={() =>
                        setExpandedEvent(isExpanded ? null : event.id)
                      }
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "LESS DETAILS" : "EXPLORE EVENT"}
                      <span>{isExpanded ? "−" : "↗"}</span>
                    </button>

                    {event.links.length > 0 && (
                      <a
                        className="externalLink"
                        href={event.links[0].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        EVENT LINK <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="cardBottomGlow" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="comingSoonPanel">
          <div className="comingSoonIcon">+</div>
          <div>
            <span className="sectionEyebrow">THE JOURNEY CONTINUES</span>
            <h3>More builds. More challenges. More to come.</h3>
            <p>
              Additional hackathons, project details, repository links,
              demos, and final outcomes will be added as the journey progresses.
            </p>
          </div>
          <span className="comingSoonStamp">UPDATING</span>
        </div>
      </section>

      <footer className="hackFooter">
        <span>ANURAG KARMAKAR</span>
        <span>DESIGNED TO BUILD. BUILT TO INNOVATE.</span>
        <a href="#eventExplorer">BACK TO EVENTS ↑</a>
      </footer>

      <style jsx>{`
        .hackathonsPage {
          --h-bg: #080a12;
          --h-panel: rgba(18, 22, 36, 0.76);
          --h-border: rgba(151, 174, 220, 0.16);
          --h-text: #f1f5ff;
          --h-muted: #919bb2;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding-top: 90px;
          background: var(--bg-gradient, var(--h-bg));
          color: var(--text, var(--h-text));
          isolation: isolate;
        }

        .ambient,
        .pageGrid {
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .ambient {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.16;
        }

        .ambientOne {
          top: 80px;
          left: -220px;
          background: #08b9ff;
        }

        .ambientTwo {
          top: 600px;
          right: -220px;
          background: #915bff;
        }

        .pageGrid {
          inset: 0;
          opacity: 0.12;
          background-image:
            linear-gradient(rgba(125, 160, 220, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 160, 220, 0.16) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: linear-gradient(to bottom, black, transparent 75%);
        }

        .hackHero {
          position: relative;
          width: min(1240px, 90%);
          min-height: 590px;
          margin: 0 auto;
          padding: 90px 0 76px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .heroEyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid var(--h-border);
          border-radius: 999px;
          background: rgba(12, 17, 30, 0.75);
          color: var(--h-muted);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .liveDot,
        .registeredBadge > span {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: #54efb4;
          box-shadow: 0 0 13px rgba(84, 239, 180, 0.75);
        }

        .eyebrowDivider {
          width: 1px;
          height: 13px;
          background: var(--h-border);
        }

        .hackHero h1 {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 30px 0 18px;
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.96;
          letter-spacing: -0.075em;
          font-weight: 950;
          overflow-wrap: anywhere;
          animation: heroReveal 0.8s ease both;
        }

        .heroAccent {
          display: block;
          margin-top: 12px;
          color: #4bd8ff;
          text-shadow: 0 0 45px rgba(75, 216, 255, 0.2);
        }

        .heroDescription {
          position: relative;
          z-index: 2;
          max-width: 610px;
          color: var(--text-muted, var(--h-muted));
          font-size: 1rem;
          line-height: 1.9;
        }

        .heroStats {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
          position: relative;
          z-index: 2;
        }

        .statCard {
          min-width: 140px;
          padding: 15px 18px;
          border: 1px solid var(--h-border);
          border-radius: 15px;
          background: var(--h-panel);
          backdrop-filter: blur(18px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .statCard:hover {
          transform: translateY(-5px);
          border-color: rgba(67, 217, 255, 0.55);
        }

        .statNumber {
          display: block;
          color: var(--text, #f1f5ff);
          font-size: 1.75rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .statLabel {
          display: block;
          margin-top: 5px;
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.25px;
        }

        .exploreButton {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          margin-top: 28px;
          padding: 14px 19px;
          border: 1px solid rgba(67, 217, 255, 0.45);
          border-radius: 12px;
          background: rgba(67, 217, 255, 0.1);
          color: var(--text, #fff);
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .exploreButton:hover {
          transform: translateY(-3px);
          background: rgba(67, 217, 255, 0.2);
        }

        .exploreButton span {
          color: #43d9ff;
          font-size: 17px;
        }

        .heroOrb {
          position: absolute;
          width: 340px;
          height: 340px;
          right: 3%;
          top: 110px;
          display: grid;
          place-items: center;
          perspective: 900px;
          animation: orbFloat 7s ease-in-out infinite;
        }

        .orbCore {
          width: 125px;
          height: 125px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid rgba(67, 217, 255, 0.65);
          border-radius: 32px;
          background: linear-gradient(145deg, rgba(30, 48, 73, 0.92), rgba(10, 14, 27, 0.94));
          box-shadow:
            0 0 50px rgba(67, 217, 255, 0.14),
            inset 0 0 35px rgba(67, 217, 255, 0.08);
          color: #f5fbff;
          font-size: 22px;
          font-weight: 900;
          transform: rotateX(12deg) rotateY(-15deg);
        }

        .orbSlash {
          color: #43d9ff;
        }

        .orbRing {
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid rgba(67, 217, 255, 0.36);
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        .ringOne {
          transform: rotateX(70deg) rotateZ(-25deg);
          animation: ringRotate 15s linear infinite;
        }

        .ringTwo {
          width: 290px;
          height: 290px;
          border-color: rgba(167, 139, 250, 0.35);
          transform: rotateY(65deg) rotateX(15deg);
          animation: ringRotate 18s linear infinite reverse;
        }

        .ringThree {
          width: 180px;
          height: 180px;
          border-style: dashed;
          border-color: rgba(255, 184, 107, 0.4);
          transform: rotateX(35deg) rotateY(40deg);
        }

        .orbNode {
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #43d9ff;
          box-shadow: 0 0 20px #43d9ff;
        }

        .nodeOne {
          top: 37px;
          left: 103px;
        }

        .nodeTwo {
          right: 28px;
          top: 144px;
          background: #a78bfa;
          box-shadow: 0 0 20px #a78bfa;
        }

        .nodeThree {
          left: 72px;
          bottom: 54px;
          background: #ffb86b;
          box-shadow: 0 0 20px #ffb86b;
        }

        .nodeFour {
          right: 99px;
          bottom: 18px;
        }

        .heroBottomLine {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid var(--h-border);
          padding-top: 20px;
          color: var(--h-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .heroBottomLine span:last-child {
          color: #43d9ff;
        }

        .eventExplorer {
          width: min(1240px, 90%);
          margin: 0 auto;
          padding: 95px 0 80px;
          scroll-margin-top: 100px;
        }

        .sectionHeading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 40px;
        }

        .sectionEyebrow {
          color: #43d9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2.5px;
        }

        .sectionHeading h2 {
          margin: 15px 0 0;
          font-size: clamp(2.8rem, 5.8vw, 5rem);
          font-weight: 900;
          line-height: 0.99;
          letter-spacing: -0.065em;
        }

        .sectionHeading h2 span {
          color: #43d9ff;
        }

.backToPortfolio {
  position: relative;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding: 11px 16px;
  border: 1px solid var(--h-border);
  border-radius: 12px;
  background: var(--h-panel);
  color: var(--text, #f1f5ff);
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.backToPortfolio:hover {
  transform: translateX(-4px);
  border-color: #43d9ff;
}

.backToPortfolio span {
  color: #43d9ff;
  font-size: 18px;
}


        .sectionHeading > p {
          max-width: 370px;
          margin-bottom: 6px;
          color: var(--text-muted, var(--h-muted));
          font-size: 0.92rem;
          line-height: 1.9;
        }

        .filterBar {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 20px;
        }

        .filterBar button {
          padding: 10px 14px;
          border: 1px solid var(--h-border);
          border-radius: 999px;
          background: rgba(16, 20, 33, 0.75);
          color: var(--h-muted);
          cursor: pointer;
          font: inherit;
          font-size: 0.75rem;
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .filterBar button:hover,
        .filterBar button.filterActive {
          color: var(--text, #fff);
          border-color: rgba(67, 217, 255, 0.55);
          background: rgba(67, 217, 255, 0.11);
        }

        .resultsLine {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 25px;
          padding: 14px 0;
          border-top: 1px solid var(--h-border);
          border-bottom: 1px solid var(--h-border);
          color: var(--h-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .resultsLine strong {
          color: #43d9ff;
        }

        .resultsLine > span:last-child {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .eventGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: start;
          perspective: 1400px;
        }

        .eventCard {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--h-border);
          border-radius: 22px;
          background: linear-gradient(155deg, rgba(24, 30, 47, 0.94), rgba(10, 13, 23, 0.97));
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
          transform-style: preserve-3d;
          transition:
            transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease;
          animation: cardEnter 0.65s ease both;
          animation-delay: var(--cardDelay);
        }

        .eventCard:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
          border-color: color-mix(in srgb, var(--cardAccent) 60%, transparent);
          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.32),
            0 0 32px color-mix(in srgb, var(--cardAccent) 10%, transparent);
        }

        .eventCard::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          content: "";
          background: linear-gradient(90deg, transparent, var(--cardAccent), transparent);
          opacity: 0.8;
        }

        .cardTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          padding: 17px 17px 0;
        }

        .eventNumber {
          color: var(--h-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .registeredBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border: 1px solid rgba(84, 239, 180, 0.2);
          border-radius: 999px;
          background: rgba(84, 239, 180, 0.07);
          color: #86f4c4;
          font-size: 8px;
          font-weight: 800;
        }

        .registeredBadge > span {
          width: 5px;
          height: 5px;
          flex-basis: 5px;
        }

        .eventVisual {
          position: relative;
          display: grid;
          place-items: center;
          height: 175px;
          margin: 16px 15px 0;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--cardAccent) 22%, transparent);
          border-radius: 15px;
          background:
            radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--cardAccent) 17%, transparent), transparent 65%),
            rgba(8, 12, 23, 0.92);
          transform: translateZ(16px);
        }

        .visualGrid {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(color-mix(in srgb, var(--cardAccent) 25%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--cardAccent) 25%, transparent) 1px, transparent 1px);
          background-size: 23px 23px;
          mask-image: radial-gradient(ellipse, black, transparent 85%);
        }

        .visualRing {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 1px solid color-mix(in srgb, var(--cardAccent) 55%, transparent);
          border-radius: 50%;
          transform: rotateX(65deg) rotateZ(15deg);
          transition: transform 0.5s ease;
        }

        .visualRingOne {
          width: 110px;
          height: 110px;
        }

        .visualRingTwo {
          width: 145px;
          height: 145px;
          border-style: dashed;
          opacity: 0.6;
          transform: rotateY(60deg) rotateX(20deg);
        }

        .eventCard:hover .visualRingOne {
          transform: rotateX(65deg) rotateZ(70deg) scale(1.2);
        }

        .eventCard:hover .visualRingTwo {
          transform: rotateY(70deg) rotateX(35deg) scale(1.1);
        }

        .visualCore {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 65px;
          height: 65px;
          border: 1px solid color-mix(in srgb, var(--cardAccent) 70%, transparent);
          border-radius: 19px;
          background: rgba(11, 16, 30, 0.9);
          color: var(--cardAccent);
          box-shadow: 0 0 30px color-mix(in srgb, var(--cardAccent) 17%, transparent);
          font-size: 23px;
          font-weight: 900;
          transform: rotateX(10deg) rotateY(-10deg);
          transition: transform 0.4s ease;
        }

        .eventCard:hover .visualCore {
          transform: rotateX(0deg) rotateY(0deg) translateZ(15px) scale(1.08);
        }

        .visualIndex {
          position: absolute;
          top: 12px;
          right: 13px;
          color: color-mix(in srgb, var(--cardAccent) 75%, transparent);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .visualDomain {
          position: absolute;
          bottom: 12px;
          left: 13px;
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .eventContent {
          padding: 21px 18px 20px;
          transform: translateZ(8px);
        }

        .organizer {
          margin: 0 0 8px;
          color: var(--cardAccent);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .eventContent h3 {
          margin: 0;
          color: var(--text, #f1f5ff);
          font-size: clamp(1.2rem, 1.5vw, 1.55rem);
          line-height: 1.2;
          font-weight: 850;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .eventDescription {
          min-height: 105px;
          margin: 13px 0 19px;
          color: var(--text-muted, var(--h-muted));
          font-size: 0.82rem;
          line-height: 1.8;
        }

        .eventMeta {
          display: grid;
          gap: 12px;
          padding: 15px 0;
          border-top: 1px solid var(--h-border);
          border-bottom: 1px solid var(--h-border);
        }

        .eventMeta > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metaLabel {
          display: block;
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .eventMeta > div > span:last-child {
          color: var(--text, #f1f5ff);
          font-size: 0.77rem;
          font-weight: 650;
          overflow-wrap: anywhere;
        }

        .progressPanel {
          margin-top: 16px;
          padding: 13px;
          border: 1px solid color-mix(in srgb, var(--cardAccent) 20%, transparent);
          border-radius: 12px;
          background: color-mix(in srgb, var(--cardAccent) 5%, transparent);
        }

        .progressHeader {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--text, #f1f5ff);
          font-size: 10px;
          font-weight: 800;
        }

        .progressDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cardAccent);
          box-shadow: 0 0 10px var(--cardAccent);
        }

        .progressPulse {
          margin-left: auto;
          color: var(--cardAccent);
          font-size: 8px;
          letter-spacing: 1px;
        }

        .progressPanel p {
          margin: 9px 0 0 13px;
          color: var(--h-muted);
          font-size: 0.74rem;
        }

        .expandedDetails {
          padding-top: 20px;
          animation: detailsReveal 0.3s ease both;
        }

        .focusTags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 10px;
        }

        .focusTags span {
          padding: 7px 9px;
          border: 1px solid var(--h-border);
          border-radius: 8px;
          color: var(--text-muted, var(--h-muted));
          font-size: 9px;
        }

        .rewardLine {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 18px;
          padding: 13px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
        }

        .rewardLine > span {
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .rewardLine strong {
          color: var(--cardAccent);
          font-size: 0.84rem;
        }

        .disclaimer {
          color: var(--h-muted);
          font-size: 0.68rem;
          line-height: 1.6;
        }

        .cardActions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 17px;
        }

        .detailsButton,
        .externalLink {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 38px;
          border: 1px solid var(--h-border);
          border-radius: 10px;
          background: transparent;
          color: var(--text, #f1f5ff);
          text-decoration: none;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .detailsButton {
          padding: 10px 11px;
        }

        .externalLink {
          padding: 10px 9px;
          color: var(--h-muted);
          text-align: center;
        }

        .detailsButton:hover,
        .externalLink:hover {
          border-color: var(--cardAccent);
          background: color-mix(in srgb, var(--cardAccent) 9%, transparent);
        }

        .detailsButton span,
        .externalLink span {
          color: var(--cardAccent);
          font-size: 13px;
        }

        .cardBottomGlow {
          position: absolute;
          right: -80px;
          bottom: -110px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: var(--cardAccent);
          filter: blur(100px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .eventCard:hover .cardBottomGlow {
          opacity: 0.15;
        }

        .comingSoonPanel {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 50px;
          padding: 30px;
          border: 1px solid var(--h-border);
          border-radius: 20px;
          background: var(--h-panel);
        }

        .comingSoonIcon {
          display: grid;
          place-items: center;
          flex: 0 0 52px;
          width: 52px;
          height: 52px;
          border: 1px solid rgba(67, 217, 255, 0.35);
          border-radius: 15px;
          color: #43d9ff;
          font-size: 26px;
        }

        .comingSoonPanel h3 {
          margin: 9px 0;
          font-size: clamp(1.15rem, 2.3vw, 1.8rem);
          letter-spacing: -0.035em;
        }

        .comingSoonPanel p {
          max-width: 700px;
          margin: 0;
          color: var(--h-muted);
          font-size: 0.84rem;
          line-height: 1.8;
        }

        .comingSoonStamp {
          margin-left: auto;
          padding: 8px 10px;
          border: 1px solid var(--h-border);
          border-radius: 8px;
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
          white-space: nowrap;
        }

        .hackFooter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          width: min(1240px, 90%);
          margin: 0 auto;
          padding: 25px 0 35px;
          border-top: 1px solid var(--h-border);
          color: var(--h-muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .hackFooter a {
          color: #43d9ff;
          text-decoration: none;
        }

        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-13px) rotate(3deg); }
        }

        @keyframes ringRotate {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes detailsReveal {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1000px) {
          .heroOrb {
            right: -75px;
            opacity: 0.55;
            transform: scale(0.8);
          }

          .hackHero h1,
          .heroDescription,
          .heroStats,
          .exploreButton,
          .heroEyebrow {
            max-width: 75%;
          }

          .eventGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sectionHeading {
            align-items: flex-start;
            flex-direction: column;
          }

          .sectionHeading > p {
            max-width: 650px;
          }
        }

        @media (max-width: 650px) {
          .hackathonsPage {
            padding-top: 100px;
          }

          .hackHero {
            width: 90%;
            min-height: 0;
            padding: 60px 0 75px;
          }

          .heroOrb {
            top: 50px;
            right: -130px;
            transform: scale(0.55);
            opacity: 0.25;
          }

          .hackHero h1,
          .heroDescription,
          .heroStats,
          .exploreButton,
          .heroEyebrow {
            max-width: 100%;
          }

          .hackHero h1 {
            font-size: clamp(2.8rem, 12vw, 4.8rem);
          }

          .heroDescription {
            font-size: 0.92rem;
          }

          .heroStats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            width: 100%;
            gap: 7px;
          }

          .statCard {
            min-width: 0;
            padding: 12px 8px;
          }

          .statNumber {
            font-size: 1.45rem;
          }

          .statLabel {
            font-size: 7px;
            line-height: 1.5;
            letter-spacing: 0.7px;
          }

          .heroBottomLine {
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 12px 20px;
            font-size: 8px;
          }

          .eventExplorer {
            width: 90%;
            padding-top: 65px;
          }

          .sectionHeading h2 {
            font-size: clamp(2.7rem, 11vw, 4rem);
          }

          .eventGrid {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }

          .eventVisual {
            height: 190px;
          }

          .eventDescription {
            min-height: 0;
          }

          .comingSoonPanel {
            align-items: flex-start;
            flex-wrap: wrap;
            padding: 22px;
            gap: 15px;
          }

          .comingSoonPanel > div:nth-child(2) {
            flex: 1 1 180px;
          }

          .comingSoonStamp {
            margin-left: 0;
          }

          .hackFooter {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hackathonsPage *,
          .hackathonsPage *::before,
          .hackathonsPage *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

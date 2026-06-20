export default function Certifications() {
  const achievements = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      type: "Professional Certification",
      detail: "Credential verification for platform configuration, scripting, system updates, and database schema administration."
    },
    {
      title: "Solved 400+ DSA Problems on LeetCode",
      type: "Algorithmic Problem Solving",
      detail: "Consistently training and optimizing solutions in C++, Java, and JavaScript covering complex data structures and algorithms."
    },
    {
      title: "Enhanced Automated Oxygen Level Controller for COVID Patient using IoT",
      type: "IEEE Research Publication",
      detail: "Co-authored and published system automation research at an international IEEE conference."
    },
    {
      title: "Cloud Computing Application: Research Challenges and Opportunity",
      type: "IEEE Research Publication",
      detail: "Co-authored and published comparative cloud infrastructure analyses at an international IEEE conference."
    }
  ];

  const skillCategories = [
    {
      name: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML5", "CSS3"]
    },
    {
      name: "Frameworks & UI Tools",
      items: ["Next.js", "React", "Node.js", "AngularJS", "FastAPI", "Django REST", "ServiceNow"]
    },
    {
      name: "Databases & Architecture",
      items: ["PostgreSQL", "MongoDB", "REST APIs", "System Design", "Microservices"]
    },
    {
      name: "AI & Software Engineering",
      items: ["Generative AI", "LLMs", "Data Analytics", "Debugging", "CI/CD", "Automated Testing"]
    }
  ];

  return (
    <>
      <section id="certifications" className="certifications section-padding">
        <div className="container">
          
          {/* Left: Certifications & Publications */}
          <div className="left-panel">
            <p className="tag">CREDENTIALS</p>
            <h2>
              Achievements & <br />
              <span className="gradient-text">Publications</span>
            </h2>
            <p className="summary-desc">
              Academic publications, platform certifications, and algorithmic problem-solving milestones.
            </p>

            <div className="achievement-list">
              {achievements.map((item, idx) => (
                <div key={idx} className="achieve-card glass-panel interactive-card">
                  <span className="achieve-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Categorized Skills Inventory */}
          <div className="right-panel">
            <p className="tag">SKILLS INVENTORY</p>
            <h2>
              Technical <br />
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="summary-desc">
              A comprehensive directory of software engineering technologies, frameworks, and conceptual knowledge.
            </p>

            <div className="skills-grid">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="skill-category glass-panel">
                  <h3>{category.name}</h3>
                  <div className="skill-tags">
                    {category.items.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .certifications {
          background: var(--bg-secondary);
          transition: background-color 0.5s;
          position: relative;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
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
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -1.5px;
        }

        .summary-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 40px;
          font-size: 1.02rem;
        }

        .achievement-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .achieve-card {
          padding: 24px;
        }

        .achieve-type {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--accent-secondary, var(--text-secondary));
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .achieve-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .achieve-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-category {
          padding: 24px;
        }

        .skill-category h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
          border-left: 3px solid var(--accent-primary);
          padding-left: 12px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-item {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 8px;
          transition: transform 0.2s, border-color 0.2s;
        }

        .skill-item:hover {
          transform: translateY(-2px);
          border-color: var(--accent-primary);
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>
    </>
  );
}

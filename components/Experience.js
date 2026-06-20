export default function Experience() {
  const experiences = [
    {
      company: "STMicroelectronics",
      role: "Software Engineer | Enterprise Applications",
      period: "July 2025 – Present",
      location: "Greater Noida, India",
      details: [
        "Troubleshoot and maintain enterprise-scale applications using JavaScript, TypeScript, and REST APIs, resolving high-priority technical bugs to maximize system uptime.",
        "Resolve critical production issues by conducting deep-dive root-cause analysis and implementing workflow resolutions that reduce recurring support tickets.",
        "Work extensively on ServiceNow Strategic Portfolio Management (SPM) modules including DTIT, Capacity Planning, PMMS, and QMT using AngularJS, Jelly scripting, Vanilla JavaScript, UI Policies, and custom workflows.",
        "Lead the workflow development and customization of a new PPAP (Production Part Approval Process) application on ServiceNow, configuring role-based access, form behaviors, workspace customizations, and process automation.",
        "Coordinate debugging efforts across complex workflows and collaborate closely with cross-functional teams to align on product resolutions."
      ],
      skills: ["ServiceNow", "AngularJS", "Jelly Scripting", "JavaScript", "TypeScript", "REST APIs", "Workflows", "UI Policies"]
    },
    {
      company: "Tata Elxsi",
      role: "Cyber Security Developer and Researcher",
      period: "August 2022 – November 2022",
      location: "Bengaluru, India",
      details: [
        "Developed a Python-based automated testing and validation framework to analyze system behaviors, identify security vulnerabilities, and verify application robustness.",
        "Identified and resolved a critical validation process gap independently, improving the engineering team's workflow and validation testing efficiency."
      ],
      skills: ["Python", "Cyber Security", "Automated Testing", "Validation", "Vulnerability Analysis", "Workflow Optimization"]
    }
  ];

  return (
    <>
      <section id="experience" className="experience section-padding">
        <div className="container">
          <div className="left">
            <p className="tag">EXPERIENCE</p>
            <h2>
              Professional <br />
              <span className="gradient-text">History</span>
            </h2>
            <p className="description">
              A record of engineering robust systems, streamlining workflows,
              and contributing to security research and enterprise software scalability.
            </p>
          </div>

          <div className="right">
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item glass-panel interactive-card">
                  <div className="header-info">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>

                  <ul>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>

                  <div className="skills-row">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience {
          background: var(--bg-secondary);
          transition: background-color 0.5s;
          position: relative;
        }

        .container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
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
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.05;
          margin-bottom: 25px;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .description {
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 400px;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .timeline-item {
          padding: 32px;
          position: relative;
        }

        .header-info {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-secondary, var(--text-secondary));
          letter-spacing: 1px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .timeline-item h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--text-primary);
        }

        .timeline-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 24px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 28px;
        }

        li {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 12px;
          font-size: 0.98rem;
        }

        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-badge {
          font-size: 11px;
          font-weight: 600;
          background: var(--tag-bg);
          color: var(--tag-text);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .description {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .timeline-item {
            padding: 20px;
          }
          
          .header-info {
            flex-direction: column;
            gap: 4px;
          }
          
          .timeline-item h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
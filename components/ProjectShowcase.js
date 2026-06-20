export default function ProjectShowcase() {
  const projects = [
    {
      title: "ESG Data Ingestion & Analytics Platform",
      tech: "Django REST • React • PostgreSQL",
      description:
        "Designed scalable data processing pipelines with extensive validation, audit tracking, reporting, and data quality consistency checks across multi-source datasets.",
      status: "completed"
    },
    {
      title: "NutriMind AI SaaS",
      tech: "FastAPI • Gemini API • LLMs",
      description:
        "Engineered an AI-powered SaaS assistant with prompt workflows, LLM-based reasoning, dynamic meal analysis, and optimized real-time inference pipelines.",
      status: "completed"
    },
    {
      title: "SplitMate Expense Tracker",
      tech: "Next.js • Node.js • MongoDB",
      description:
        "Developed a full-stack expense manager featuring payment-ready workflows, notification triggers, and optimized client-server REST API architectures.",
      status: "completed"
    },
    {
      title: "rogii-wellbore-geology-prediction",
      tech: "Python • Machine Learning",
      description:
        "Developing a machine learning pipeline to predict wellbore geology structures and sedimentary patterns from raw sensor data.",
      status: "soon"
    },
    {
      title: "patient-dashboard",
      tech: "React • Node.js • Chart.js",
      description:
        "Building a secure, highly interactive dashboard system to display real-time clinical patient vitals and health progression analytics.",
      status: "soon"
    },
    {
      title: "agentops-ai-skeleton",
      tech: "Gen AI • LangChain • Agents",
      description:
        "Creating a standard reusable blueprint and telemetry framework for deploying and evaluating autonomous multi-agent systems.",
      status: "soon"
    }
  ];

  return (
    <>
      <section id="projects" className="projects section-padding">
        <div className="container">
          <div className="header">
            <p className="tag">PORTFOLIO</p>
            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="subtitle">
              A selection of enterprise software integrations, full-stack architectures,
              and AI applications designed to solve concrete business requirements.
            </p>
          </div>

          <div className="grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card glass-panel interactive-card ${project.status === "soon" ? "soon-card" : ""}`}
              >
                <div className="card-top">
                  <span className="tech-stack">{project.tech}</span>
                  {project.status === "soon" ? (
                    <span className="badge-soon">Coming Soon</span>
                  ) : (
                    <span className="badge-active">Active</span>
                  )}
                </div>

                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects {
          background: var(--bg-primary);
          transition: background-color 0.5s;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .header {
          text-align: center;
          margin-bottom: 70px;
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
          margin: 0 auto 24px auto;
        }

        h2 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .subtitle {
          max-width: 600px;
          margin: auto;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .project-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .soon-card {
          opacity: 0.7;
          border-style: dashed;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .tech-stack {
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-secondary, var(--text-secondary));
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .badge-active {
          font-size: 10px;
          font-weight: 700;
          color: var(--tag-text);
          background: var(--tag-bg);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 8px;
          text-transform: uppercase;
        }

        .badge-soon {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 8px;
          text-transform: uppercase;
        }

        .project-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 14px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .project-card .description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
          
          .project-card {
            padding: 24px;
            min-height: 240px;
          }
        }
      `}</style>
    </>
  );
}
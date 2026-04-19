export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="label">Contact</div>

      <h2>
        Let’s Build
        <br />
        Something Exceptional.
      </h2>

      <p>
        Whether it's enterprise automation, scalable systems,
        premium product development, or digital transformation —
        let’s create something that matters.
      </p>

      <a href="mailto:yourmail@gmail.com">
        Start a Conversation
      </a>

      <style jsx>{`
        .contact {
          min-height: 100vh;
          background: #f8f8f8;
color: black;
          padding: 120px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          opacity: 0.6;
          margin-bottom: 30px;
        }

        h2 {
          font-size: clamp(3rem, 7vw, 7rem);
          line-height: 0.95;
          letter-spacing: -2px;
          margin-bottom: 40px;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 700px;
          opacity: 0.8;
          margin-bottom: 50px;
        }

        a {
          display: inline-block;
          width: fit-content;
          padding: 18px 36px;
          border-radius: 999px;
          background: white;
          color: black;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }

        a:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .contact {
            padding: 80px 30px;
          }
        }
      `}</style>
    </section>
  );
}